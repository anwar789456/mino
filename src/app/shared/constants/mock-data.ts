import { User } from '../../anwar/user/models/user.model';
import { Course } from '../../ayoub/course/models/course.model';
import { Friend, FriendRequest, ChatMessage } from '../../anwar/friends/models/friend.model';
import { Session, Certification, PracticeItem } from '../../aziz/sessionreservation/models/sessionReservation.model';
import { QuizCard, QuizCategory } from '../../alaa/quiz/models/quiz.model';
import { ForumPost, TrendingTopic, TopContributor } from '../../hani/forum/models/forum.model';
import { Event } from '../../mahmoud/event/models/event.model';

export const MOCK_USER: User = {
  id: 1,
  name: 'Alex Johnson',
  username: '@alex_learns',
  email: 'alex.johnson@example.com',
  pwd: '',
  numTel: '+216 12 345 678',
  dateNaiss: '2000-05-15',
  role: 'ETUDIANT',
  inscriptionOk: true,
  posterForum: true,
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  level: 'Intermediate',
  xp: 420,
  streak: 5,
  coins: 2450,
  language: 'EN',
  joinDate: 'Jan 2024',
  bio: 'Learning English one day at a time!'
};

export const MOCK_COURSES: Course[] = [
  {
    id: 1,
    title: 'Travel Essentials',
    description: 'Learn how to ask for directions, book a hotel, and order food.',
    content: 'Vocabulary and phrases for travel situations including airports, hotels, and restaurants.',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=travel',
    progress: 65,
    status: 'in-progress',
    unit: 3
  },
  {
    id: 2,
    title: 'Shopping & Money',
    description: 'Master the art of bargaining and understanding currency.',
    content: 'Learn shopping vocabulary, prices, and how to handle money conversations.',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=shopping',
    progress: 0,
    status: 'next-up',
    unit: 4
  },
  {
    id: 3,
    title: 'Health & Wellness',
    description: 'Expressing feelings, visiting the doctor, and emergencies.',
    content: 'Medical vocabulary, describing symptoms, and emergency phrases.',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=health',
    progress: 0,
    status: 'next-up',
    unit: 5
  },
  {
    id: 4,
    title: 'Business English',
    description: 'Professional emails, meetings, and workplace etiquette.',
    content: 'Formal language for emails, presentations, and professional interactions.',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=business',
    progress: 0,
    status: 'locked',
    unit: 6
  },
  {
    id: 5,
    title: 'Advanced Debate',
    description: 'Structuring arguments and persuasive speaking.',
    content: 'Techniques for building arguments, counterpoints, and persuasive rhetoric.',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=debate',
    progress: 0,
    status: 'locked',
    unit: 7
  }
];

export const MOCK_FRIENDS: Friend[] = [
  {
    id: 1,
    name: 'Priya Patel',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    lastMessage: 'Are you joining the session?',
    time: '2m',
    online: true,
    status: 'Chatting'
  },
  {
    id: 2,
    name: 'Alex Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexChen',
    lastMessage: 'Thanks for the help with gram...',
    time: '1h',
    online: false
  },
  {
    id: 3,
    name: 'Maria Garcia',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    lastMessage: 'Did you finish the quiz?',
    time: 'Yesterday',
    online: false
  },
  {
    id: 4,
    name: 'David Okafor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    lastMessage: "Let's practice speaking tomorr...",
    time: '2d',
    online: false
  }
];

export const MOCK_FRIEND_REQUESTS: FriendRequest[] = [
  {
    id: 1,
    name: 'Hassan M.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan',
    info: 'Sends 50XP'
  },
  {
    id: 2,
    name: 'Yuki S.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki',
    info: 'Language Partner'
  }
];

