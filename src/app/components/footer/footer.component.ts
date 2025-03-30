import { Component } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  iconIg = faInstagram;
  iconLk = faLinkedinIn;
  iconGh = faGithub;

}
