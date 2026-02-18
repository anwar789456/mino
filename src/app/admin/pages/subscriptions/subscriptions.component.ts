import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-subscriptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent {
  stats = [
    { label: 'MRR', value: '$124,590', sub: '+ 8.2% from last month', subColor: 'text-green-500', valueColor: 'text-[#0f1419]' },
    { label: 'Active Subscribers', value: '8,450', sub: '+ 142 new today', subColor: 'text-green-500', valueColor: 'text-[#0f1419]' },
    { label: 'Churn Rate', value: '2.4%', sub: '+ 0.2% increase', subColor: 'text-red-500', valueColor: 'text-[#0f1419]' },
    { label: 'Past Due', value: '$1,240', sub: '12 invoices', subColor: 'text-[#9ca3af]', valueColor: 'text-orange-500' }
  ];

  tabs = ['All Subs', 'Active', 'Past Due', 'Cancelled'];
  activeTab = 'All Subs';

  subscriptions = [
    { name: 'Sarah Gomez', email: 'sarah.g@example.com', avatar: '👩', plan: 'Pro Plan', planColor: 'bg-[#38a9f3] text-white', planIcon: '✦', status: 'Active', statusColor: 'bg-green-100 text-green-600', amount: '$29.00/mo', billing: 'Nov 24, 2023' },
    { name: 'David Miller', email: 'david.m@tutor.nino.com', avatar: '👨', plan: 'Enterprise', planColor: 'bg-purple-500 text-white', planIcon: '🏢', status: 'Active', statusColor: 'bg-green-100 text-green-600', amount: '$299.00/mo', billing: 'Nov 28, 2023' },
    { name: 'Yuki Tanaka', email: 'yuki.t@example.com', avatar: '🧑', plan: 'Basic', planColor: 'bg-gray-200 text-gray-700', planIcon: '', status: 'Past Due', statusColor: 'bg-red-100 text-red-500', amount: '$9.00/mo', billing: 'Oct 20, 2023' },
    { name: 'Marcus Johnson', email: 'marcus.j@example.com', avatar: '👨', plan: 'Pro Plan', planColor: 'bg-[#38a9f3] text-white', planIcon: '✦', status: 'Cancelled', statusColor: 'bg-gray-100 text-gray-500', amount: '-', billing: 'Ended Nov 01' }
  ];

  selectedSub = this.subscriptions[0];

  selectSub(sub: any) {
    this.selectedSub = sub;
  }
}
