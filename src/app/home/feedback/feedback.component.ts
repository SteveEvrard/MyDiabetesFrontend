import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: FeedbackService, private router: Router, private route: ActivatedRoute, private dialogRef: MatDialogRef<FeedbackComponent>,) { }

  termsConditionForm = this.fb.group ({
    stars: [null, Validators.required],
    review: ['', Validators.required]
  });

  ngOnInit() {
  }

  submitFeedback() {
    this.service
      .submitFeedback(this.termsConditionForm.get("stars").value, this.termsConditionForm.get("review").value)
      .subscribe((resp) =>
        this.router.navigate(["/home"], { relativeTo: this.route })
      );
    this.dialogRef.close();
  }

}
