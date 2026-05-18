import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CanonicalService} from './services/canonical.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'satz';

  constructor(private canonicalService: CanonicalService) {}

  ngOnInit(): void {
    this.canonicalService.init();
  }
}
