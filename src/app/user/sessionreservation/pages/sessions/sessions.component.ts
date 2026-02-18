import { Component } from '@angular/core';
import { MOCK_SESSIONS, MOCK_CERTIFICATIONS, MOCK_PRACTICE_ITEMS } from '../../../../shared/constants/mock-data';

@Component({
  selector: 'app-sessions',
  standalone: true,
  templateUrl: './sessions.component.html'
})
export class SessionsComponent {
  sessions = MOCK_SESSIONS;
  certifications = MOCK_CERTIFICATIONS;
  practiceItems = MOCK_PRACTICE_ITEMS;
}
