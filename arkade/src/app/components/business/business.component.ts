import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  public now: Date = new Date();

    constructor() {
        setInterval(() => {
          this.now = new Date();
        }, 1);
    }
}
