import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css'],
})
export class CreateaccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registrationForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
    Designation: new FormControl('', Validators.required),
  });
  get Name() {
    return this.registrationForm.get('Name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get mobile() {
    return this.registrationForm.get('mobile');
  }
  get confirmpassword() {
    return this.registrationForm.get('confirmpassword');
  }
  get Designation() {
    return this.registrationForm.get('Designation');
  }

  registration() {
    var obj = {
      Name: this.registrationForm.value.Name,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      mobile: this.registrationForm.value.mobile,
      Designation: this.registrationForm.value.Designation,
      confirmpassword: this.registrationForm.value.confirmpassword,
    };
  }
}
