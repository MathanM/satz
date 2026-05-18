import {Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import {ButtonComponent} from '../../components/button/button.component';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-about',
  imports: [
    ButtonComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(protected appService: AppService, private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('About Satheesh · Brand Identity Designer Tamil Nadu India · Satzartz');
    this.metaService.updateTag({ name: 'description', content: 'Meet Satheesh — the brand identity designer behind Satzartz. Based in Tamil Nadu, India, with 8+ years of experience designing bold logos, visual systems, and brand identities for clients worldwide.' });
  }
}
