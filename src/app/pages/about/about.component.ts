import { Component } from '@angular/core';
import { faAngular, faBootstrap, faCss3Alt, faHtml5, faJava, faJs, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faShieldHalved, faT, faUserShield } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  iconAngular = faAngular;
  iconHtml = faHtml5;
  iconCss = faCss3Alt;
  iconJs = faJs;
  iconBootstrap = faBootstrap;
  iconPython = faPython

  iconJava = faJava;

  iconDb = faDatabase;
  iconNode = faNodeJs

}
