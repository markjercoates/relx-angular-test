import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgIf, NgFor } from '@angular/common';
import { CompanySearchComponent } from './company-search.component';
import { CompanyService } from '../../services/company.service';
import {Company} from "../../models/company.model";
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpHandler} from "@angular/common/http";
import { of } from 'rxjs';
import {AccessDeniedModalComponent} from "../access-denied/access-denied.component";

describe('CompanySearchComponent', () => {
  let component: CompanySearchComponent;
  let fixture: ComponentFixture<CompanySearchComponent>;
  let companyService: CompanyService;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CompanyService, NgbModal, HttpClient, HttpHandler],
      imports: [ReactiveFormsModule, NgIf, NgFor]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchComponent);
    component = fixture.componentInstance;
    companyService = TestBed.inject(CompanyService);
    modalService = TestBed.inject(NgbModal);
    fixture.autoDetectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search form', () => {
    expect(component.searchForm).toBeDefined();
  });

  it('should have a search button', () => {
    const searchButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(searchButton).toBeDefined();
  });

  it('should call searchCompanies on search button click', () => {
    const searchButton = fixture.nativeElement.querySelector('button[type="submit"]');
    spyOn(component, 'searchCompanies');
    searchButton.click();
    expect(component.searchCompanies).toHaveBeenCalledTimes(1);
  });

  it('should call companyService.searchCompanies on searchCompanies with valid search term', () => {
    spyOn(companyService, 'searchCompanies').and
      .returnValue(of({items: []}));
    // Mock the searchForm control value
    component.searchForm.controls['searchTerm'].setValue('Search');
    component.searchCompanies();
    expect(companyService.searchCompanies).toHaveBeenCalledTimes(1);
  });

  it('should not call companyService.searchCompanies on searchCompanies without search term', () => {
    spyOn(companyService, 'searchCompanies').and
      .returnValue(of({items: []}));
    // Mock the searchForm control value
    component.searchForm.controls['searchTerm'].setValue('');
    component.searchCompanies();
    expect(companyService.searchCompanies).toHaveBeenCalledTimes(0);
  });

  /*it('should open AccessDenied on selectCompany click if not authenticated', () => {
    const mockModalRef = {
      componentInstance: { message: 'Test' },
    } as NgbModalRef;

    const company: Company =  {
      title: 'Test',
      company_status: "active",
      address_snippet: "123 Example Street",
      date_of_creation: new Date(),
      matches: {  title: [1,2] },
      description: "Example company description",
      links: { self: "" },
      company_number: "12345678",
      company_type: "private",
      address: { address_line_1: "", address_line_2: "", country: "", postal_code: "", locality: "" },
      kind: "business",
      description_identifier: ["finance", "legal"]
    }
    spyOn(modalService, 'open').and.returnValue(mockModalRef);
    component.selectCompany(company);
    fixture.detectChanges();
    expect(modalService.open).toHaveBeenCalledWith(AccessDeniedModalComponent, { size: 'lg' } );
  });*/

});
