import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MOCK_QUIZZES, MOCK_QUIZ_CATEGORIES, MOCK_USER } from '../../../shared/constants/mock-data';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './quiz.component.html'
})
export class QuizComponent {
  quizzes = MOCK_QUIZZES;
  categories = MOCK_QUIZ_CATEGORIES;
  user = MOCK_USER;
  activeTab = 'Vocabulary';
  tabs = ['Vocabulary', 'Reading', 'Grammar', 'Listening'];
  focusTags = ['New words', 'Reading speed', 'Grammar review', 'Listening'];
}