export const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    senderId: 1,
    text: 'Hi! Are you going to the English Club meetup later?',
    time: '10:30 AM',
    isMine: false
  },
  {
    id: 2,
    senderId: 0,
    text: "Hey Priya! Yes, I'm planning to. It starts at 4 PM right?",
    time: '10:32 AM',
    isMine: true
  },
  {
    id: 3,
    senderId: 1,
    text: "Yes! 4 PM on Zoom. I'm a bit nervous about the speaking part.",
    time: '10:33 AM',
    isMine: false
  },
  {
    id: 4,
    senderId: 0,
    text: "Don't worry! You're doing great. We can practice together beforehand if you want?",
    time: '10:35 AM',
    isMine: true
  },
  {
    id: 5,
    senderId: 1,
    text: 'That would be amazing! Are you joining the session now?',
    time: '10:45 AM',
    isMine: false
  }
];

export const MOCK_SESSIONS: Session[] = [
  {
    id: 1,
    title: 'Beginner English Certificate (Level A2)',
    level: 'A2',
    date: 'Saturday, Oct 28',
    time: '10:00 AM',
    duration: '45 mins',
    readinessScore: 85,
    status: 'upcoming',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=trophy',
    tip: 'Complete 2 more practice units to reach 100%.'
  }
];

export const MOCK_CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: 'Foundations A1',
    subtitle: 'Beginner Level',
    status: 'passed',
    date: 'Aug 15, 2023',
    icon: '✓'
  },
  {
    id: 2,
    title: 'Intermediate B1',
    subtitle: 'Conversational Skills',
    status: 'active',
    progress: '18/24 Units',
    estimatedExam: 'Nov 2023',
    icon: 'B1'
  },
  {
    id: 3,
    title: 'Advanced C1',
    subtitle: 'Professional Fluency',
    status: 'locked',
    icon: '🔒'
  }
];

export const MOCK_PRACTICE_ITEMS: PracticeItem[] = [
  {
    id: 1,
    title: 'Mock Exam: Listening',
    description: 'Simulate the real exam environment',
    color: 'green'
  },
  {
    id: 2,
    title: 'Flashcard Revision',
    description: 'Review key vocabulary terms',
    color: 'green'
  }
];

export const MOCK_QUIZZES: QuizCard[] = [
  {
    id: 1,
    title: 'Everyday words',
    totalQuestions: 15,
    level: 'Beginner',
    progress: 60,
    status: 'continue',
    icon: '✨'
  },
  {
    id: 2,
    title: 'School & study words',
    totalQuestions: 12,
    level: 'Intermediate',
    progress: 0,
    status: 'start',
    icon: '🖥️'
  },
  {
    id: 3,
    title: 'Phrases for chatting',
    totalQuestions: 10,
    level: 'Beginner',
    progress: 20,
    status: 'continue',
    icon: '💬'
  },
  {
    id: 4,
    title: 'Adjectives & feelings',
    totalQuestions: 15,
    level: 'Intermediate',
    progress: 0,
    status: 'locked',
    icon: '🎭',
    xpRequired: 40
  }
];

export const MOCK_QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: 1,
    title: 'Reading practice',
    description: 'Short stories with questions.',
    totalSets: 5,
    icon: '📖'
  },
  {
    id: 2,
    title: 'Grammar checks',
    description: 'Fill-in-the-blank and fix-the-error.',
    totalSets: 4,
    icon: '✏️'
  },
  {
    id: 3,
    title: 'Listening clips',
    description: 'Listen and choose the right answer.',
    totalSets: 3,
    icon: '🎧'
  }
];

export const MOCK_FORUM_POSTS: ForumPost[] = [
  {
    id: 1,
    author: 'David Okafor',
    username: '@david_learns',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    time: '2h',
    content: 'Just finished the Advanced Grammar certification! 🎓 Huge thanks to everyone who helped me practice past participles last week. It really paid off! #NiNoSuccess #Learning',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=graduation',
    comments: 12,
    reposts: 4,
    likes: 156
  },
  {
    id: 2,
    author: 'Maria Garcia',
    username: '@maria_g',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    time: '1h',
    content: "Congratulations David! That's amazing news. I'm struggling with phrasal verbs right now, any tips? 🤔",
    comments: 2,
    reposts: 0,
    likes: 8
  },
  {
    id: 3,
    author: 'David Okafor',
    username: '@david_learns',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    time: '45m',
    content: "Thanks Maria! For phrasal verbs, I try to group them by the main verb (like 'get' or 'take') and make funny sentences. Check out the 'Verb Vibes' course here, it helped a lot!",
    comments: 1,
    reposts: 0,
    likes: 3
  },
  {
    id: 4,
    author: 'Alex Chen',
    username: '@alexc_code',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexChen',
    time: '3h',
    content: 'Does anyone want to join a study group for the IELTS preparation? Looking for 2-3 people to practice speaking on weekends. 🗣️',
    comments: 24,
    reposts: 12,
    likes: 45
  }
];

