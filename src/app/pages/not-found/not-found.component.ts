import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-not-found',
  imports: [ButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  constructor(
    protected appService: AppService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle('Page Not Found · Satzartz');
    this.metaService.updateTag({ name: 'robots', content: 'noindex' });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
