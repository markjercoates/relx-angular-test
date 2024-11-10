// Angular
import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormControl,ReactiveFormsModule,FormGroup,Validators} from "@angular/forms";

// External
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Models
import {Company} from "../../models/company.model";

// Components
import {CompanyDetailComponent} from "../company-detail/company-detail.component";
import {AccessDeniedModalComponent} from "../access-denied/access-denied.component";

// Services
import {CompanyService} from "../../services/company.service";
import {AuthenticationService} from "../../services/authentication.service";

// Validators
import { alphanumericValidator } from '../../validators/alphanumeric-validator';

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
    selectedCompany: Company | null = null;
    modalService: NgbModal;
    isAuthenticated = false;

    constructor(private companyService: CompanyService, private authenticationService: AuthenticationService) {
        this.searchForm = new FormGroup({
            searchTerm: new FormControl('', [Validators.required, alphanumericValidator()])
        });
        this.modalService = new NgbModal();
        this.authenticationService.isLoggedIn.subscribe((status) => (this.isAuthenticated = status));
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
        this.selectedCompany = null;
      }
    }

    selectCompany(company: Company): void {
      if(this.isAuthenticated) {
        this.selectedCompany = company;
      } else {
        const accessDeniedModalRef = this.modalService.open(AccessDeniedModalComponent, { size: 'lg' });
        accessDeniedModalRef.componentInstance.message = 'Access Denied. Login to view company details.';
      }
    }
}
