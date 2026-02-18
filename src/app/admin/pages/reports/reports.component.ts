import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html'
})
export class ReportsComponent {
  stats = [
    { label: 'Pending Reports', value: '3', sub: '⊘ Requires attention', subColor: 'text-red-500', valueColor: 'text-red-500' },
    { label: 'Resolved Today', value: '12', sub: '⊘ 100% resolution rate', subColor: 'text-green-500', valueColor: 'text-[#0f1419]' },
    { label: 'Avg Response Time', value: '45m', sub: '+ -12m vs last week', subColor: 'text-green-500', valueColor: 'text-[#0f1419]' },
    { label: 'Active Bans', value: '84', sub: '+2 this week', subColor: 'text-[#9ca3af]', valueColor: 'text-[#0f1419]' }
  ];

  tabs = ['Pending (3)', 'Investigating', 'Resolved', 'Archived'];
  activeTab = 'Pending (3)';

  reports = [
    { user: 'Sarah Gomez', role: 'Student', id: '#829301', avatar: '👩', type: 'Inappropriate Language', reporter: 'David M.', reporterIcon: 'DM', time: '2 min ago', status: 'Pending', statusColor: 'bg-orange-100 text-orange-600', priority: 'MEDIUM', priorityColor: 'text-orange-500' },
    { user: 'Marcus Johnson', role: 'Student', id: '#992102', avatar: '👨', type: 'Spam / Bot Behavior', reporter: 'System', reporterIcon: 'SYS', time: '45 min ago', status: 'Investigating', statusColor: 'bg-blue-100 text-blue-600', priority: 'HIGH', priorityColor: 'text-red-500' },
    { user: 'Yuki Tanaka', role: 'Student', id: '#110293', avatar: '🧑', type: 'Harassment', reporter: 'Jessica L.', reporterIcon: '🧑', time: '2 hours ago', status: 'Pending', statusColor: 'bg-orange-100 text-orange-600', priority: 'HIGH', priorityColor: 'text-red-500' }
  ];

  selectedReport = this.reports[0];

  selectReport(report: any) {
    this.selectedReport = report;
  }
}
