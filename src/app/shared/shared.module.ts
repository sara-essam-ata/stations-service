import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent,SidebarComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    RouterLink,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    MatTooltipModule,
    MatIconModule,
    RouterLink,
    RouterModule,
  ]
})
export class SharedModule { }
