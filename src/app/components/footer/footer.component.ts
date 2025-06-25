import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent{
  // Usamos un EventEmitter para pasar la posición
    iconLk = faLinkedinIn;
  iconGh = faGithub;

}
