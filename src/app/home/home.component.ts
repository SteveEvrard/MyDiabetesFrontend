import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog /*, public overlay: Overlay*/) { }

  ngOnInit(): void {
  }

  navigateToTrials() {
    this.router.navigate(['../search/condition'], { relativeTo: this.route });
  }

  openTermsDialog(){
    let dialogRef = this.dialog.open(TermsDialogComponent, {
      /* after importing the Overlay module, setting scrollStrategy to noop fixes the website shifting bug, but also allows the user to scroll up and down
      the website even if the dialog box is open (default is, when dialog box is open, cannot scroll up and down on main site) */
      /* scrollStrategy: this.overlay.scrollStrategies.noop(), */
      // size of dialog box
      height: '250px',
      width: '600px'
    }).afterClosed().subscribe( agreeToTerms => {
      if (agreeToTerms)
        this.router.navigate(['../search/condition'], { relativeTo: this.route });
    })
  }

  openFeedback(){
    let dialogRef = this.dialog.open(FeedbackComponent, {
      /* after importing the Overlay module, setting scrollStrategy to noop fixes the website shifting bug, but also allows the user to scroll up and down
      the website even if the dialog box is open (default is, when dialog box is open, cannot scroll up and down on main site) */
      /* scrollStrategy: this.overlay.scrollStrategies.noop(), */
      // size of dialog box
      height: '300px',
      width: '400px'
    })
  }
}
