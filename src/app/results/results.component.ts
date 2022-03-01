import { Component, OnInit, Output } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ResultsService } from "../services/results.service";
import { PageEvent } from "@angular/material/paginator";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailService } from "../services/email.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
})
export class ResultsComponent implements OnInit {
  @Output() results: any[] = [];
  
  emailForm: FormGroup;
  pageResults: any[] = [];
  selectedTrial: any;
  pageEvent: PageEvent;
  displayResults: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ResultsService,
    private emailService: EmailService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log("LOAD RESULTS", this.loadTrialResults());
    this.route.snapshot.paramMap.get('state') ? this.displayResults = true : null;
    
    this.results = this.loadTrialResults();
    this.pageResults = this.results.slice(0, 10);
    this.emailForm = this.createEmailForm();
    window.scroll(0, 0);
  }

  createEmailForm() {
    return this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  navigateToSearch() {
    this.router.navigate(["../search/condition"], { relativeTo: this.route });
  }

  loadTrialResults() {
    return this.service.loadTrialResults();
  }

  displayTrial(trial) {
    this.selectedTrial = trial;
    this.router.navigate(["../results/", this.selectedTrial.nctId], {
      relativeTo: this.route,
    });
  }

  displayPage($event: PageEvent) {
    window.scroll(0, 0);
    this.pageResults = [];
    let trialsToDisplay = ($event.pageIndex + 1) * $event.pageSize;
    this.results.forEach((result, i) => {
      if (trialsToDisplay > i && i >= trialsToDisplay - 10) {
        this.pageResults.push(result);
      }
    });
  }

  formatDate(date: string) {
    let year: string = date.substring(0, 4);
    let month: string = date.substring(5, 7);
    let day: string = date.substring(8, 10);
    return `${month}/${day}/${year}`;
  }

  navigateToHome() {
    this.router.navigate(["/home"], { relativeTo: this.route });
  }

  save() {
    console.log('EMAIL', this.emailForm.get("email").value)
    this.emailService.saveEmail(this.emailForm.get("email").value)
      .subscribe(resp => console.log('email resp', resp));
    this.displayResults = !this.displayResults;
  }
}
