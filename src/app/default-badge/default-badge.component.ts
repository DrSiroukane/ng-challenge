import {Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-default-badge',
  templateUrl: './default-badge.component.html',
  styleUrls: ['./default-badge.component.css'],
  animations: [
    trigger('badgeState', [
      state('active', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class DefaultBadgeComponent implements OnInit {

  @Input() txt: string;
  @Input() img: string;
  @Input() visible: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
