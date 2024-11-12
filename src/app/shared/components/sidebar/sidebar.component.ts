import { Component } from '@angular/core';

interface IMenu {
  title: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menu: IMenu[] = [
    {
      title: 'Control-Room',
      icon: 'speed',
      link: '/dashboard/control-room',

    },
    {
      title: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard/home',
    },
    {
      title: 'Elements',
      icon: 'menue',
      link: '/dashboard/elements',
    },
    {
      title: 'Settings',
      icon: 'settings',
      link: '/dashboard/settings',
    },
    {
      title: 'Notifications',
      icon: 'notifications',
      link: '/dashboard/notifications',
    },
  ];

}
