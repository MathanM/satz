import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  @Input({required: true}) links!: {label:string, path: string}[];
  constructor(protected appService: AppService) {
  }
}
