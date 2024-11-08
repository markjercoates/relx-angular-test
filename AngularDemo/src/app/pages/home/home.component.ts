// Angular modules
import { Component, OnInit } from '@angular/core';

// Components
import { LayoutPageComponent } from '../../shared/layouts/layout-page/layout-page.component';
import {CompanySearchComponent} from "../../shared/components/company-search/company-search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutPageComponent, CompanySearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
