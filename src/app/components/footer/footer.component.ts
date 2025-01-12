import { Component } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(protected appService: AppService) {
  }
}
