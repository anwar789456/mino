import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html'
})
export class UsersComponent {
  stats = [
    { label: 'Total Users', value: '24,593', sub: '+ 12% this month', subColor: 'text-green-500', valueColor: 'text-[#38a9f3]' },
    { label: 'Active Tutors', value: '1,204', sub: '+ 5 new today', subColor: 'text-green-500', valueColor: 'text-[#38a9f3]' },
    { label: 'Active Students', value: '22,850', sub: 'Stable', subColor: 'text-[#9ca3af]', valueColor: 'text-[#0f1419]' },
    { label: 'Pending Reports', value: '18', sub: '⊘ Requires action', subColor: 'text-red-500', valueColor: 'text-red-500' }
  ];

  tabs = ['All Users', 'Tutors', 'Students', 'Reported (3)'];
  activeTab = 'Reported (3)';

  users = [
    { name: 'Sarah Gomez', email: 'sarah.g@example.com', avatar: '👩', role: 'Student', status: 'Reported', statusColor: 'bg-red-100 text-red-600', lastActive: '2 min ago', joined: 'Oct 20, 2023' },
    { name: 'David Miller', email: 'david.m@tutor.nino.com', avatar: '👨', role: 'Tutor', status: 'Active', statusColor: 'bg-green-100 text-green-600', lastActive: '1 hour ago', joined: 'Sep 12, 2023' },
    { name: 'Yuki Tanaka', email: 'yuki.t@example.com', avatar: '🧑', role: 'Student', status: 'Reported', statusColor: 'bg-red-100 text-red-600', lastActive: '5 hours ago', joined: 'Jan 05, 2024' },
    { name: 'Marcus Johnson', email: 'marcus.j@example.com', avatar: '👨', role: 'Student', status: 'Banned', statusColor: 'bg-gray-200 text-gray-600', lastActive: '2 days ago', joined: 'Nov 15, 2023' }
  ];

  selectedUser = this.users[0];

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
