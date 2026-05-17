import {ChangeDetectionStrategy, AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import {BrandCardComponent} from "../../components/brand-card/brand-card.component";
import {BrandContentComponent} from "../../components/brand-content/brand-content.component";
import {BrandDesignComponent} from "../../components/brand-design/brand-design.component";
import {workDetailInfo} from './work.component.data';
import {NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-work',
    imports: [
        BrandCardComponent,
        BrandContentComponent,
        BrandDesignComponent,
        NgForOf,
        NgIf,
        NgStyle
    ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent implements OnInit, AfterViewInit {
  workDetail: typeof workDetailInfo[string] | undefined;
  rows: any[][] = [];

  constructor(private route: ActivatedRoute, private router: Router, private el: ElementRef, private titleService: Title, private metaService: Meta, @Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.workDetail = workDetailInfo[id];
      if (!this.workDetail) {
        this.router.navigate(['/home']);
        return;
      }
      this.rows = this.chunk(this.workDetail.images, 2);
      this.titleService.setTitle(this.workDetail.metaTitle);
      this.metaService.updateTag({ name: 'description', content: this.workDetail.metaDescription });
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const sections = this.el.nativeElement.querySelectorAll('.scroll-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in-view'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sections.forEach((s: Element) => observer.observe(s));
  }

  chunk(list: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < list.length; i += size) {
      result.push(list.slice(i, i + size));
    }
    return result;
  }

  getTileStyles(styles: Record<string, string> = {}): Record<string, string> {
    const { 'background-size': bgSize, height, ...rest } = styles;
    return {
      ...rest,
      '--tile-bg-size': bgSize ?? 'cover',
      '--tile-height': height ?? '450px',
    };
  }
}
