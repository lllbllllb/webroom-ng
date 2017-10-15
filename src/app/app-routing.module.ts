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
        { path: '', redirectTo: 'cas', pathMatch: 'full' },
        { path: 'cas', component: CasComponent },
        { path: 'caParams', component: CaParamsComponent },
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