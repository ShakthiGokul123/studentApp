import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ListstudentComponent } from './liststudent/liststudent.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'listStudent',
    component:ListstudentComponent
  },
  {
    path:'',
    pathMatch:"full",
    redirectTo:'./student'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
