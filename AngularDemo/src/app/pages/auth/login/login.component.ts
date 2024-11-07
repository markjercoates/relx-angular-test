// Angular Modules
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Services
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {LayoutPageComponent} from "../../../shared/layouts/layout-page/layout-page.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, RouterLink, LayoutPageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    public formGroup !: FormGroup<{
      username : FormControl<string>,
      password : FormControl<string>
    }>;

    constructor(private router: Router, private authenticationService: AuthenticationService)  {
         this.initFormGroup();
    }

    private initFormGroup(): void {
       this.formGroup = new FormGroup({
          username: new FormControl<string>({
            value: '',
            disabled: false
          }, { validators: [Validators.required], nonNullable: true }),
          password: new FormControl<string>({
            value: '',
            disabled: false
          }, { validators: [Validators.required], nonNullable: true })
       })
    }

    public async onSubmit(): Promise<void> {
        await this.authenticate();
    }

    private async authenticate(): Promise<void> {
      const username    = this.formGroup.controls.username.getRawValue();
      const password = this.formGroup.controls.password.getRawValue();
      const success = this.authenticationService.login(username, password);

      if(!success){
        return;
      }

      await this.router.navigate(['/home']);
    }
}
