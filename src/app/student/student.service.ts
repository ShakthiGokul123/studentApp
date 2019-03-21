import { Injectable } from '@angular/core';
import Student from '../student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList = [];
  listFromLocalStorage;

  constructor() { }

  addStudent(student) {
    var studentobj: any = { rollNo: student.rollNo, dob: student.dob, firstName: student.firstName, lastName: student.parentName, parentPhone: student.parentPhone, address: student.address }
    this.studentList.push(studentobj);
    if (this.studentList.length >= 0) {
      localStorage.setItem("student", JSON.stringify(this.studentList));
    }
  }
  getListFromLocalStorage() {
    if (JSON.parse(localStorage.getItem('student')) !== null) {
      this.listFromLocalStorage = JSON.parse(localStorage.getItem('student'));
      return this.listFromLocalStorage
    }
  }
  deleteAllRecordsFromLocalStorage() {
    if (JSON.parse(localStorage.getItem('student')) !== null) {
      this.studentList = JSON.parse(localStorage.getItem('student'));
      this.studentList.length = 0;
      localStorage.setItem("student", JSON.stringify(this.studentList));
    }
  }
  editRecordFromLocalStorage(student) {
    if (JSON.parse(localStorage.getItem('student')) != null) {
      this.studentList = JSON.parse(localStorage.getItem('student'));
      if (this.studentList.length != null) {
        for (var i = 0; i < this.studentList.length; i++) {
          if (student.rollNo == this.studentList[i].rollNo) {
            this.studentList[i] = student;
            return this.studentList[i];
          }
        }
      }
    }
  }
  updateRecordToLocalStorage(student) {
    for (var i = 0; i < this.studentList.length; i++) {
      if (student.rollNo == this.studentList[i].rollNo) {
        this.studentList[i] = student;
        localStorage.setItem("student", JSON.stringify(this.studentList));
      }
    }

  }
deleteOneRecord(student){
  this.studentList = JSON.parse(localStorage.getItem('student'));
  for(var i=0;i<this.studentList.length;i++){
    if(this.studentList[i].rollNo === student.rollNo){
      this.studentList.splice(i,1);
      localStorage.setItem("student", JSON.stringify(this.studentList));
    }
  }
}

}
