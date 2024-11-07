// Angular Modules
import { Route } from "@angular/router";

// Internal Modules
import { LoginComponent } from "./login/login.component";

export const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login', component: LoginComponent
      },
    ]
  }
]
