import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   student = {rollNo:0,
  firstName:"",
  lastName:"",
  dob:"",
  parentName:"",
  parentPhone:"",
  address:""
};
studentList=[];
   
  constructor() { }
  getStudent(){
    return this.studentList;
  }

 addStudent(student){
  console.log(this.studentList);
   this.studentList.push(this.student);
   
   //localStorage.setItem("student",JSON.stringify(this.studentList));
 }
 

}
