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
    this.metaService.updateTag({ property: 'og:title', content: 'About Satheesh · Brand Identity Designer Tamil Nadu India · Satzartz' });
    this.metaService.updateTag({ property: 'og:description', content: 'Meet Satheesh — the brand identity designer behind Satzartz. Based in Tamil Nadu, India, with 8+ years of experience designing bold logos, visual systems, and brand identities for clients worldwide.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://satzartz.com/about' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://satzartz.com/banner.webp' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'About Satheesh · Brand Identity Designer Tamil Nadu India · Satzartz' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Meet Satheesh — the brand identity designer behind Satzartz. Based in Tamil Nadu, India, with 8+ years of experience designing bold logos, visual systems, and brand identities for clients worldwide.' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://satzartz.com/banner.webp' });
  }
}
