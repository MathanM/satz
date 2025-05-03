import {Component, Inject, Renderer2} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {ToggleComponent} from '../toggle/toggle.component';
import {DOCUMENT, NgIf} from '@angular/common';
import {AppService} from '../../services/app.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    ButtonComponent,
    ToggleComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, protected appService: AppService) {}

  onTheme(flag: boolean) {
    this.appService.isDarkTheme = flag;
    if (flag) {
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }

  onToggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
