import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  text = 'Kade Helseth - Full Stack Developer -';
  index = 0;
  logoColor = 'white';
  logoColors = ['#537D8D', '#CE8D66', '#913212', '#1F2041', '#2D444D'];

  constructor() {
    this.logoColor = this.logoColors[0];
    this.loopLogoColors();
  }

  loopLogoColors() {
    setTimeout(() => {
      this.changeLogoColor();
      if (this.index < 90) { // exit loop after 15 minutes
        this.loopLogoColors();
      }
    }, 10000);
  }

  changeLogoColor() {
    this.index++;
    this.logoColor = this.logoColors[this.index % this.logoColors.length];
  }

}
