import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";

export interface DialogData {
  email: string;
}

@Component({
  selector: "app-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
})
export class EmailComponent implements OnInit {
  emailForm: FormGroup;
  email: string;

  constructor(
    private dialogRef: MatDialogRef<EmailComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) { email }
  ) {
    this.email = email;
  }

  ngOnInit(): void {
    this.emailForm = this.createEmailForm();
  }

  createEmailForm() {
    return this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", []],
      referredBy: ["", []],
      body: ["", []],
      agreeToContact: ["", [Validators.requiredTrue]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.emailForm.value);
  }
}
