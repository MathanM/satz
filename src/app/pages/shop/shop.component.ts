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
  }
}
