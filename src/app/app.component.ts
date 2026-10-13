import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CanonicalService} from './services/canonical.service';
import {filter, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'satz';
  isBareLayout = false;
  private readonly routerSubscription: Subscription;

  constructor(
    private canonicalService: CanonicalService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateLayout());
  }

  ngOnInit(): void {
    this.canonicalService.init();
    this.updateLayout();
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private updateLayout(): void {
    let currentRoute = this.route;
    while (currentRoute.firstChild) currentRoute = currentRoute.firstChild;
    this.isBareLayout = currentRoute.snapshot.data['bareLayout'] === true;
  }
}
