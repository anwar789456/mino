import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { QuizCard, QuizCategory } from '../models/quiz.model';
import { MOCK_USER } from '../../../shared/constants/mock-data';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {
  quizzes: QuizCard[] = [];
  categories: QuizCategory[] = [];
  user = MOCK_USER;
  activeTab = 'Vocabulary';
  tabs = ['Vocabulary', 'Reading', 'Grammar', 'Listening'];
  focusTags = ['New words', 'Reading speed', 'Grammar review', 'Listening'];
  isLoading = true;
  errorMessage = '';

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuizCards();
    this.loadQuizCategories();
  }

  private loadQuizCards(): void {
    this.quizService.getAllQuizCards().subscribe({
      next: (data) => {
        this.quizzes = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load quiz cards:', err);
        this.errorMessage = 'Failed to load quizzes. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  private loadQuizCategories(): void {
    this.quizService.getAllQuizCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Failed to load quiz categories:', err);
      }
    });
  }
}
