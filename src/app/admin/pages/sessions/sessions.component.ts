import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-sessions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessions.component.html'
})
export class AdminSessionsComponent {
  stats = [
    { label: 'Active Exams', value: '8', sub: '2 scheduled today', valueColor: 'text-[#38a9f3]' },
    { label: 'Certificates Issued', value: '1,240', sub: '+ 12% vs last month', valueColor: 'text-[#0f1419]' },
    { label: 'Avg Pass Rate', value: '78%', sub: '⊘ High performance', valueColor: 'text-[#0f1419]' },
    { label: 'Total Candidates', value: '3,450', sub: '+45 this week', valueColor: 'text-[#0f1419]' }
  ];

  tabs = ['All Sessions', 'Exams', 'Certificates', 'Archived'];
  activeTab = 'All Sessions';

  sessions = [
    { name: 'English Proficiency B2', id: 'EX-2023-001', icon: '📋', type: 'EXAM', typeColor: 'text-[#38a9f3] bg-blue-50', date: 'Oct 24, 2023', candidates: '45 Assigned', status: 'Active', statusColor: 'bg-green-100 text-green-600' },
    { name: 'Intro to Spanish', id: 'CT-2023-088', icon: '🎓', type: 'CERTIFICATE', typeColor: 'text-green-600 bg-green-50', date: 'Oct 20, 2023', candidates: '120 Issued', status: 'Active', statusColor: 'bg-green-100 text-green-600' },
    { name: 'Math 101 Midterm', id: 'EX-2023-004', icon: '📝', type: 'EXAM', typeColor: 'text-[#38a9f3] bg-blue-50', date: 'Yesterday', candidates: '-', status: 'Draft', statusColor: 'bg-gray-100 text-gray-500' },
    { name: 'Science Fair Participation', id: 'CT-2022-991', icon: '🏆', type: 'CERTIFICATE', typeColor: 'text-green-600 bg-green-50', date: 'Sep 15, 2023', candidates: '300 Issued', status: 'Closed', statusColor: 'bg-red-100 text-red-500' }
  ];

  selectedSession = this.sessions[0];

  selectSession(session: any) {
    this.selectedSession = session;
  }
}
