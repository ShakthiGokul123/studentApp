import { Component, OnInit } from '@angular/core';
import {StudentService} from './student.service'
// import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student = {rollNo:0,
    firstName:"",
    lastName:"",
    dob:"",
    parentName:"",
    parentPhone:"",
    address:""
  };
  constructor(private service:StudentService) { }

  ngOnInit() {
    // this.student=this.service.getStudent();
  }
  addstudent(student){
    
   this.service.addStudent(student);
  
  
 
  }
  
}
