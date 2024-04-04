import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private authservice = inject(AuthService);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
    ngOnInit(): void {
    this.authservice.getTokenState().subscribe(state => {
      this.loggedIn = state
    })
    }
  loggedIn: boolean = false
  logout() {
    const token = localStorage.getItem('token');
    this.authservice.postLogout(token).subscribe((res) => {
      localStorage.removeItem('token');
      this.authservice.updateTokenState()
      console.log(res);
    });
  }
}
