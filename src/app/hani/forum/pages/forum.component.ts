import { Component } from '@angular/core';
import { MOCK_FORUM_POSTS, MOCK_TRENDING_TOPICS, MOCK_TOP_CONTRIBUTORS, MOCK_USER } from '../../../shared/constants/mock-data';

@Component({
  selector: 'app-forum',
  standalone: true,
  templateUrl: './forum.component.html'
})
export class ForumComponent {
  posts = MOCK_FORUM_POSTS;
  trendingTopics = MOCK_TRENDING_TOPICS;
  topContributors = MOCK_TOP_CONTRIBUTORS;
  user = MOCK_USER;
}
