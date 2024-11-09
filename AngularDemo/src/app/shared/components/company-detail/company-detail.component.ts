// Angular
import {Component, Input, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import {NgIf, NgFor, DatePipe} from '@angular/common';

// Internal
import {Company} from "../../models/company.model";
import {Officer} from "../../models/officer.model";

// Services
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})
export class CompanyDetailComponent implements OnInit, OnChanges {
   @Input() company!: Company;
   officers: Officer[] = [];

   constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
      this.getCompanyOfficers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['company'] && changes['company'].currentValue) {
      this.getCompanyOfficers();  // Fetch officers every time company changes
    }
  }

  getCompanyOfficers() {
     if(this.company){
       this.companyService.searchCompanyOfficers(this.company.company_number).subscribe({
         next: response => this.officers = response.items,
         error: error => console.error(error)
       })
     }
  }
}
