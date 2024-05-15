import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/login']); 
  }
  
  goToSuggestion(role: string) {
    console.log("Navigating to suggestion with role:", role);
    this.router.navigate(['/suggestion', role]);
  }
  
}
