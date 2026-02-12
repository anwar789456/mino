import { Component } from '@angular/core';
import { MOCK_EVENTS } from '../../../shared/constants/mock-data';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html'
})
export class EventsComponent {
  events = MOCK_EVENTS;

  get upcomingEvents() {
    return this.events.filter(e => e.status === 'upcoming');
  }

  get completedEvents() {
    return this.events.filter(e => e.status === 'completed');
  }
}
