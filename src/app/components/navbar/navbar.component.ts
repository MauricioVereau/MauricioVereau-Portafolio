import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  texts: string[] = [];
  displayedText = "";
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;

  isDarkMode = false;
  isSticky: boolean = false; // Estado del menú fijo

  private typingSpeed = 50; // Velocidad de escritura
  private deletingSpeed = 0; // Velocidad de borrado
  private pauseBeforeDeleting = 1000; // Pausa antes de borrar
  private typingTimeout: any; // 🛑 Referencia al `setTimeout()`

  constructor(private renderer: Renderer2, public translate: TranslateService) {}

  ngOnInit() {
    this.loadTexts();
    this.translate.currentLang$.subscribe(() => {
      this.loadTexts();
    });
  }

  /**
   * Carga los textos de bienvenida desde el JSON de traducciones.
   */
  loadTexts() {
    const welcomeMessages = this.translate.getTranslation<string[]>('header.welcomeMessages');
    const newTexts = Array.isArray(welcomeMessages) ? welcomeMessages : [];

    this.updateTexts(newTexts);
  }

  /**
   * Reinicia los textos sin afectar la velocidad.
   */
  updateTexts(newTexts: string[]) {
    if (JSON.stringify(newTexts) === JSON.stringify(this.texts)) return; // Evita cambios innecesarios

    // 🛑 Limpiar cualquier animación previa para evitar solapamiento de velocidad
    clearTimeout(this.typingTimeout);

    const currentText = this.displayedText;
    this.texts = newTexts;

    // Mantener la animación donde quedó
    const newIndex = this.texts.indexOf(currentText);
    this.textIndex = newIndex !== -1 ? newIndex : 0;
    this.charIndex = this.isDeleting ? currentText.length : 0;

    this.typeEffect(); // 🔥 Reiniciar sin solapar timers
  }

  /**
   * Efecto de escritura automática.
   */
  typeEffect() {
    if (this.texts.length === 0) return;

    const currentText = this.texts[this.textIndex];

    if (!this.isDeleting) {
      this.displayedText = currentText.substring(0, this.charIndex++);
      if (this.charIndex === currentText.length + 1) {
        this.isDeleting = true;
        this.typingTimeout = setTimeout(() => this.typeEffect(), this.pauseBeforeDeleting);
        return;
      }
    } else {
      this.displayedText = currentText.substring(0, this.charIndex--);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }
    }

    this.typingTimeout = setTimeout(() => this.typeEffect(), this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }

  /**
   * Cambia el idioma de la aplicación.
   * @param lang Código del idioma (ej. 'es', 'en')
   */
  changeLanguage(lang: string): void {
    this.translate.setLanguage(lang);
  }

  /**
   * Alternar modo oscuro/claro.
   */
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
  }

  /**
   * Detecta el scroll para hacer sticky el navbar.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const banner = document.getElementById('banner');
    if (banner) {
      const bannerBottom = banner.getBoundingClientRect().bottom;
      this.isSticky = bannerBottom <= 0;
    }
  }
}
