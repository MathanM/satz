import { Component } from '@angular/core';
import {ButtonComponent} from '../../components/button/button.component';
import {BadgeComponent} from '../../components/badge/badge.component';
import {WorkCardComponent} from '../../components/work-card/work-card.component';

@Component({
  selector: 'app-home',
  imports: [
    ButtonComponent,
    BadgeComponent,
    WorkCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
