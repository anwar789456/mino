import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Donation, DonationStatus, DonationCause } from '../models/donation.model';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donations.component.html'
})
export class DonationsComponent {
  walletBalance = 120.00;
  tabs = ['All', 'Events', 'Charity'];
  activeTab = 'All';

  featuredCause: DonationCause = {
    id: 0,
    title: 'Build the New Science Library',
    description: 'Help us purchase 500 new science books and tablets for the community learning center. Every dollar helps kids learn!',
    image: 'https://www.figma.com/api/mcp/asset/58809d48-a048-4f48-87b7-8323cd7b88f1',
    category: 'Featured Cause',
    backers: 312,
    raised: 3450,
    goal: 5000,
    isFeatured: true
  };

  causes: DonationCause[] = [
    {
      id: 1,
      title: 'Annual Summer Festival',
      description: 'Support the organization of our biggest yearly gathering. Funds go towards decorations, music, and snacks.',
      image: 'https://www.figma.com/api/mcp/asset/c8faa5d0-30d6-41cd-98c1-1fe3ed1f7314',
      category: 'Event',
      backers: 124,
      raised: 1200,
      startDate: 'Aug 15, 2024'
    },
    {
      id: 2,
      title: 'Green Park Initiative',
      description: 'We are planting 100 new trees in the city park. Help us make our city greener and cleaner for everyone.',
      image: 'https://www.figma.com/api/mcp/asset/bf3a3761-5bff-4775-b7d5-f659d5f21d3e',
      category: 'Charity',
      location: 'Central Park',
      backers: 85,
      raised: 850
    },
    {
      id: 3,
      title: 'Tech Lab Upgrade',
      description: 'Updating the old computers to new high-speed workstations for the coding club.',
      image: 'https://www.figma.com/api/mcp/asset/f73bad85-640a-454c-9d63-4fcfa7249998',
      category: 'School Event',
      location: 'School Lab 2',
      backers: 42,
      raised: 2100
    }
  ];

  recentDonations: Donation[] = [
    { amount: 15.00, message: 'School Lunch Fund', anonymous: false, status: DonationStatus.SUCCESS, paymentMethod: 'Card', donatedAt: 'Yesterday' },
    { amount: 30.00, message: 'Art Supplies', anonymous: false, status: DonationStatus.SUCCESS, paymentMethod: 'Card', donatedAt: 'Jun 24, 2024' },
    { amount: 50.00, message: 'Local Animal Shelter', anonymous: false, status: DonationStatus.SUCCESS, paymentMethod: 'Card', donatedAt: 'Jun 10, 2024' }
  ];

  totalDonated = 145;
  causesHelped = 5;

  get filteredCauses(): DonationCause[] {
    if (this.activeTab === 'All') return this.causes;
    return this.causes.filter(c => c.category === this.activeTab || c.category.toLowerCase().includes(this.activeTab.toLowerCase()));
  }

  get progressPercent(): number {
    if (!this.featuredCause.goal) return 0;
    return Math.min((this.featuredCause.raised / this.featuredCause.goal) * 100, 100);
  }
}
