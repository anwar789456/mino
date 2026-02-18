import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }

  get isForumsPage(): boolean {
    return this.router.url.startsWith('/forums');
  }

  navItems = [
    { label: 'Courses', icon: 'courses', route: '/courses' },
    { label: 'Friends', icon: 'friends', route: '/friends' },
    { label: 'Sessions', icon: 'sessions', route: '/sessions' },
    { label: 'Quiz', icon: 'quiz', route: '/quiz' },
    { label: 'Forums', icon: 'forums', route: '/forums' },
    { label: 'Events', icon: 'events', route: '/events' },
    { label: 'Profile', icon: 'profile', route: '/profile' },
    { label: 'Donations', icon: 'donations', route: '/donations' },
    { label: 'Subscriptions', icon: 'subscriptions', route: '/subscriptions' }
  ];
}
