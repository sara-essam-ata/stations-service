import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path:'dashboard', 
    title:'StationServices',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
