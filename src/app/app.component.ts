import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {

  }

  public goTomain(): void {
    console.log('button clicked!');
    this.router.navigate(['main']);

  }
}
