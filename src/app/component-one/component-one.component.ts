import { Component, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TrialState, initialTrialState } from '../store/state/trial.state';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})

export class ComponentOneComponent implements OnInit {


  @Output() results: any;

  currentPage: number = 1;
  loading: boolean = false;
  trialData: TrialState = initialTrialState;
  medClinicForm: FormGroup;
  countries: string[] = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"];
  country: string;
  conditions: string[] = ["Type 1 Diabetes", "Type 2 Diabetes", "Prediabetes", "I don't have diabetes, I am a healthy participant"];
  states: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  ratings: any[] = [
    { value: 1, text: "1 - Distance to the trial is not important" },
    { value: 2, text: "2" },
    { value: 3, text: "3 - I can only participate in nearby trials" }
  ];
  trialStartDateOptions: string[] = ['In the next 3 months', 'In the next 6 months', 'Anytime'];
  benefits: string[] = ['Payment for participating or free treatment', 'Better understanding of my condition(s)', 'Better treatment of my condition(s)', 'Cure of my condition(s)', 'Advance medical treatments for future patients'];
  showInitialForm: boolean = true;


  constructor(private cdr: ChangeDetectorRef, private service: ResultsService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private store: Store<any>, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.medClinicForm = this.createMedClinicForm();
  }

  createMedClinicForm(): FormGroup {
    return this.fb.group({
      condition: ['', [Validators.required]],
      comments: ['', []],
      benefits: [[], []],
      age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      sex: [null, [Validators.required]],
      currentHealthCondition: [null, [Validators.required]],
      userCountry: ['', []],
      state: ['', []],
      city: ['', []],
      timeline: ['', []],
      travelDistanceImportance: [0, []]
    })
  }

  createConditionForm(): FormGroup {
    return this.fb.group({
      condition : ['', [Validators.required]]
    })
  }

  searchTrials() {
    // switch(this.currentPage) {

    //   case 1:
    //     this.loading = true;
    //     this.service.getTrialResultsByCondition(this.medClinicForm.get('condition').value);
    //     this.continue();
    //     break;

    //   case 2:
    //     this.loading = true;
    //     this.service.getTrialResultsBySecondaryCondition(this.medClinicForm.get('comments').value);
    //     this.continue();
    //     break;

    //   case 3:
    //     this.loading = true;
    //     this.service.getTrialResultsByBenefits(this.medClinicForm.get('benefits').value);
    //     this.continue();
    //     break;

    //   case 4:
    //     this.loading = true;
    //     this.service.getTrialResultsByAge(this.medClinicForm.get('age').value);
    //     this.continue();
    //     break;

    //   case 5:
    //     this.loading = true;
    //     this.service.getTrialResultsByCurrentHealth(this.medClinicForm.get('currentHealthCondition').value);
    //     this.continue();
    //     break;

    //   case 6:
    //     this.loading = true;
    //     this.service.getTrialResultsByGender(this.medClinicForm.get('sex').value);
    //     this.continue();
    //     break;

    //   case 7:
    //     this.loading = true;
    //     // this.service.getTrialResultsByLocation(this.medClinicForm.get('userCountry').value, this.medClinicForm.get('state').value, this.medClinicForm.get('city').value);
    //     this.continue();
    //     break;

    //   case 8:
    //     this.loading = true;
    //     this.service.getTrialResultsByTimeline(this.medClinicForm.get('timeline').value);
    //     this.continue();
    //     break;

    //   case 9:
    //     this.loading = true;
    //     this.service.getTrialResultsByTravelImportance(this.medClinicForm.get('travelDistanceImportance').value);
    //     this.router.navigate(['../results'], { relativeTo: this.route });
    //     break;
    // }
  }

  submitOld() {
    window.scroll(0, 0);
    // if (this.checkIsFormComplete()) {

      this.loading = true;
      this.cdr.detectChanges();
      const data = {
        condition: this.medClinicForm.get('condition').value,
        comments: this.medClinicForm.get('comments').value,
        benefits: this.medClinicForm.get('benefits').value,
        age: this.medClinicForm.get('age').value,
        sex: this.medClinicForm.get('sex').value,
        currentHealthCondition: this.medClinicForm.get('currentHealthCondition').value,
        userCountry: this.medClinicForm.get('userCountry').value,
        state: this.medClinicForm.get('state').value,
        city: this.medClinicForm.get('city').value,
        timeline: this.medClinicForm.get('timeline').value,
        travelDistanceImportance: this.medClinicForm.get('travelDistanceImportance').value,
      }

      // this.service.getTrialResultsByCondition(data);
      this.continue;
      // this.router.navigate(['../results'], { relativeTo: this.route });

    // }
  }

  checkIsFormComplete(): boolean {
    let isFormComplete =
      this.medClinicForm.get('condition').valid &&
      this.medClinicForm.get('age').valid &&
      this.medClinicForm.get('sex').valid

    return isFormComplete;
  }

  openSnackBar(isComplete: boolean, action: string) {
    console.log('URL', window.location.origin);
    let message = '';
    if (isComplete) {
      message = 'Form submission complete!'
    } else {
      message = 'Please complete all required fields.'
    }
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  continue() {
    this.router.navigate(['../search/condition'], { relativeTo: this.route });
  }

  back() {
    this.currentPage--;
  }
}
