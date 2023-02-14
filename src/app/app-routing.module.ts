import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegiterComponent } from './components/regiter/regiter.component';
import { DashComponent } from './components/dash/dash.component';
import { NavComponent } from './components/nav/nav.component';
import { GraficaExamenesComponent } from './components/grafica-examenes/grafica-examenes.component';
import { EnfermedadComponent } from './components/enfermedad/enfermedad.component';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegiterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'mainPage',
    component: MainPageComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  
  {
    path: 'home',
    component: NavComponent,
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      },
      { 
        path: 'estadisticas', component: DashComponent 
      },
    ],
  },
  {
    path: 'control/:id',
    component: EnfermedadComponent,
  },
  {
    path: 'control/:id/addMedicine',
    component: CreateMedicineComponent,
  },
  {
    path: 'control/:id/addExam',
    component: CreateExamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
