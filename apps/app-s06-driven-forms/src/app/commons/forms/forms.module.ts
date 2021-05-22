import { NgModule } from '@angular/core';
import { EmailFormatDirective } from './email-format.directive';

@NgModule({
  declarations: [
    EmailFormatDirective
  ],
  exports: [
    EmailFormatDirective
  ]
})
export class AppFormsModule { }
