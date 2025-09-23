import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html'
})
export class ViewCardComponent {
  @Input() certificado: any;
  @Input() viewCredText: string = '';
}
