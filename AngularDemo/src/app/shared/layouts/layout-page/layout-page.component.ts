// Angular modules
import { Component, OnInit } from '@angular/core';

// Components
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [LayoutHeaderComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss',
})
export class LayoutPageComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
}
