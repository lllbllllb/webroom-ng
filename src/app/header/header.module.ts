import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeng
import { MenubarModule, BreadcrumbModule, PanelModule } from 'primeng/primeng';

@NgModule({

          declarations: [
                    NavbarComponent,
                    BreadcrumbComponent
          ],
          imports: [
                    CommonModule,
                    PanelModule,
                    BreadcrumbModule,
                    MenubarModule
          ],
          exports: [
                    NavbarComponent,
                    BreadcrumbComponent
          ]
})
export class HeaderModule { }
