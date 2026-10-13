import {Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import {ShopItemComponent} from '../../components/shop-item/shop-item.component';

@Component({
  selector: 'app-shop',
  imports: [
    ShopItemComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Design Resources for Brand Designers · Satzartz Shop');
    this.metaService.updateTag({ name: 'description', content: 'Premium design resources, brand kits, and tools for designers — curated by Satzartz, brand identity designer based in Tamil Nadu, India.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Design Resources for Brand Designers · Satzartz Shop' });
    this.metaService.updateTag({ property: 'og:description', content: 'Premium design resources, brand kits, and tools for designers — curated by Satzartz, brand identity designer based in Tamil Nadu, India.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://satzartz.com/shop' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://satzartz.com/banner.webp' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Design Resources for Brand Designers · Satzartz Shop' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Premium design resources, brand kits, and tools for designers — curated by Satzartz, brand identity designer based in Tamil Nadu, India.' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://satzartz.com/banner.webp' });
  }
}
