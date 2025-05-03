import { Component } from '@angular/core';
import {ShopItemComponent} from '../../components/shop-item/shop-item.component';

@Component({
  selector: 'app-shop',
  imports: [
    ShopItemComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
