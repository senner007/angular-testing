import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../InjectableServices/library/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [LibraryService], // Instantiates new service on each route call
})
export class MainComponent implements OnInit {
  constructor(private adapter: LibraryService, private router: Router) {
    console.log('main instantiated');
  }

  // Reloads component on each route call
  ngOnInit(): void {
    console.log('main init');
    console.log(this.adapter.read());
  }

  public goToApp(): void {
    this.router.navigate(['/']);
  }
}
