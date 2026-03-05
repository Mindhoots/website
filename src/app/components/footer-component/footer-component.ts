import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink, RouterModule } from "@angular/router";
import { DialogComponent } from '../../shared/dialog-component/dialog-component';

@Component({
  selector: 'app-footer-component',
  imports: [RouterLink, RouterModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {

  readonly dialog = inject(MatDialog);
  readonly companyName = "MindHoot Labs"

  readonly policies = [
    {
      title: "TERMS & CONDITIONS",
      content: [
        {
          title: "1. Introduction",
          message: `Welcome to ${this.companyName}. By accessing or using our website and services, you agree to be bound by these Terms & Conditions.\nIf you do not agree with these terms, please do not use our services.`,
        },
        {
          title: "2. Services",
          message: `${this.companyName} provides IT services including but not limited to:\n• Software Development \n• Cloud & DevOps Services \n• Data & Analytics \n• IT Consulting \nAll services are subject to separate agreements, proposals, or contracts where applicable.`,
        },
        {
          title: "3. Use of Website",
          message: "You agree to: \n• Use the website for lawful purposes only \n• Not attempt to gain unauthorized access to systems \n• Not copy, distribute, or misuse website content"
        },
        {
          title: `4. Intellectual Property`,
          message: `All website content including text, graphics, logos, and design is the property of ${this.companyName} unless otherwise stated.\nProject-specific intellectual property ownership will be defined in signed client agreements.`,
        },
        {
          title: `5. Payments`,
          message: `Payment terms, milestones, and due dates will be defined in project proposals or contracts. Late payments may result in service suspension.`,
        },
        {
          title: `6. Limitation of Liability`,
          message: `${this.companyName} shall not be liable for:\n• Indirect or consequential damages\n• Loss of data or business interruption\n• Third-party service failures\nAll services are provided “as is” unless explicitly agreed otherwise in writing.`,
        },
        {
          title: `7. Termination`,
          message: `We reserve the right to terminate services if terms are violated or payments are not made as agreed.`,
        },
        {
          title: `8. Governing Law`,
          message: `These Terms shall be governed by the laws of [Your Country/State].`,
        },
        {
          title: `9. Contact`,
          message: `For questions, contact us at:`,
        },
      ]
    },
    {
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
    {
      title: "REFUND & CANCELLATION POLICY",
      content: [
        {
          title: `1. Project-Based Services`,
          message: "Due to the nature of IT and software development services:\n• Payments made for completed milestones are non-refundable.\n• If a project is canceled mid-way, payment for completed work remains payable.",
        },
        {
          title: `2. Cancellation by Client`,
          message: `Clients may cancel services by providing written notice. Any work completed up to the cancellation date will be billed.`,
        },
        {
          title: `3. Cancellation by Company`,
          message: `We reserve the right to cancel services if:\n• Payment obligations are not met\n• Client violates terms\n• Misuse of services occurs`,
        },
        {
          title: `4. Subscription Services (If Applicable)`,
          message: `If you offer subscriptions:\n• Cancellations must be made before the next billing cycle.\n• No partial refunds for unused periods unless otherwise agreed.`,
        },
        {
          title: `5. Exceptions`,
          message: `Refunds, if approved, will be processed within 90 business days.\n\nFor refund requests:`,
        },
      ]
    },
    {
      title: "COOKIE POLICY",
      content: [
        {
          title: `1. What Are Cookies?`,
          message: `Cookies are small text files stored on your device to improve user experience.`,
        },
        {
          title: `2. Types of Cookies We Use`,
          message: `• Essential Cookies - Required for website functionality.\n• Analytics Cookies - Used to understand website usage (e.g., Google Analytics).\n• Marketing Cookies (if applicable) - Used for advertising and tracking.`,
        },
        {
          title: `3. Managing Cookies`,
          message: `You can control or disable cookies through your browser settings.\nNote: Disabling certain cookies may affect website functionality.`,
        },
        {
          title: `4. Third-Party Cookies`,
          message: `We may use trusted third-party services that place cookies on your device.`,
        },
        {
          title: `5. Updates to This Policy`,
          message: `We may update this Cookie Policy periodically.\n\nFor questions:`,
        },
      ],
    }
  ]

  openDialog(idx: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.policies[idx],
      restoreFocus: false,
      autoFocus: false,
      maxHeight: '90vh',
    },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
