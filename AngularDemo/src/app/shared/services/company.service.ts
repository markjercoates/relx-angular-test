// Angular modules
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

// Internal Modules
import { environment } from '../../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  searchCompanies(searchTerm: string) : Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const api = `${environment.apiCompanyUrl}/search?query=${searchTerm}`;
    return this.http.get(api, {headers});
  }

  searchCompanyOfficers(companyNumber: string) : Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const api = `${environment.apiCompanyUrl}/Officers?companyNumber=${companyNumber}`;
    return this.http.get(api, {headers});
  }
}
