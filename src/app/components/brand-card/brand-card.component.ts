import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {BreadcrumbsComponent} from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-brand-card',
  imports: [
    BreadcrumbsComponent
  ],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.scss'
})
export class BrandCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() logo: string = '';
  @Input() primaryBackgroundColor: string = '';
  @Input() links: { label: string, path: string }[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  get safeTitle(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.title);
  }
}
