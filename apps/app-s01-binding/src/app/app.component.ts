import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Galaxy Training';
  student = { name: 'Luis', lastName: 'Vilcarromero' };
  active = true;

  save(): void {
    console.log('guardar');
  }
}
