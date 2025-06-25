import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { faComputer, faDatabase, faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent {

  iconPc = faComputer;
  iconNt = faMobileAndroidAlt;
  iconDb = faDatabase

  workflowTexts: any = {};

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.loadWorkflowTexts();
    this.translate.currentLang$.subscribe(() => this.loadWorkflowTexts());
  }


  public changeLanguage(lang: string) {
    this.translate.setLanguage(lang);
  }

  /**
   * Carga los textos de workflow desde las traducciones.
   */
  loadWorkflowTexts() {
    this.workflowTexts = this.translate.getTranslation('workflow') || {};
    console.log('Textos de Workflow:', this.workflowTexts); // Depuración
  }
}
