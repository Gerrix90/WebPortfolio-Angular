import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showOverlay = false;

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }
}
