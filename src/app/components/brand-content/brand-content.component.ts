import {Component, Input} from '@angular/core';
import {BadgeComponent} from "../badge/badge.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-brand-content',
    imports: [
        BadgeComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './brand-content.component.html',
  styleUrl: './brand-content.component.scss'
})
export class BrandContentComponent {
  @Input({required: true}) labels!: string[];
  @Input() industry: string = '';
  @Input() goals: string = '';
  @Input() results: string[] = [];
}
