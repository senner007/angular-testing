import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '@services/library/library.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [LibraryService], // Instantiates new service on each route call
})
export class MainComponent implements OnInit {

  constructor(private library: LibraryService, private router: Router) {
    console.log('main instantiated');
  }

  // Reloads component on each route call
  ngOnInit(): void {
    console.log('main init');
    console.log(this.library.read());
  }

  public goToApp(): void {
    this.router.navigate(['/']);
  }
}
