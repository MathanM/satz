import {ChangeDetectionStrategy, Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import {ButtonComponent} from '../../components/button/button.component';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-about',
  imports: [
    ButtonComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  constructor(protected appService: AppService, private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('About — Satzartz');
    this.metaService.updateTag({ name: 'description', content: 'Meet Satheesh M — graphic and visual designer with 8+ years of experience in brand identity, logo design, and UI/UX. Based in Tamil Nadu, India, working with startups worldwide.' });
  }
}
