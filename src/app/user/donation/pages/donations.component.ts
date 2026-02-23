import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Donation, DonationStatus } from '../models/donation.model';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donations.component.html'
})
export class DonationsComponent implements OnInit {
  tabs = ['All', 'Success', 'Pending', 'Failed'];
  activeTab = 'All';

  showModal = false;
  submitting = false;
  loading = true;
  editingDonationId: number | null = null;
  showDeleteConfirm = false;
  deletingDonationId: number | null = null;
  deleting = false;
  formData = {
    amount: null as number | null,
    message: '',
    paymentMethod: 'Card',
    anonymous: false
  };
  paymentMethods = ['Card', 'PayPal', 'Bank Transfer'];

  constructor(private donationService: DonationService) {}

  donations: Donation[] = [];

  ngOnInit(): void {
    this.loadDonations();
  }

  loadDonations(): void {
    this.loading = true;
    this.donationService.getAll().subscribe({
      next: (data) => {
        this.donations = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  get totalDonated(): number {
    return this.donations
      .filter(d => d.status === DonationStatus.SUCCESS)
      .reduce((sum, d) => sum + d.amount, 0);
  }

  get successCount(): number {
    return this.donations.filter(d => d.status === DonationStatus.SUCCESS).length;
  }

  get pendingCount(): number {
    return this.donations.filter(d => d.status === DonationStatus.PENDING).length;
  }

  get filteredDonations(): Donation[] {
    if (this.activeTab === 'All') return this.donations;
    return this.donations.filter(d => d.status === this.activeTab.toUpperCase());
  }

  openDonateModal(): void {
    this.editingDonationId = null;
    this.formData = { amount: null, message: '', paymentMethod: 'Card', anonymous: false };
    this.showModal = true;
  }

  openEditModal(donation: Donation): void {
    this.editingDonationId = donation.id ?? null;
    this.formData = {
      amount: donation.amount,
      message: donation.message || '',
      paymentMethod: donation.paymentMethod,
      anonymous: donation.anonymous
    };
    this.showModal = true;
  }

  closeDonateModal(): void {
    this.showModal = false;
    this.editingDonationId = null;
  }

  confirmDelete(donation: Donation): void {
    this.deletingDonationId = donation.id ?? null;
    this.showDeleteConfirm = true;
  }

  cancelDelete(): void {
    this.showDeleteConfirm = false;
    this.deletingDonationId = null;
  }

  deleteDonation(): void {
    if (!this.deletingDonationId) return;
    this.deleting = true;
    this.donationService.delete(this.deletingDonationId).subscribe({
      next: () => {
        this.deleting = false;
        this.showDeleteConfirm = false;
        this.deletingDonationId = null;
        this.loadDonations();
      },
      error: () => {
        this.deleting = false;
      }
    });
  }

  submitDonation(): void {
    if (!this.formData.amount || this.formData.amount <= 0) return;
    this.submitting = true;

    const donation: Donation = {
      amount: this.formData.amount,
      message: this.formData.message || undefined,
      paymentMethod: this.formData.paymentMethod,
      anonymous: this.formData.anonymous,
      status: DonationStatus.PENDING
    };

    const request$ = this.editingDonationId
      ? this.donationService.update(this.editingDonationId, donation)
      : this.donationService.create(donation);

    request$.subscribe({
      next: () => {
        this.submitting = false;
        this.showModal = false;
        this.editingDonationId = null;
        this.loadDonations();
      },
      error: () => {
        this.submitting = false;
      }
    });
  }
}
