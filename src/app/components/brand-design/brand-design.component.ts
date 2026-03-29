import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-brand-design',
  imports: [NgForOf, NgIf],
  templateUrl: './brand-design.component.html',
  styleUrl: './brand-design.component.scss'
})
export class BrandDesignComponent {
  @Input() id: string = '';
  @Input() designHero: string = '';
  @Input() colorSwatch: string[] = [];
  @Input() backgroundColor: string = '';
  @Input() colorBackgroundColor?: string;
  @Input() typographyBackgroundColor?: string;
  @Input() typoImage?: string;
  @Input() typographyFont?: string;
}

