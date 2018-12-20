import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private showSidebar: boolean;

  toggleSidebar(sb) {
    this.showSidebar = !this.showSidebar;
    this.app.toggleOverlay();
  }

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.showSidebar = false;
  }

}
