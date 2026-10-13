import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rotizo',
  standalone: true,
  template: `
    <div class="rotizo-shell" style="height: 100dvh; min-height: 100vh; width: 100%;">
      <iframe
        class="rotizo-frame"
        src="/rotizo/index.html"
        title="ROTIZO Invoice Manager"
        style="display: block; height: 100%; min-height: 100vh; width: 100%; border: 0;"
      ></iframe>
    </div>
  `,
  styleUrl: './rotizo.component.scss',
  styles: [`
    body.rotizo-route app-header, body.rotizo-route app-footer { display: none; }
    body.rotizo-route { margin: 0; background: #f8f3e9; }
  `],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RotizoComponent implements OnInit, OnDestroy {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) this.document.body.classList.add('rotizo-route');
    this.title.setTitle('ROTIZO Invoice Manager');
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow, noarchive' });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) this.document.body.classList.remove('rotizo-route');
  }
}
