import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth-guard.service';
import { CasComponent } from './cas/cas.component';
import { CaParamsComponent } from './ca-params/ca-params.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'corpactions', pathMatch: 'full' },
  {
    path: 'corpactions', children:
      [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'cas', component: CasComponent, canActivate: [AuthGuardService] },
        { path: 'caParams', component: CaParamsComponent, canActivate: [AuthGuardService] },
        { path: '**', redirectTo: 'cas', pathMatch: 'full' }
      ]
    },
    { path: '**', redirectTo: 'corpactions', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }