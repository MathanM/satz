import {Component, HostBinding, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-brand-design',
  imports: [NgForOf, NgIf],
  templateUrl: './brand-design.component.html',
  styleUrl: './brand-design.component.scss'
})
export class BrandDesignComponent {
  @HostBinding('class') get hostClass() { return this.id; }
  @Input() id: string = '';
  @Input() designHero: string = '';
  @Input() designHeroAlt: string = '';
  @Input() colorSwatch: string[] = [];
  @Input() backgroundColor: string = '';
  @Input() colorBackgroundColor?: string;
  @Input() typographyBackgroundColor?: string;
  @Input() typoImage?: string;
  @Input() typoImageAlt?: string;
  @Input() typographyFont?: string;

  getTextColor(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#ffffff';
  }
}

