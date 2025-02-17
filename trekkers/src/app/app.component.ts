import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trekkers';
  constructor(private router: Router) {}
  isHomePage() {
    return this.router.url === '/';
  }
}
