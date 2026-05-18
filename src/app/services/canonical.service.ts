import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CanonicalService {

  private readonly BASE_URL = 'https://satzartz.com';

  private readonly canonicalMap: { [key: string]: string } = {
    '':                  'https://satzartz.com',
    'home':              'https://satzartz.com',
    'about':             'https://satzartz.com/about',
    'shop':              'https://satzartz.com/shop',
    'work/ezhumin':      'https://satzartz.com/work/ezhumin',
    'work/boosync':      'https://satzartz.com/work/boosync',
    'work/gym':          'https://satzartz.com/work/gym',
    'work/majesty':      'https://satzartz.com/work/majesty',
  };

  constructor(@Inject(DOCUMENT) private doc: Document, private router: Router) {}

  init(): void {
    this.setCanonical(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.setCanonical(event.urlAfterRedirects);
      });
  }

  private setCanonical(url: string): void {
    const cleanUrl = url.replace(/^\//, '').split('?')[0].split('#')[0];
    const canonical = this.canonicalMap[cleanUrl] ?? `${this.BASE_URL}/${cleanUrl}`;

    const existing = this.doc.querySelector('link[rel="canonical"]');
    if (existing) existing.remove();

    const link = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonical);
    this.doc.head.appendChild(link);
  }
}
