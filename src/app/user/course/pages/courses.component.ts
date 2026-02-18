import { Component } from '@angular/core';
import { MOCK_COURSES, MOCK_LEADERBOARD, MOCK_USER } from '../../../shared/constants/mock-data';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  courses = MOCK_COURSES;
  leaderboard = MOCK_LEADERBOARD;
  user = MOCK_USER;

  get inProgressCourses() {
    return this.courses.filter(c => c.status === 'in-progress');
  }

  get nextUpCourses() {
    return this.courses.filter(c => c.status === 'next-up');
  }

  get lockedCourses() {
    return this.courses.filter(c => c.status === 'locked');
  }
}
