import { Component } from '@angular/core';
import { MOCK_EVENTS, MOCK_USER } from '../../../shared/constants/mock-data';
import { ScheduleItem, SuggestedEvent } from '../models/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html'
})
export class EventsComponent {
  events = MOCK_EVENTS;
  user = MOCK_USER;

  tabs = ['Explore', 'Going', 'Saved', 'Past'];
  activeTab = 'Explore';

  schedule: ScheduleItem[] = [
    { time: '18:00', title: 'Global Speaking Club', isLive: true },
    { time: 'Tomorrow', title: 'French 101 - Basics', subtitle: '10:00 AM' },
    { time: 'Oct 24', title: 'Vocab Challenge', subtitle: 'All Day Event' }
  ];

  suggestedEvents: SuggestedEvent[] = [
    { id: 1, title: 'Public Speaking 101', date: 'Sat, Oct 28', type: 'Free Entry', icon: '🎙️' },
    { id: 2, title: 'Book Club: Harry Potter', date: 'Sun, Oct 29', type: 'Premium', icon: '📘' }
  ];

  get featuredEvent() {
    return this.events.find(e => e.isFeatured);
  }

  get upcomingEvents() {
    return this.events.filter(e => e.status === 'upcoming');
  }

  get completedEvents() {
    return this.events.filter(e => e.status === 'completed');
  }
}
