import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  imports: [],
  templateUrl: './carousel-component.html',
  styleUrl: './carousel-component.css',
})
export class CarouselComponent implements OnInit, OnDestroy {

  images = [
    "assets/images/screenshots/dashboard.png",
    "assets/images/screenshots/project-memebers.png",
    "assets/images/screenshots/task-screen.png",
  ];

  currentIdx = 0;
  intervalId: any;
  transition = true;


  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextIdx();
    }, 2000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextIdx() {
    this.currentIdx = (this.currentIdx + 1) % this.images.length;
  }

  prevIdx() {
    this.currentIdx = (this.currentIdx - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIdx = index;
  }


  onTransitionEnd() {
    // If at fake last slide
    if (this.currentIdx === this.images.length - 1) {
      this.transition = false;
      this.currentIdx = 1;
    }

    // If at fake first slide
    if (this.currentIdx === 0) {
      this.transition = false;
      this.currentIdx = this.images.length - 2;
    }

    setTimeout(() => {
      this.transition = true;
    });
  }

}
