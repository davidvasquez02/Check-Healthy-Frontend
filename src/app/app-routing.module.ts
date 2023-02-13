import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiterComponent } from './components/regiter/regiter.component';


const routes: Routes = [
  
  {
    path: '', component: RegiterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
