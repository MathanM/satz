import {Component, Inject, Renderer2} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {ToggleComponent} from '../toggle/toggle.component';
import {DOCUMENT} from '@angular/common';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-header',
  imports: [
    ButtonComponent,
    ToggleComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, protected appService: AppService) {}

  onTheme(flag: boolean) {
    this.appService.isDarkTheme = flag;
    if (flag) {
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }
}
