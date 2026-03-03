import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CarouselComponent } from '../../shared/carousel-component/carousel-component';
import { PricingComponent } from '../pricing-component/pricing-component';
import { FaqComponent } from '../faq-component/faq-component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tm-component',
  imports: [MatButtonToggleModule, CarouselComponent, PricingComponent, FaqComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './tm-component.html',
  styleUrl: './tm-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TmComponent {
  private formBuilder = inject(FormBuilder);

  isYearlyPricing: boolean = true;

  enquiryForms = this.formBuilder.group({
    firstName: [''],
    secondName: [''],
    email: [''],
    companyName: [''],
    mobileNo: [''],
    companySize: [''],
    jobTitle: [''],
    description: [''],
  })

  onSubmitForm() {

  }


  updatePricing() {
    this.isYearlyPricing = !this.isYearlyPricing;
  }


  goToNewTab() {
    window.open('http://mindhootlabs.cloud:8080/', '_blank');
  }

  contactSales() {

  }

  getEconomyPlan() {
    if (this.isYearlyPricing) {
      return this.yearlyEconomy;
    } else {
      return this.monthlyEconomy;
    }
  }

  getPremiumPlan() {
    if (this.isYearlyPricing) {
      return this.yearlyPremium;
    } else {
      return this.monthlyPremium;
    }
  }

  getPlusPlan() {
    if (this.isYearlyPricing) {
      return this.yearlyPlus;
    } else {
      return this.monthlyPlus;
    }
  }

  /// amount in dollars
  monthlyEconomy = {
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
  yearlyEconomy = {
    amount: "4500",
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

  monthlyPremium = {
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

  yearlyPremium = {
    amount: "12800",
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

  monthlyPlus = {
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

  yearlyPlus = {
    amount: "11000",
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


}
