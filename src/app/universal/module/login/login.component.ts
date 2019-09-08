import { DataStore } from '../../../engine/utilities/data-store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  dataStore: DataStore;
  otpTrigger: boolean = false;
  constructor(public router: Router, private http: HttpClient, private fb: FormBuilder, ) {
    this.dataStore = DataStore.getInstance();
    this.loginForm = this.fb.group({
      user_id: [''],
      password: ['']
    });

  }
  getStarted(){
    this.otpTrigger = true;
  }
  gotoDashBoard() {
    this.router.navigate(['/universal/view/dashboard']);
  }
  ngOnInit() {
  }
}
