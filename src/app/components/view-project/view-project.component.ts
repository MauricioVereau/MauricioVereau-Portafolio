import { Component, Input } from '@angular/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrl: './view-project.component.css'
})
export class ViewProjectComponent {
  @Input() project: any;
  iconLink = faLink;
  iconGitHub = faGithubAlt; // Recibe un proyecto como Input

}
