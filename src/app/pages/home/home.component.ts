import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy} from '@angular/core';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  homeWorkInfo = homeWorkInfo;

  private onMouseMove!: (e: MouseEvent) => void;
  private onMouseUp!: () => void;

  constructor(protected appService: AppService, private el: ElementRef) {}

  ngAfterViewInit() {
    const cards = this.el.nativeElement.querySelectorAll('app-work-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in-view'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card: Element) => observer.observe(card));

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
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }
}
