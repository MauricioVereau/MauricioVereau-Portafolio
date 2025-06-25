import { Component } from '@angular/core';
import { faBusinessTime, faCertificate, faCode, faFileDownload, faGraduationCap, faIdCard, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  iconStudy = faGraduationCap;
  iconBusiness = faBusinessTime;
  iconResumen = faIdCard;

  iconDownload = faFileDownload

  experienceData: any;
  certificationsData: any = {};

  iconCd = faCode;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.loadExperienceTexts();
    this.translate.currentLang$.subscribe(() => this.loadExperienceTexts());
  }

  public changeLanguage(lang: string) {
    this.translate.setLanguage(lang);
  }

  /**
   * Carga los textos de experiencia desde las traducciones.
   */
  loadExperienceTexts() {
    this.experienceData = this.translate.getTranslation('experience') || {};
    console.log('Datos de Experiencia:', this.experienceData); // Depuración

    this.certificationsData = this.translate.getTranslation('certifications') || {};
    console.log('Datos de Certificaciones:', this.certificationsData);
  }

}
