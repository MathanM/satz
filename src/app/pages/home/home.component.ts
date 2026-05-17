import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Title, Meta} from '@angular/platform-browser';
import {ButtonComponent} from '../../components/button/button.component';
import {BadgeComponent} from '../../components/badge/badge.component';
import {WorkCardComponent} from '../../components/work-card/work-card.component';
import {AppService} from '../../services/app.service';
import {NgForOf} from '@angular/common';
import {homeWorkInfo} from './home.component.data';

const MARQUEE_DURATION = 14;

@Component({
  selector: 'app-home',
  imports: [
    ButtonComponent,
    BadgeComponent,
    WorkCardComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  homeWorkInfo = homeWorkInfo;

  private onMouseMove!: (e: MouseEvent) => void;
  private onMouseUp!: () => void;

  constructor(protected appService: AppService, private el: ElementRef, private titleService: Title, private metaService: Meta, @Inject(PLATFORM_ID) private platformId: object) {
    this.titleService.setTitle('Satzartz — Brand Identity Designer');
    this.metaService.updateTag({ name: 'description', content: 'Satzartz — bold brand identities for startups and businesses worldwide. Logo design, UI/UX, and branding by Satheesh M, based in Tamil Nadu, India.' });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setupMarqueeDrag();
  }

  private setupMarqueeDrag() {
    const wrap = this.el.nativeElement.querySelector('.marquee-wrap') as HTMLElement;
    const track = this.el.nativeElement.querySelector('.marquee-track') as HTMLElement;
    if (!wrap || !track) return;

    let isDragging = false;
    let startX = 0;
    let startTranslateX = 0;

    const getTranslateX = () => new DOMMatrix(getComputedStyle(track).transform).m41;

    const resumeAnimation = () => {
      const halfWidth = track.scrollWidth / 2;
      let pos = getTranslateX() % halfWidth;
      if (pos > 0) pos -= halfWidth;
      const delay = -((Math.abs(pos) / halfWidth) * MARQUEE_DURATION);
      track.style.transform = '';
      track.offsetHeight; // force reflow so animation restarts cleanly
      track.style.animation = `marqueeScroll ${MARQUEE_DURATION}s ${delay}s linear infinite`;
    };

    wrap.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX;
      startTranslateX = getTranslateX();
      track.style.animation = 'none';
      track.style.transform = `translateX(${startTranslateX}px)`;
      wrap.style.cursor = 'grabbing';
      e.preventDefault();
    });

    this.onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      track.style.transform = `translateX(${startTranslateX + (e.pageX - startX)}px)`;
    };

    this.onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      wrap.style.cursor = 'grab';
      resumeAnimation();
    };

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }
}
