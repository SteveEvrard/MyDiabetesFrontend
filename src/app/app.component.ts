import { Component, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  my: string;
  title: string;
  displayDivRight: boolean;
  displayDivMid: boolean;
  displayDivLeft: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.my = "My ";
    this.title = "Diabetes Research";
  }

  ngOnInit() {
    this.router.navigate([""]);
  }

  routeToHome() {
    this.router.navigate(["../home"], { relativeTo: this.route });
  }

  routeToFaq() {
    this.router.navigate(["../faq"], { relativeTo: this.route });
  }

  routeToAboutUs() {
    this.router.navigate(["../about"], { relativeTo: this.route });
  }

  routeToContactUs() {
    this.router.navigate(["../contact"], { relativeTo: this.route });
  }
}
