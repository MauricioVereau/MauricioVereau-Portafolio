import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { faClose, faW } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  @Output() cerrar = new EventEmitter<void>();

  iconWhatsapp = faWhatsapp;
  iconLinkedin = faLinkedin;
  iconIg = faInstagram;
  iconGithub = faGithub;
  iconGmail = faGoogle;
  iconTwitter = faTwitter;

  iconCerrar = faClose;

  constructor(public translate: TranslateService) {}
}
