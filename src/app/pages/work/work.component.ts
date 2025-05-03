import { Component } from '@angular/core';
import {BrandCardComponent} from "../../components/brand-card/brand-card.component";
import {BrandContentComponent} from "../../components/brand-content/brand-content.component";

@Component({
  selector: 'app-work',
    imports: [
        BrandCardComponent,
        BrandContentComponent
    ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
