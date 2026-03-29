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

  onLink(source: string) {
    if (source === 'mail') {
      window.location.href = 'mailto:satzartz@gmail.com';
    } else if (source === 'insta') {
      window.open('https://www.instagram.com/satzartz/', '_blank');
    } else if (source === 'twitter') {
      window.open('https://twitter.com/satzartz', '_blank');
    }
  }
}
