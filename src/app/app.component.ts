import { Component } from '@angular/core';

interface MenuToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parking_2';

  isMenuCollapsed = false;
  screenWidth = 0;

  onToggleMenu(data: MenuToggle): void {
    this.screenWidth = data.screenWidth;
    this.isMenuCollapsed = data.collapsed;

  }
}
