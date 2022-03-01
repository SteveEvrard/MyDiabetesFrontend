import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentOneComponent } from "./component-one/component-one.component";
import { ResultsComponent } from "./results/results.component";
import { TrialDetailComponent } from "./results/trial-detail/trial-detail.component";
import { PrimaryConditionComponent } from "./component-one/primary-condition/primary-condition.component";
import { LocationComponent } from "./component-one/location/location.component";
import { AgeComponent } from "./component-one/age/age.component";
import { GenderComponent } from "./component-one/gender/gender.component";
import { AppComponent } from "src/app/app.component";
import { HomeComponent } from "./home/home.component";
import { FaqComponent } from "./faq/faq.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "faq", component: FaqComponent },
  { path: "about", component: AboutUsComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "search/condition", component: ComponentOneComponent },
  { path: "search/location", component: LocationComponent },
  { path: "search/age", component: AgeComponent },
  { path: "search/gender", component: GenderComponent },
  { path: "results", component: ResultsComponent },
  { path: "results/:id", component: TrialDetailComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "error", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
