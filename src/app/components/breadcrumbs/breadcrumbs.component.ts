import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from '@angular/router';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  @Input({required: true}) links!: {label:string, path: string}[];
  constructor(protected appService: AppService) {
  }
}
