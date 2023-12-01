import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle_menu: boolean = true;
  constructor() { }
  togg() {
    return this.toggle_menu = !this.toggle_menu;
  }

  ngOnInit(): void {
  }

}
