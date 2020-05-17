import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SpinnerService } from '../../core/services/spinner.service';

/*
import { Subscription } from 'rxjs';
import { AuthGuard } from 'src/app/core/guards/auth.guard';*/

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  private mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  userName: string;
  isAdmin: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher,
              public spinnerService: SpinnerService,
              /*private authService: AuthenticationService,
              private authGuard: AuthGuard*/) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

}
