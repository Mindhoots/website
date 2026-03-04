import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input-component/input-component';

@Component({
  selector: 'app-contact-component',
  imports: [FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {

  private formBuilder = inject(FormBuilder);

  enquiryForms = this.formBuilder.group({
    firstName: [''],
    secondName: [''],
    email: [''],
    companyName: [''],
    mobileNo: [''],
    companySize: [''],
    jobTitle: [''],
    enquiry: [''],
  })

  onSubmitForm() {

  }

}


