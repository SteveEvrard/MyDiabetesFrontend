import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentOneComponent } from "./component-one/component-one.component";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatRadioModule } from "@angular/material/radio";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "../app/store";
import { ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule, MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { EffectsModule } from "@ngrx/effects";
import { TrialDataEffect } from "./store/effect/trial.effect";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ResultsComponent } from "./results/results.component";
import { TrialDetailComponent } from "./results/trial-detail/trial-detail.component";
import { LoaderComponent } from "./loader/loader.component";
import { LoaderInterceptorService } from "./services/loader-interceptor.service";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MatChipsModule } from "@angular/material/chips";
import { PrimaryConditionComponent } from "./component-one/primary-condition/primary-condition.component";
import { LocationComponent } from "./component-one/location/location.component";
import { AgeComponent } from "./component-one/age/age.component";
import { GenderComponent } from "./component-one/gender/gender.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HomeComponent } from "./home/home.component";
import { MatDialogModule } from "@angular/material/dialog";
import { EmailComponent } from "./results/trial-detail/email/email.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FaqComponent } from "./faq/faq.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TermsDialogComponent } from './home/terms-dialog/terms-dialog.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ResultsComponent,
    TrialDetailComponent,
    LoaderComponent,
    LandingPageComponent,
    PrimaryConditionComponent,
    LocationComponent,
    AgeComponent,
    GenderComponent,
    HomeComponent,
    EmailComponent,
    FaqComponent,
    AboutUsComponent,
    ContactUsComponent,
    TermsDialogComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatSliderModule,
    EffectsModule.forRoot([TrialDataEffect]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    NgbModule,
  ],
  providers: [
    MatDatepickerModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
