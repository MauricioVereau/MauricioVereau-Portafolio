import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download-cv',
  templateUrl: './download-cv.component.html',
  styleUrl: './download-cv.component.css'
})
export class DownloadCvComponent {

  @Output() cerrar = new EventEmitter<void>();
  iconCerrar = faClose;

  cvUrl = '';

  constructor(public translate: TranslateService) {}

  ngOnInit() {
    this.updateCvUrl();
    this.translate.currentLang$.subscribe(() => this.updateCvUrl());
  }

  changeLanguage(lang: string) {
    this.translate.setLanguage(lang);
    // updateCvUrl se llamará automáticamente por la suscripción
  }

  updateCvUrl() {
    const lang = this.translate.getCurrentLang();
    this.cvUrl = lang === 'en'
      ? 'assets/doc/MauricioVereau-EN.pdf'
      : 'assets/doc/MauricioVereau-ES.pdf';
  }
}
