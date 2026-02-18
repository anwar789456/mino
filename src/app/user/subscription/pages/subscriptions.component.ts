import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPlan, PlanType, UserSubscription, SubscriptionStatus } from '../models/subscription.model';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent {
  billingCycle: 'monthly' | 'yearly' = 'yearly';

  plans: SubscriptionPlan[] = [
    { id: 1, name: PlanType.FREEMIUM, price: 0, durationDays: 0, description: 'Essential tools for casual learners starting their journey.' },
    { id: 2, name: PlanType.STANDARD, price: 49.99, durationDays: 365, description: 'Perfect for dedicated students who want to master English fast.' },
    { id: 3, name: PlanType.PREMIUM, price: 89.99, durationDays: 365, description: 'Great value for families or study groups up to 6 members.' }
  ];

  planDisplayNames: Record<string, string> = {
    [PlanType.FREEMIUM]: 'Starter',
    [PlanType.STANDARD]: 'Scholar',
    [PlanType.PREMIUM]: 'Family'
  };

  planFeatures: Record<string, string[]> = {
    [PlanType.FREEMIUM]: [
      'Access to all basic courses',
      'Daily vocabulary quiz',
      'Community forum access'
    ],
    [PlanType.STANDARD]: [
      'Everything in Starter',
      'Unlimited hearts & lives',
      'Offline mode learning',
      'Personalized mistakes review',
      'No ads'
    ],
    [PlanType.PREMIUM]: [
      'Everything in Scholar',
      'Up to 6 premium accounts',
      'Family progress dashboard',
      'Parental controls'
    ]
  };

  planCTA: Record<string, string> = {
    [PlanType.FREEMIUM]: 'Current Plan',
    [PlanType.STANDARD]: 'Start 14-day Free Trial',
    [PlanType.PREMIUM]: 'Choose Family'
  };

  premiumBenefits = [
    { label: 'Learn 2x faster', icon: 'rocket' },
    { label: 'Learn anywhere offline', icon: 'download' },
    { label: 'Exclusive challenges', icon: 'trophy' },
    { label: 'Ad-free environment', icon: 'shield' }
  ];

  getPrice(plan: SubscriptionPlan): number {
    if (this.billingCycle === 'monthly' && plan.price > 0) {
      return Math.round((plan.price / 10) * 100) / 100;
    }
    return plan.price;
  }

  getPriceLabel(plan: SubscriptionPlan): string {
    if (plan.price === 0) return 'Forever free';
    return this.billingCycle === 'yearly' ? 'per year' : 'per month';
  }
}
