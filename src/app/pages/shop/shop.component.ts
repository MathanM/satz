import {ChangeDetectionStrategy, Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import {ShopItemComponent} from '../../components/shop-item/shop-item.component';

@Component({
  selector: 'app-shop',
  imports: [
    ShopItemComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Shop — Satzartz Design Resources');
    this.metaService.updateTag({ name: 'description', content: 'Design resources and brand kits by Satzartz. Printable sticker packs and creative assets for designers, available to download.' });
  }
}
