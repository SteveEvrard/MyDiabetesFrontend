import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ResultsService } from "src/app/services/results.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-primary-condition",
  templateUrl: "./primary-condition.component.html",
  styleUrls: ["./primary-condition.component.scss"],
})
export class PrimaryConditionComponent implements OnInit {
  loading: boolean = false;
  conditions: string[] = [
    "Type 1 Diabetes",
    "Type 2 Diabetes",
    "Gestational Diabetes",
    "Prediabetes",
    "I don't have diabetes, I am a healthy participant",
  ];
  conditionForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ResultsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.conditionForm = this.createConditionForm();
  }

  createConditionForm(): FormGroup {
    return this.fb.group({
      condition: ["", [Validators.required]],
    });
  }

  searchTrials() {
    this.loading = true;
    this.service.getTrialResultsByCondition(
      this.conditionForm.get("condition").value
    );
    this.router.navigate(["../age"], { relativeTo: this.route });
  }

  navigateToHome() {
    this.router.navigate(["/home"], { relativeTo: this.route });
  }
}
