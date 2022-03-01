import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-terms-dialog',
  templateUrl: './terms-dialog.component.html',
  styleUrls: ['./terms-dialog.component.scss']
})
export class TermsDialogComponent {

  constructor (private fb: FormBuilder) {}

  termsConditionForm = this.fb.group ({
    termsOfService: ['', Validators.requiredTrue],
    privacy: ['', Validators.requiredTrue]
  });

  openTerms() {
    window.open("http://mydiabetestos.s3-website.us-east-2.amazonaws.com/", "_blank");
  }
}
