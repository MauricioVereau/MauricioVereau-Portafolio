import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '../../services/send-email.service';
import { faCheckCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

declare global {
  interface Window {
    turnstile: any;
  }
}

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit, AfterViewInit {
  @Output() cerrar = new EventEmitter<void>();

  iconPlane = faPaperPlane;
  iconSuccess = faCheckCircle;

  contactoForm!: FormGroup;
  turnstileToken: string = '';
  turnstileWidgetId: any;

  isSubmitting = false;
  isSubmitted = false;
  turnstileError = false;

  constructor(private fb: FormBuilder, private emailService: SendEmailService) { }

  ngOnInit(): void {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required],
      turnstileToken: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.initTurnstileWithRetry();
  }

  private initTurnstileWithRetry(attempt: number = 0): void {
    const MAX_ATTEMPTS = 3;
    const RETRY_DELAY = 500;

    if (attempt >= MAX_ATTEMPTS) {
      console.warn('Turnstile no se pudo cargar después de varios intentos');
      this.turnstileError = true;
      return;
    }

    if (typeof window.turnstile === 'undefined') {
      setTimeout(() => this.initTurnstileWithRetry(attempt + 1), RETRY_DELAY);
      return;
    }

    this.renderTurnstile();
  }

  private renderTurnstile(): void {
    const container = document.getElementById('turnstile-container');
    if (!container) return;

    // Limpiar contenedor solo si ya hay un widget
    if (this.turnstileWidgetId && window.turnstile) {
      window.turnstile.remove(this.turnstileWidgetId);
    }

    try {
      this.turnstileWidgetId = window.turnstile.render(container, {
        sitekey: '0x4AAAAAABiXIlAgVL2xQnjE',
        callback: (token: string) => {
          this.contactoForm.get('turnstileToken')?.setValue(token);
          this.turnstileToken = token;
          this.turnstileError = false;
        },
        'error-callback': () => {
          this.turnstileError = true;
        }
      });
    } catch (error) {
      console.error('Error al renderizar Turnstile:', error);
      this.turnstileError = true;
    }
  }

  enviarFormulario(): void {
    if (this.contactoForm.invalid || !this.turnstileToken) {
      this.contactoForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.isSubmitted = false;

    const datos = this.contactoForm.value;

    this.emailService.enviarCorreo(datos).subscribe({
      next: () => {
        this.handleSuccess();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  private handleSuccess(): void {
    this.isSubmitting = false;
    this.isSubmitted = true;

    setTimeout(() => {
      this.resetForm();
      this.cerrar.emit();
    }, 2000);
  }

  private resetForm(): void {
    this.contactoForm.reset();
    this.turnstileToken = '';
    this.turnstileError = false;

    if (this.turnstileWidgetId && window.turnstile) {
      window.turnstile.reset(this.turnstileWidgetId);
    }
  }

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
