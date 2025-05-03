import { Component } from '@angular/core';
import {BreadcrumbsComponent} from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-brand-card',
  imports: [
    BreadcrumbsComponent
  ],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.scss'
})
export class BrandCardComponent {
  links = [
    { label: 'Home', path: ''},
    { label: 'Work', path: ''},
    { label: 'Power House GYM', path: ''},
  ]
}
