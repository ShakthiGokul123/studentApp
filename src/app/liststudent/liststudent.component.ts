import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student/student.service'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import {Router} from '@angular/router'

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  studentArray;
  constructor(private service:StudentService ,private router:Router) { }

  ngOnInit() {
    
  }

}
