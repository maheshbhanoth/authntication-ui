import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  template: '<h2>Registration Successfull!!</h2>',
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

}
