import { Component, Input } from '@angular/core';

export interface TechMedal {
  name: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  items: TechMedal[];
}

@Component({
  selector: 'app-tech-icons',
  templateUrl: './tech-icons.component.html',
  styleUrl: './tech-icons.component.css'
})
export class TechIconsComponent {

  @Input() categories: TechCategory[] = [];

}
