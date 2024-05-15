import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
  code: string = '';
  heading: string = '';
  suggestion: string = '';
  isAnonymous: boolean = false;
  armyNo: string = '';
  companyName: string = '';
  mobileNumber: string = '';
  suggestionForm: any;
  successMessage: string = '';

  constructor(private router: Router) { }

  onSelectAnonymous(event: any): any {
    if (event.target.checked) {
      // this.suggestion = '';
      this.armyNo = '';
      this.companyName = '';
      this.mobileNumber = '';
    }

  }

  onSubmit(form: any): void {
    this.successMessage = 'Submitted successfully';

    setTimeout(() => {
      this.resetForm();
  }, 2000);
  
    console.log({
      code: this.code,
      heading: this.heading,
      suggestion: this.suggestion,
      isAnonymous: this.isAnonymous,
      armyNo: this.isAnonymous ? null : this.armyNo,
      companyName: this.isAnonymous ? null : this.companyName,
      mobileNumber: this.isAnonymous ? null : this.mobileNumber
    });

  }

  resetForm(): void {
    console.log("Resetting form...");

    
    this.suggestion = '';
    this.isAnonymous = false;
    this.armyNo = '';
    this.companyName = '';
    this.mobileNumber = '';
    this.successMessage = '';
  }



  cancel(): void {
    this.router.navigate(['/main']);
  }
}
