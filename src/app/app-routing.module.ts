import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';
import { BiographyComponent } from './biography/biography.component';
import { ContactmeComponent } from './contactme/contactme.component'
import { HomeComponent } from './home/home.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Resume', component: ResumeComponent},
  {path: 'Biography', component: BiographyComponent},
  {path: 'ContactMe', component: ContactmeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Quizzes', component: QuizzesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
