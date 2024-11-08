// Angular modules
import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from "@angular/forms";

// Models
import {Company} from "../../models/company.model";

// Services
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-company-search',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './company-search.component.html',
  styleUrl: './company-search.component.scss'
})
export class CompanySearchComponent {
    companies: Company[] = [];
    searchForm!: FormGroup;
    isSubmitted: boolean = false;

    constructor(private companyService: CompanyService) {
        this.searchForm = new FormGroup({
            searchTerm: new FormControl('', [Validators.required])
        });
    }

    searchCompanies(): void {
      this.isSubmitted = true;
      if(this.searchForm && this.searchForm.valid) {
        const searchTerm: string = this.searchForm.get('searchTerm')?.value;
      }

    }

}
