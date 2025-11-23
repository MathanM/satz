import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-brand-design',
  imports: [NgForOf],
  templateUrl: './brand-design.component.html',
  styleUrl: './brand-design.component.scss'
})
export class BrandDesignComponent {
  @Input() designHero: string = '';
  @Input() typographyFont: string = '';
  @Input() colorSwatch: string[] = [];
  @Input() backgroundColor: string = '';
}

