import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { StickyService } from '../../services/sticky.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  isFooterVisible = false;
  isSticky = false;
  currentIndex = 0;
  totalComponents = 3;

  constructor(private stickyService: StickyService) { }

  ngOnInit() {
    this.stickyService.isSticky$.subscribe(value => {
      this.isSticky = value;
    });
  }

  ngAfterViewInit(): void {
    const footer = document.getElementById('footer'); // Nos basamos en este ID

    if (footer) {
      new IntersectionObserver(
        ([entry]) => {
          this.isFooterVisible = entry.isIntersecting;
        },
        {
          root: null,
          threshold: 0.1
        }
      ).observe(footer);
    }
  }

  nextComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.totalComponents;
  }

  prevComponent() {
    this.currentIndex = (this.currentIndex - 1 + this.totalComponents) % this.totalComponents;
  }

  // Variables para el swipe
  touchStartX = 0;
  touchStartY = 0;
  swipeDeltaX = 0;
  swipeInProgress = false;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.swipeDeltaX = 0;
    this.swipeInProgress = false;
  }

  onTouchMove(event: TouchEvent) {
    const moveX = event.touches[0].clientX;
    const moveY = event.touches[0].clientY;
    const deltaX = moveX - this.touchStartX;
    const deltaY = moveY - this.touchStartY;

    if (!this.swipeInProgress && Math.abs(deltaX) > Math.abs(deltaY)) {
      this.swipeInProgress = true;
    }

    if (this.swipeInProgress) {
      this.swipeDeltaX = deltaX;
    }
  }

  onTouchEnd() {
    if (!this.swipeInProgress) return;

    if (this.swipeDeltaX < -50 && this.currentIndex < this.totalComponents - 1) {
      this.currentIndex++;
    } else if (this.swipeDeltaX > 50 && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.swipeDeltaX = 0;
    this.swipeInProgress = false;
  }

  goToIndex(index: number): void {
    this.currentIndex = index;
    this.swipeDeltaX = 0; // resetear posición por si hay movimiento touch
  }

}
