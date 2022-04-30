import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  varTime = 'HH:MM:SS';

  getBodyClass(): string {

    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768 ) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768  && this.screenWidth > 0) {
      styleClass = 'body-m-screen'
    }
    return styleClass;

  }

  constructor() { }

  ngOnInit(): void {

    setInterval(()=>{
      this.varTime = this.getTime();
    }, 1000);

  }

  public getTime():string{
    var d = new Date();
    var s = d.getSeconds().toString();
    s = s.length < 2 ? `0${s}` : `${s}`;
    var m = d.getMinutes().toString();
    m = m.length < 2 ? `0${m}` : `${m}`;
    var h = d.getHours().toString();
    h = h.length < 2 ? `0${h}` : `${h}`;

    return `${h}:${m}:${s}`;
  }

}
