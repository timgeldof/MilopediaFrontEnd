import { AuthenticationService } from './../user/authentication.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent {
  loggedInUser$ = this._authenticationService.user$;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

    logout() {
      this._authenticationService.logout();
    }
  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authenticationService: AuthenticationService
  ) { }
}
