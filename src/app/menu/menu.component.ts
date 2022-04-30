import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { menuData } from './menu-data';

interface MenuToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
        style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
        style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'})
        ]))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  @Output() onToggleMenu: EventEmitter<MenuToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  menuData = menuData;

  

  constructor() { }

  closeMenunav(): void {
    this.collapsed = false;
    this.onToggleMenu.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleMenu.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleMenu.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

}
