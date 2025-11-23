import { Component } from '@angular/core';
import {AppService} from '../../services/app.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(protected appService: AppService) {
  }
}
