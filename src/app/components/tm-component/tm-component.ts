import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CarouselComponent } from '../../shared/carousel-component/carousel-component';
import { PricingComponent } from '../pricing-component/pricing-component';
import { FaqComponent } from '../faq-component/faq-component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../../shared/contact-component/contact-component';
import { FooterComponent } from '../footer-component/footer-component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog-component/dialog-component';

@Component({
  selector: 'app-tm-component',
  imports: [FooterComponent, MatButtonToggleModule, CarouselComponent, PricingComponent, FaqComponent, CommonModule, ReactiveFormsModule, FormsModule, ContactComponent],
  templateUrl: './tm-component.html',
  styleUrl: './tm-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TmComponent {
  readonly dialog = inject(MatDialog);

  isYearlyPricing: boolean = true;

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "PRIVACY POLICY",
        content: [
          {
            title: `1. Information We Collect`,
            message: `We may collect:\n• Name\n• Email address\n• Phone number\n• Company details\n• Project requirements\n• Technical data (IP address, browser type)`,
          },
          {
            title: `2. How We Use Information`,
            message: `We use collected data to:\n• Respond to inquiries\n• Provide services\n• Improve our website\n• Send updates (if subscribed)\n• We do not sell personal information.`,
          },
          {
            title: `3. Data Protection`,
            message: `We implement reasonable technical and organizational measures to protect your data.`,
          },
          {
            title: `4. Data Sharing`,
            message: `We may share data with:\n• Cloud hosting providers\n• Payment processors\n• Legal authorities if required`,
          },
          {
            title: `5. Data Retention`,
            message: `We retain data only as long as necessary for business or legal purposes.`,
          },
          {
            title: `6. Third-Party Links`,
            message: `Our website may contain links to third-party websites. We are not responsible for their privacy practices.`,
          },
          {
            title: `7. Your Rights`,
            message: `Depending on your jurisdiction, you may request:\n• Access to your data\n• Correction of inaccurate data\n• Deletion of your data\n\nTo exercise these rights, contact:`,
          },
        ]
      },
      restoreFocus: false,
      autoFocus: false,
      maxHeight: '90vh',
    },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
