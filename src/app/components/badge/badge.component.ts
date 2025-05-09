import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input({required: true}) label!: string;
  @Input() size: string | undefined;
}
