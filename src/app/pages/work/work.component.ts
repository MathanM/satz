import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  styleUrl: './work.component.scss'
})
export class WorkComponent implements OnInit {
  workDetail: typeof workDetailInfo[string] | undefined;
  rows: any[][] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.workDetail = workDetailInfo[id];
      this.rows = this.chunk(this.workDetail.images, 2);
    });
  }

  chunk(list: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < list.length; i += size) {
      result.push(list.slice(i, i + size));
    }
    return result;
  }
}
