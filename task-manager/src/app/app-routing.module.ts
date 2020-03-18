import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskRegisterComponent } from './task-register/task-register.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'register'},
  {path: 'register', component: TaskRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
