// Angular modules
import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AbstractControl
} from "@angular/forms";

// Models
import {Company} from "../../models/company.model";
import {CompanyDetailComponent} from "../company-detail/company-detail.component";

// Services
import {CompanyService} from "../../services/company.service";

export function alphanumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const isValid = /^[a-zA-Z0-9]*$/.test(value);
      return isValid ? null : { alphanumeric: true };
    };
  }

@Component({
  selector: 'app-company-search',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, CompanyDetailComponent],
  templateUrl: './company-search.component.html',
  styleUrl: './company-search.component.scss'
})
export class CompanySearchComponent {
    companies: Company[] = [];
    searchForm!: FormGroup;
    isSubmitted: boolean = false;
    isSearchCompleted: boolean = false;
    selectedCompany!: Company;

    constructor(private companyService: CompanyService) {
        this.searchForm = new FormGroup({
            searchTerm: new FormControl('', [Validators.required, alphanumericValidator()])
        });
    }

    searchCompanies(): void {
      this.isSubmitted = true;
      if(this.searchForm && this.searchForm.valid) {
        this.isSearchCompleted = false;
        const searchTerm: string = this.searchForm.get('searchTerm')?.value;
        this.companyService.searchCompanies(searchTerm).subscribe(
          {next: (response: any) => {
            if ( response.items &&  response.items.length) {
              this.companies = response.items;
            } else {
              this.companies = [];
            }
            this.isSearchCompleted = true;
          },
            error: (error: any) => {
            console.log(error);
             }
          });
      }
    }

    selectCompany(company: Company): void {
       this.selectedCompany = company;
    }
}
