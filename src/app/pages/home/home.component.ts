import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  currentIndex = 0; // 0: vision, 1: about, 2: experience
  totalComponents = 3; // Total de componentes en el carrusel

  nextComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.totalComponents;
  }

  prevComponent() {
    this.currentIndex = (this.currentIndex - 1 + this.totalComponents) % this.totalComponents;
  }



}
