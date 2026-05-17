import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BadgeComponent} from '../badge/badge.component';
import {ButtonComponent} from '../button/button.component';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-work-card',
  imports: [
    BadgeComponent,
    ButtonComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkCardComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) image!: string;
  @Input() imageAlt?: string;
  @Input({required: true}) labels!: string[];
  @Input({required: true}) id!: string;
  @Input() badge?: string;
  @Input() badgeAlt?: string;
  constructor(private router: Router) {}
  onViewWork() {
    this.router.navigate(['/work', this.id]);
  }
}
