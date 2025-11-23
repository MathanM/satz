import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ButtonComponent} from '../../components/button/button.component';
import {BadgeComponent} from '../../components/badge/badge.component';
import {WorkCardComponent} from '../../components/work-card/work-card.component';
import {AppService} from '../../services/app.service';
import {NgForOf} from '@angular/common';
import {homeWorkInfo} from './home.component.data';

@Component({
  selector: 'app-home',
  imports: [
    ButtonComponent,
    BadgeComponent,
    WorkCardComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  homeWorkInfo = homeWorkInfo;
  constructor(protected appService: AppService) {}
}
