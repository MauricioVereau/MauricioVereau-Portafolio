import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
export class SendEmailComponent implements OnInit {

  @Output() cerrar = new EventEmitter<void>();

  iconPlane = faPaperPlane;
  iconSuccess = faCheckCircle;

  contactoForm!: FormGroup;
  isTurnstileValid: boolean = false;
  turnstileToken: string = '';
  turnstileWidgetId: any;

  isSubmitting = false;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private emailService: SendEmailService) { }


  ngOnInit(): void {
    this.initTurnstile();
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required],
      turnstileToken: ['', Validators.required]
    });
  }

  initTurnstile() {
    const interval = 2 * 60 * 1000; // 2 minutos
    const sitekey = '0x4AAAAAABiXIlAgVL2xQnjE';

    const checkApi = setInterval(() => {
      if (typeof window['turnstile'] !== 'undefined') {
        clearInterval(checkApi);

        this.turnstileWidgetId = window['turnstile'].render('#turnstile-container', {
          sitekey,
          callback: (token: string) => {
            this.contactoForm.get('turnstileToken')?.setValue(token);
            this.turnstileToken = token;
          }
        });

        setInterval(() => {
          window['turnstile'].reset(this.turnstileWidgetId);
        }, interval);
      }
    }, 500);
  }


  enviarFormulario(): void {

    console.log('Enviando formulario...', this.contactoForm.value);

    if (this.contactoForm.invalid || !this.turnstileToken) {
      this.contactoForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.isSubmitted = false;

    const datos = {
      nombre: this.contactoForm.get('nombre')?.value,
      email: this.contactoForm.get('email')?.value,
      telefono: this.contactoForm.get('telefono')?.value,
      mensaje: this.contactoForm.get('mensaje')?.value,
      turnstileToken: this.turnstileToken
    };

    this.emailService.enviarCorreo(datos).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.isSubmitted = true;

        setTimeout(() => this.isSubmitted = false, 3000);
        this.contactoForm.reset();
        this.turnstileToken = '';
        window['turnstile'].reset(this.turnstileWidgetId);
        this.cerrar.emit(); // Cierra el modal si es necesario
      },
      error: (err) => {
        this.isSubmitting = false;

        if (err.status === 429) {

          return;
        }

      }
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }
}
