import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ChartModule } from 'primeng/chart';
import { routes } from '../app.routes';


@NgModule({
  declarations: [NavbarComponent,SidebarComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    RouterLink,
    RouterModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    // ChartModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    MatTooltipModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [
    provideNativeDateAdapter()
  ]
})
export class SharedModule { }
