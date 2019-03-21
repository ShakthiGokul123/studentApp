import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from './student.service'
// import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
   student1:any = {};
   ListFromLocalStorage;
   studentList:any = []
  constructor(private studentService:StudentService) { }
 
  ngOnInit() {
    this.ListFromLocalStorage=this.studentService.getListFromLocalStorage();
     }
  

  addStudent(){
   this.studentService.addStudent(this.student1);
  }
  deleteAllRecordsFromLocalStorage(){
    this.studentService.deleteAllRecordsFromLocalStorage();
  }
  editRecordFromLocalStorage(student){
    this.student1=this.studentService.editRecordFromLocalStorage(student);
  }
  updateStuedent(student){
    this.studentService.updateRecordToLocalStorage(student)
  }
  deleteOneRecord(student){
    this.studentService.deleteOneRecord(student)
  }
}
