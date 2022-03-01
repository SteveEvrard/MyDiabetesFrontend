import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ResultsService } from "src/app/services/results.service";
import { EmailService } from "src/app/services/email.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EmailComponent } from "./email/email.component";
import { MatSnackBar } from "@angular/material/snack-bar";

export interface Data {
  email: string;
}

@Component({
  selector: "app-trial-detail",
  templateUrl: "./trial-detail.component.html",
  styleUrls: ["./trial-detail.component.scss"],
})
export class TrialDetailComponent implements OnInit {
  id: string;
  trial: any;
  data: any;
  results = this.service.loadTrialResults();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private emailService: EmailService,
    private service: ResultsService,
    private emailConfirmation: MatSnackBar
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.id = this.route.snapshot.paramMap.get("id");
    this.results.filter((data) => {
      if (data.nctId === this.id) {
        this.trial = data;
      }
    });
  }

  formatDate(date: string) {
    let year: string = date.substring(0, 4);
    let month: string = date.substring(5, 7);
    let day: string = date.substring(8, 10);
    return `${month}/${day}/${year}`;
  }

  navigateToResults() {
    this.router.navigate(["../results", {state: true}]);
  }

  submitUserEmail(data) {
    data.nctId = this.trial.nctId;
    data.facilityIds = [];
    this.trial.facilities.forEach((facility) => {
      data.facilityIds.push(facility.id);
    });
    data.zipCode =
      this.trial.facilities.length > 0 ? this.trial.facilities[0].zip : "";
    this.emailService.submitEmail(data).subscribe((resp) => {
      console.log("RESP", resp);
      this.openSnackBar();
      return resp;
    });
  }

  checkSponsor(trial) {
    if (trial.sponsors) {
      return trial.sponsors[0].name;
    } else {
      return "N/A";
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "100%";
    dialogConfig.data = {
      email: "",
    };

    const dialogRef = this.dialog.open(EmailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      this.data = data;
      console.log(this.data);
      this.submitUserEmail(data);
    });
  }

  openSnackBar() {
    this.emailConfirmation.open("Success!", "Dismiss", {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["snackbar"],
    });
  }
}
