// Angular Modules
import { Component, OnInit } from '@angular/core';
import {  NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

// External Modules
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownMenu }   from '@ng-bootstrap/ng-bootstrap';

// Internal Modules
import { environment } from '../../../../environments/environment';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgIf],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',
})
export class LayoutHeaderComponent implements OnInit {
  appTitle : string = environment.appTitle;
  isAuthenticated = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.isLoggedIn.subscribe((status) => (this.isAuthenticated = status));
  }

  public ngOnInit(): void {}

  async logout(): Promise<void> {
    this.authenticationService.logout();
    //await this.router.navigate(['/home']);
    location.reload();
  }

  async login(): Promise<void> {
    await this.router.navigate(['/auth/login']);
  }
}
