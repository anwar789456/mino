import { Component } from '@angular/core';
import { MOCK_USER } from '../../../../shared/constants/mock-data';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user = MOCK_USER;
  stats = [
    { label: 'Courses Completed', value: '2' },
    { label: 'Quizzes Taken', value: '48' },
    { label: 'Words Learned', value: '320' },
    { label: 'Hours Practiced', value: '56' }
  ];
  achievements = [
    { title: 'First Quiz', description: 'Complete your first quiz', icon: '🎯', earned: true },
    { title: '7-Day Streak', description: 'Practice for 7 days in a row', icon: '🔥', earned: true },
    { title: 'Social Butterfly', description: 'Add 5 friends', icon: '🦋', earned: true },
    { title: 'Word Master', description: 'Learn 500 new words', icon: '📚', earned: false },
    { title: 'Grammar Guru', description: 'Score 100% on a grammar quiz', icon: '✨', earned: false },
    { title: 'Speed Reader', description: 'Complete a reading quiz in under 2 min', icon: '⚡', earned: false }
  ];
  recentActivity = [
    { action: 'Completed "Travel Essentials" Unit 3', time: '2 hours ago', icon: '📖' },
    { action: 'Scored 92% on Vocabulary Quiz', time: '5 hours ago', icon: '✅' },
    { action: 'Added Priya Patel as a friend', time: 'Yesterday', icon: '👥' },
    { action: 'Earned "7-Day Streak" badge', time: '2 days ago', icon: '🏆' }
  ];
}
