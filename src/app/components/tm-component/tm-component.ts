import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CarouselComponent } from '../../shared/carousel-component/carousel-component';
import { PricingComponent } from '../pricing-component/pricing-component';
import { FaqComponent } from '../faq-component/faq-component';


@Component({
  selector: 'app-tm-component',
  imports: [MatButtonToggleModule, CarouselComponent, PricingComponent, FaqComponent],
  templateUrl: './tm-component.html',
  styleUrl: './tm-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TmComponent {
  planRange = signal<'monthly' | 'annually'>('monthly');

  updatePlanRange(event: any) {
    this.planRange.set(event);
  }

  goToNewTab() {
    window.open('http://mindhootlabs.cloud:8080/', '_blank');
  }

  contactSales() {

  }

  /// amount in dollars
  economyPlan = {
    amount: "400",
    name: 'Economy',
    details: [
      "10users per org",
      "5projects per org",
      "100 tasks per org",
      "10gb storage",
      "2months history",
      "No customization",
    ]
  };
  premiumPlan = {
    amount: "600",
    name: 'Premium',
    details: [
      "20users per org",
      "10projects per org",
      "300 tasks per org",
      "20gb storage",
      "6months history",
      "No customization",
    ]
  };
  plusPlan = {
    amount: "1000",
    name: 'Premium Plus',
    details: [
      "unlimited users",
      "unlimited projecs",
      "unlimted tasks",
      "unlimited storage",
      "One year history",
      "Limited customization",
    ]
  };

  customerPlan = {
    amount: "",
    name: 'Custom',
    details: [
      "Unlimited per org",
      "Unlimited per org",
      "Unlimited per org",
      "Unlimited storage",
      "Unlimited history",
      "Full Customization",
    ]
  };

}
