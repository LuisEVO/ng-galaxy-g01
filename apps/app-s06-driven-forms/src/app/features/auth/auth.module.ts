import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInView } from './views/sign-in/sign-in.view';
import { FormsModule } from '@angular/forms';
import { AppFormsModule } from '../../commons/forms/forms.module';
import { AppComponentsModule } from '../../commons/components/components.module';


@NgModule({
  declarations: [
    SignInView
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    AppFormsModule,
    AppComponentsModule
  ]
})
export class AuthModule { }
