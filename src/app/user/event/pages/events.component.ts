import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_EVENTS, MOCK_USER } from '../../../shared/constants/mock-data';
import { ScheduleItem, SuggestedEvent } from '../models/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html'
})
export class EventsComponent {
  events = MOCK_EVENTS;
  user = MOCK_USER;

  tabs = ['Explore', 'Going', 'Saved', 'Past'];
  activeTab = 'Explore';

  schedule: ScheduleItem[] = [
    { time: '18:00', title: 'Global Speaking Club', status: 'ONGOING' },
    { time: 'Tomorrow', title: 'French 101 - Basics', subtitle: '10:00 AM' },
    { time: 'Oct 24', title: 'Vocab Challenge', subtitle: 'All Day Event' }
  ];

  suggestedEvents: SuggestedEvent[] = [
    { id: 1, title: 'Public Speaking 101', startDate: 'Sat, Oct 28', eventType: 'ONLINE', isFree: true },
    { id: 2, title: 'Book Club: Harry Potter', startDate: 'Sun, Oct 29', eventType: 'ONLINE', isFree: false }
  ];

  get featuredEvent() {
    return this.events.find(e => e.isFeatured);
  }

  get upcomingEvents() {
    return this.events.filter(e => e.status === 'UPCOMING');
  }

  get completedEvents() {
    return this.events.filter(e => e.status === 'COMPLETED');
  }

  formatDate(dateStr: string): string {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    } catch {
      return dateStr;
    }
  }

  getDay(dateStr: string): number {
    try { return new Date(dateStr).getDate(); } catch { return 0; }
  }

  getMonth(dateStr: string): string {
    try { return new Date(dateStr).toLocaleDateString('en-US', { month: 'short' }).toUpperCase(); } catch { return ''; }
  }

  getDayOfWeek(dateStr: string): string {
    try { return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase(); } catch { return ''; }
  }
}
