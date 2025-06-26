import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  private apiUrl = 'https://send-email.mauricio-vereau.workers.dev/';

  constructor(private http: HttpClient) { }

  enviarCorreo(payload: any){
    return this.http.post(this.apiUrl, payload);
  }
}
