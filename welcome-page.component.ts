import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  hide = signal(true);
  userName:string='';
  constructor(private router:Router){

  }
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  onSubmit(){

    localStorage.setItem('userName', this.userName);
    this.router.navigate(['/quizz']);
  }
}
