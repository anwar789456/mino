import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
import { MOCK_LEADERBOARD, MOCK_USER } from '../../../shared/constants/mock-data';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  leaderboard = MOCK_LEADERBOARD;
  user = MOCK_USER;
  isLoading = true;
  errorMessage = '';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllCours().subscribe({
      next: (data) => {
        this.courses = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load courses:', err);
        this.errorMessage = 'Failed to load courses. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  getContentCount(course: Course): number {
    return course.contenus?.length ?? 0;
  }
}
