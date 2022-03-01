import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ResultsService } from "src/app/services/results.service";

@Component({
  selector: "app-age",
  templateUrl: "./age.component.html",
  styleUrls: ["./age.component.scss"],
})
export class AgeComponent implements OnInit {
  loading: boolean = false;
  ageForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ResultsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ageForm = this.createAgeForm();
  }

  createAgeForm(): FormGroup {
    return this.fb.group({
      age: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  searchTrials() {
    this.loading = true;
    this.service
      .getTrialResultsByAge(this.ageForm.get("age").value)
      .subscribe((resp) =>
        this.router.navigate(["../gender"], { relativeTo: this.route })
      );
  }

  navigateToHome() {
    this.router.navigate(["/home"], { relativeTo: this.route });
  }
}
