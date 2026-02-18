import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-donations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donations.component.html'
})
export class DonationsComponent {
  stats = [
    { label: 'Total Raised', value: '$124,593', sub: '+ 15% vs last month', subColor: 'text-green-500', valueColor: 'text-[#0f1419]' },
    { label: 'Pending Review', value: '4', sub: '$2,450 total value', subColor: 'text-[#9ca3af]', valueColor: 'text-green-500' },
    { label: 'Avg. Donation', value: '$85.20', sub: '+ 2.1% increase', subColor: 'text-green-500', valueColor: 'text-[#0f1419]' },
    { label: 'Top Category', value: 'Events', sub: '65% of volume', subColor: 'text-[#9ca3af]', valueColor: 'text-[#0f1419]' }
  ];

  tabs = ['All Donations', 'Platform', 'Events', 'Pending Review'];
  activeTab = 'All Donations';

  donations = [
    { donor: 'Hamza Al-Fayed', role: 'Standard User', avatar: '👨', amount: '$500.00', target: 'Global Charity Event', date: 'Just now', status: 'Pending', statusColor: 'bg-orange-100 text-orange-600' },
    { donor: 'Elena Rossi', role: 'Tutor', avatar: '👩', amount: '$50.00', target: 'Platform Support', date: '2 hours ago', status: 'Accepted', statusColor: 'bg-green-100 text-green-600' },
    { donor: 'John Smith', role: 'Guest', avatar: '👨', amount: '$1,200.00', target: 'Tech Education Fund', date: 'Yesterday', status: 'Accepted', statusColor: 'bg-green-100 text-green-600' },
    { donor: 'Priya Patel', role: 'Student', avatar: '👩', amount: '$25.00', target: 'Platform Support', date: 'Oct 20, 2023', status: 'Failed', statusColor: 'bg-red-100 text-red-500' }
  ];

  selectedDonation = this.donations[0];

  selectDonation(donation: any) {
    this.selectedDonation = donation;
  }
}
