import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutor-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html'
})
export class TutorCoursesComponent {
  stats = [
    { label: 'TOTAL COURSES', value: '12', sub: '+2 this month', icon: 'courses' },
    { label: 'TOTAL STUDENTS', value: '1,248', sub: '+15% vs last month', icon: 'students' },
    { label: 'AVG. RATING', value: '4.8', sub: 'Based on 340 reviews', icon: 'rating' },
    { label: 'HOURS TAUGHT', value: '86h', sub: 'Video content duration', icon: 'hours' }
  ];

  tabs = ['Active', 'Drafts (2)', 'Archived'];
  activeTab = 'Active';

  courses = [
    { title: 'Advanced Essay Writing for University Students', category: 'ACADEMIC ENGLISH', categoryColor: 'text-[#38a9f3]', description: 'Master the art of academic writing, from thesis statements to proper citations and...', students: 482, rating: 4.9, reviews: 120, status: 'PUBLISHED', statusColor: 'bg-green-500 text-white', image: 'essay' },
    { title: 'Professional Communication Skills', category: 'BUSINESS ENGLISH', categoryColor: 'text-[#38a9f3]', description: 'Email etiquette, presentation skills, and meeting vocabulary for the modern...', students: 315, rating: 4.7, reviews: 85, status: 'PUBLISHED', statusColor: 'bg-green-500 text-white', image: 'business' },
    { title: 'Daily Life Conversation Practice - Level 1', category: 'CONVERSATION', categoryColor: 'text-purple-500', description: 'Practical dialogues for shopping, travel, and casual meetups. Designed for absolte...', students: 0, rating: 0, reviews: 0, status: 'DRAFT', statusColor: 'bg-[#536471] text-white', image: 'conversation' },
    { title: 'English Grammar: The Complete Guide', category: 'GRAMMAR', categoryColor: 'text-green-500', description: 'Comprehensive grammar course covering all levels from beginner to advanced...', students: 620, rating: 4.8, reviews: 200, status: 'PUBLISHED', statusColor: 'bg-green-500 text-white', image: 'grammar' }
  ];
}
