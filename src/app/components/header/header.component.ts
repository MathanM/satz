import {AfterViewInit, Component, ElementRef, Inject, Renderer2} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {ToggleComponent} from '../toggle/toggle.component';
import {DOCUMENT} from '@angular/common';
import {AppService} from '../../services/app.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    ButtonComponent,
    ToggleComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  showMenu = false;
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, protected appService: AppService, private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => this.el.nativeElement.classList.add('ready'), 0);
  }

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

  onMail() {
    window.location.href = 'mailto:satzartz@gmail.com';
  }
}
