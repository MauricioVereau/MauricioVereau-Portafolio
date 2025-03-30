import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private currentLangSubject = new BehaviorSubject<string>(this.getSavedLang() || 'en');
  public currentLang$ = this.currentLangSubject.asObservable();
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadTranslations(this.getCurrentLang());
  }

  /**
   * Carga las traducciones desde el archivo JSON correspondiente al idioma seleccionado.
   * @param lang Código del idioma (ej. 'es', 'en')
   */
  loadTranslations(lang: string): void {
    this.http.get(`/assets/i18n/${lang}.json`).pipe(
      catchError(err => {
        console.error(`Error cargando traducciones para ${lang}:`, err);
        return of({}); // Evita que la app falle si el archivo no existe
      })
    ).subscribe(data => {
      this.translations = data;
      this.currentLangSubject.next(lang);
      this.saveLang(lang); // Guarda el idioma en localStorage
    });
  }

  /**
   * Obtiene una traducción basada en una clave.
   * Soporta claves anidadas, como 'workflow.title'.
   * @param key Clave del JSON (ej. 'workflow.title')
   * @returns Traducción o la clave si no se encuentra.
   */
  getTranslation<T = string>(key: string): T {
    return key.split('.').reduce((obj, part) => obj?.[part], this.translations) as T;
  }

  /**
   * Cambia el idioma de la aplicación y recarga las traducciones.
   * @param lang Código del idioma (ej. 'es', 'en')
   */
  setLanguage(lang: string): void {
    if (lang !== this.getCurrentLang()) {
      this.loadTranslations(lang);
    }
  }

  /**
   * Obtiene el idioma actual.
   * @returns Código del idioma actual
   */
  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

  /**
   * Guarda el idioma seleccionado en localStorage.
   * @param lang Código del idioma
   */
  private saveLang(lang: string): void {
    localStorage.setItem('selectedLang', lang);
  }

  /**
   * Recupera el idioma guardado en localStorage (si existe).
   * @returns Código del idioma o null si no está guardado
   */
  private getSavedLang(): string | null {
    return localStorage.getItem('selectedLang');
  }
}
