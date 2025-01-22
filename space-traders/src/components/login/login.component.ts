import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 token = '';
 username = '';

 getUserName(event:Event){
  const inputUsername = (event.target as HTMLInputElement).value;
  this.username = inputUsername;
 }
 getToken(event:Event){
  const inputToken = (event.target as HTMLInputElement).value;
  this.token = inputToken;
 }
}
