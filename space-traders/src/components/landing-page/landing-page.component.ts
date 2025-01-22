import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

  export class LandingPageComponent implements OnInit{
    constructor(private http: HttpClient) {
    }
    
    data: any;

    ngOnInit() {
    this.http.get('https://api.spacetraders.io/v2').subscribe((data) => {
      console.log('Teste 1')
      console.log(data);
      console.log('Isto é um teste!')
      this.data = data;
      
    });
  }
}