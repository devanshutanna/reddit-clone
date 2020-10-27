import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { MaximizedArticleComponent } from './maximized-article/maximized-article.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:"", component:ArticlesComponent },
  { path:"articles", component:ArticlesComponent },
  { path:"articles/:id", component:MaximizedArticleComponent },
  { path:"login", component:LoginComponent },
  { path:"signup", component:SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
