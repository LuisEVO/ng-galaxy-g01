import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import { RadioGroupOption } from 'apps/app-s06-driven-forms/src/app/commons/components/radio-group/radio-group.interface';

@Component({
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.css']
})
export class SignInView implements OnInit {
  credentials = {
    email: '',
    password: ''
  }

  rols: RadioGroupOption[] = [
    { label: 'Admin', value: 'A' },
    { label: 'Student', value: 'S' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  signIn(form: NgForm) {
    console.log(form);
    if (form.valid) {
      console.log(form.value);
    }
    // call service
  }

}
