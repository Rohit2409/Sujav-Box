import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';
  passwordFieldType: string = 'password';

  constructor(private router: Router) {}

  onSubmit(loginForm: NgForm): void {
    // Check if the form is valid
    if (loginForm.valid) {
      // For demonstration, let's assume a successful login
      this.successMessage = 'Login successful!';

      // Clear form fields after a short delay
      setTimeout(() => {
        this.resetForm();
      }, 2000);

      // Navigate to main screen after a short delay
      setTimeout(() => {
        this.router.navigate(['/main']);
      }, 2000);
    }
  }

  resetForm(): void {
    this.username = '';
    this.password = '';
    this.successMessage = '';
    // Reset password field type to 'password' for security
    this.passwordFieldType = 'password';
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = (this.passwordFieldType === 'password') ? 'text' : 'password';
  }
}
