import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.css'
})
export class ViewCardComponent {
  @Input() certificado: any;
  @Input() viewCredText: string = '';
}
