import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ResultsService } from "src/app/services/results.service";

@Component({
  selector: "app-gender",
  templateUrl: "./gender.component.html",
  styleUrls: ["./gender.component.scss"],
})
export class GenderComponent implements OnInit {
  maleSelected: boolean = false;
  femaleSelected: boolean = false;
  neitherSelected: boolean = false;
  loading: boolean = false;
  genderForm: FormGroup;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private fb: FormBuilder,
    private service: ResultsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.genderForm = this.createGenderForm();
  }

  createGenderForm(): FormGroup {
    return this.fb.group({
      gender: ["", [Validators.required]],
    });
  }

  searchTrials() {
    this.loading = true;
    this.service
      .getTrialResultsByGender(this.genderForm.get("gender").value)
      .subscribe((resp) =>
        this.router.navigate(["../location"], { relativeTo: this.route })
      );
  }

  setFormValue(gender: string) {
    if (gender === "Male") {
      this.femaleSelected = false;
      this.maleSelected = true;
      this.neitherSelected = false;
    } else if (gender === "Female") {
      this.maleSelected = false;
      this.femaleSelected = true;
      this.neitherSelected = false;
    } else if (gender == 'Neither') {
      this.maleSelected = false;
      this.femaleSelected = false;
      this.neitherSelected = true;
    }
    console.log("bool", this.maleSelected);

    this.genderForm.setValue({ gender: gender });
    this.cdr.markForCheck();
  }

  navigateToHome() {
    this.router.navigate(["/home"], { relativeTo: this.route });
  }
}
