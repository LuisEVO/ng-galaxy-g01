import { Component, Input, OnInit } from '@angular/core';
import { Tier } from '../../types/tier.type';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() tier: Tier;
  @Input() value: string;
  textColor: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log('tier', this.tier);

    switch (this.tier) {
      case 'warning':
      case 'light':
      case 'info':
        this.textColor = 'text-dark';
        break;
    }

  }

}
