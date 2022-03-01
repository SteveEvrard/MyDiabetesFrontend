import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ResultsService } from "src/app/services/results.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit {

  loading: boolean = false;
  states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  ratings: any[] = [
    { value: 1, text: "1 - Within 10 miles" },
    { value: 2, text: "2 - Within 25 miles" },
    { value: 3, text: "3 - Within 50 miles" },
    { value: 4, text: "4 - Within 100 miles" },
    { value: 5, text: "5 - Any distance" }
  ];
  locationForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ResultsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.locationForm = this.createLocationForm();
  }

  createLocationForm(): FormGroup {
    return this.fb.group({
      zip: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      state: ["", [Validators.required]],
      travelImportance: ["", [Validators.required]],
    });
  }

  searchTrials() {
    this.loading = true;
    this.service.getTrialResultsByLocation(
      this.locationForm.get("state").value,
      this.locationForm.get("travelImportance").value,
      this.locationForm.get("zip").value
    );
    // .subscribe(
    //   resp => this.router.navigate(['/results'], { relativeTo: this.route })
    // );
    // this.router.navigate(['/results'], { relativeTo: this.route });
  }
  navigateToHome() {
    this.router.navigate(["/home"], { relativeTo: this.route });
  }
}
