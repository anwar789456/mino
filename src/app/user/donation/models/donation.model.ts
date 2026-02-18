export interface Donation {
  id?: number;
  userId?: number | null;
  amount: number;
  message?: string;
  anonymous: boolean;
  status: DonationStatus;
  paymentMethod: string;
  donatedAt?: string;
}

export enum DonationStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED'
}

export interface DonationCause {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  backers: number;
  raised: number;
  goal?: number;
  isFeatured?: boolean;
  startDate?: string;
}
