import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegiterComponent } from './components/regiter/regiter.component';

const routes: Routes = [
  
  {
    path: 'register', component: RegiterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'nav', component: NavbarComponent,
    children: 
    [
      {
        path: 'mainPage', component: MainPageComponent
      },
      {
        path: '', redirectTo: '/mainPage', pathMatch: 'full'
      },
      
    ]
=======
import { RegiterComponent } from './components/regiter/regiter.component';


const routes: Routes = [
  
  {
    path: '', component: RegiterComponent
>>>>>>> 64c65393f60745eb41371282321382f45c1e6e34
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
