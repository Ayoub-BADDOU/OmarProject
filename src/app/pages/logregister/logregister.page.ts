import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logregister',
  templateUrl: './logregister.page.html',
  styleUrls: ['./logregister.page.scss'],
})
export class LogregisterPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    allowSlideNext: false,
    allowSlidePrev: false
  };

  ville: string = "الرباط";
  showSuccessAlerte: boolean = false;
  showErrorAlerte: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  nextSlide(slide, index) {
    slide.slideTo(index)
  }

  register() {
    this.showSuccessAlerte = true;
  }

}
