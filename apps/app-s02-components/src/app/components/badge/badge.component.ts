import { Component, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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

  @HostBinding('class')
  get cssClass(): string {
    return `badge bg-${this.tier} ${this.textColor ? this.textColor : ''}`;
  }

  constructor() {
  }

  ngOnInit(): void {
    // console.log('tier', this.tier);
    switch (this.tier) {
      case 'warning':
      case 'light':
      case 'info':
        this.textColor = 'text-dark';
        break;
    }

  }

}
