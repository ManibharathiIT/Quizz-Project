import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomePageComponent,
  },
  {
    path:'quizz',
    component:TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
