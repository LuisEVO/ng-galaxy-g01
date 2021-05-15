import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'glx-icon',
  template: '<span class="icon-{{ name }}"></span>',
  styles: [`
    @import './'
    $color = 'red';
    .icon {
      background: $color
    }
  `],
})
export class IconComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
