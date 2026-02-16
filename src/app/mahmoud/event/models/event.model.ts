export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  host?: string;
  tags?: string[];
  dayOfWeek?: string;
  month?: string;
  day?: number;
  isFeatured?: boolean;
  isLive?: boolean;
}

export interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
  isLive?: boolean;
}

export interface SuggestedEvent {
  id: number;
  title: string;
  date: string;
  type: 'Free Entry' | 'Premium';
  icon: string;
}
