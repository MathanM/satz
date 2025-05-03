import { Component } from '@angular/core';
import {ButtonComponent} from '../../components/button/button.component';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-about',
  imports: [
    ButtonComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(protected appService: AppService) {}
}
