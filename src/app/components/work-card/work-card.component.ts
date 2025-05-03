import {Component, Input} from '@angular/core';
import {BadgeComponent} from '../badge/badge.component';
import {ButtonComponent} from '../button/button.component';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-work-card',
  imports: [
    BadgeComponent,
    ButtonComponent,
    NgForOf
  ],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss'
})
export class WorkCardComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) image!: string;
  @Input({required: true}) labels!: string[];
  constructor(private router: Router) {}
  onViewWork() {
    this.router.navigate(['/work']);
  }
}
