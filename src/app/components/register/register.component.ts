import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { from } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registrationForm: FormGroup;

constructor(private fb: FormBuilder, private http: HttpClient){
  this.registrationForm=this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}

onSubmit(){
  if(this.registrationForm.valid){
    this.http.post('http://localhost:8080/api/users/register', this.registrationForm.value)
    .subscribe({
      next: () => alert('Registration Successful!'),
      error: err=> alert('Registration failed: '+err.message)
    });
  }
}

}
