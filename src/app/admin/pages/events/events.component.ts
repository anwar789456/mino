import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html'
})
export class AdminEventsComponent {
  stats = [
    { label: 'Upcoming Events', value: '3', sub: 'Next in 2 days', valueColor: 'text-[#38a9f3]' },
    { label: 'Total Registrations', value: '1,205', sub: '+ 8% vs last month', valueColor: 'text-[#0f1419]' },
    { label: 'Avg Attendance', value: '85%', sub: '⊘ Very High', valueColor: 'text-[#0f1419]' },
    { label: 'Total Events', value: '24', sub: 'This year', valueColor: 'text-[#0f1419]' }
  ];

  tabs = ['All Events', 'Upcoming', 'Past', 'Drafts'];
  activeTab = 'All Events';

  events = [
    { name: 'Tech Talk 2024', host: 'Sarah J.', icon: '📅', date: 'Nov 15, 10:00 AM', location: 'Virtual Stream', attendees: '245 Registered', status: 'Upcoming', statusColor: 'bg-green-100 text-green-600' },
    { name: 'Live Coding Workshop', host: 'Dev Team', icon: '💻', date: 'Oct 28, 02:00 PM', location: 'Conference Room A', attendees: '32 Attending', status: 'Live Now', statusColor: 'bg-blue-100 text-blue-600' },
    { name: 'Community Meetup', host: 'John D.', icon: '📍', date: 'Oct 10, 06:00 PM', location: 'Central Park', attendees: '150 Attended', status: 'Past', statusColor: 'bg-gray-100 text-gray-500' },
    { name: 'Winter Hackathon', host: 'Pending', icon: '💡', date: 'Dec 01, 09:00 AM', location: 'TBD', attendees: '-', status: 'Draft', statusColor: 'bg-red-100 text-red-500' }
  ];

  selectedEvent = this.events[0];

  selectEvent(event: any) {
    this.selectedEvent = event;
  }
}