export const MOCK_TRENDING_TOPICS: TrendingTopic[] = [
  {
    id: 1,
    category: 'Grammar',
    title: '#PastParticiple',
    posts: '2.4K posts'
  },
  {
    id: 2,
    category: 'Certification',
    title: 'TOEFL Prep',
    posts: '12K posts'
  },
  {
    id: 3,
    category: 'Community Event',
    title: 'Sunday Speaking Club',
    posts: '543 posts'
  }
];

export const MOCK_TOP_CONTRIBUTORS: TopContributor[] = [
  {
    id: 1,
    name: 'Sarah Teacher',
    username: '@sarah_eng',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'Kenji M.',
    username: '@kenji_jp',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji'
  },
  {
    id: 3,
    name: 'Ananya R.',
    username: '@ana_reads',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya'
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: 'Global English Speaking Club: Food & Culture 🍕',
    description: 'Join over 500 students from around the world to practice conversation skills. This week\'s topic is all about your favorite local dishes!',
    date: 'FRI, OCT 20',
    time: '18:00 UTC',
    location: 'Online Workshop',
    image: 'https://www.figma.com/api/mcp/asset/36006ce7-bf6b-49ea-ba58-61efcbcfbc75',
    category: 'Speaking',
    attendees: 245,
    status: 'ongoing',
    isFeatured: true,
    isLive: true
  },
  {
    id: 2,
    title: 'Beginner Spanish: Rolling your R\'s',
    description: 'Learn the basics of Spanish pronunciation with a focus on rolling R sounds.',
    date: 'OCT 22',
    time: '14:00 UTC',
    location: 'Online Workshop',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=spanish',
    category: 'Speaking',
    attendees: 32,
    status: 'upcoming',
    host: 'Senora Martinez',
    tags: ['Pronunciation', 'Beginner'],
    dayOfWeek: 'SUNDAY',
    month: 'OCT',
    day: 22
  },
  {
    id: 3,
    title: 'IELTS Mock Test Strategy Session',
    description: 'Practice IELTS test strategies with mock exams and expert guidance.',
    date: 'OCT 25',
    time: '09:00 UTC',
    location: 'Online Classroom',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=ielts',
    category: 'Certification',
    attendees: 18,
    status: 'upcoming',
    host: 'The NiNo Team',
    tags: ['Exams', 'Advanced'],
    dayOfWeek: 'WEDNESDAY',
    month: 'OCT',
    day: 25
  },
  {
    id: 4,
    title: 'Monthly Trivia Night: Geography',
    description: 'Test your geography knowledge in this fun community trivia event.',
    date: 'NOV 01',
    time: '18:00 UTC',
    location: 'Discord Server',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=trivia',
    category: 'Fun',
    attendees: 42,
    status: 'upcoming',
    host: 'Community Event',
    tags: ['Social', 'Fun'],
    dayOfWeek: 'WEDNESDAY',
    month: 'NOV',
    day: 1
  }
];

export const MOCK_LEADERBOARD = [
  { rank: 1, name: 'Yuki M.', xp: 1200, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YukiM' },
  { rank: 2, name: 'Carlos R.', xp: 980, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos' },
  { rank: 9, name: 'You', xp: 420, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You', isCurrentUser: true },
  { rank: 10, name: 'Sarah J.', xp: 390, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJ' }
];
