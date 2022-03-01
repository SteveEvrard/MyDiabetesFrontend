import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ResultsService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  url: string = `https://api.findmytreatments.com/userRequest/`;
  // url: string = 'http://localhost:8080/userRequest/'
  // url: string = 'http://localhost:3000/trials';
  headers = new HttpHeaders({ "Content-Type": "application/json" });
  results: any;
  trialIds: string[] = [];

  getTrialResultsByCondition(condition: string) {
    let payload = JSON.stringify({ condition: condition });
    this.http
      .post(this.url + "condition", payload, { headers: this.headers })
      .subscribe((response) => (this.results = response));
  }

  getTrialResultsByAge(age: string) {
    console.log("BY AGE", this.results.count);
    let trialIds: string[] = [];

    this.results.nctIds.forEach((id) => {
      trialIds.push(id);
    });
    let payload = JSON.stringify({ age: age, nctIds: trialIds });
    this.http
      .post(this.url + "age", payload, { headers: this.headers })
      .subscribe((results) => (this.results = results));
    return this.http.post(this.url + "age", payload, { headers: this.headers });
  }

  getTrialResultsByGender(gender: string) {
    let trialIds: string[] = [];

    this.results.nctIds.forEach((id) => {
      trialIds.push(id);
    });
    let payload = JSON.stringify({ sex: gender, nctIds: trialIds });
    this.http
      .post(this.url + "sex", payload, { headers: this.headers })
      .subscribe((response) => (this.results = response));
    return this.http.post(this.url + "sex", payload, { headers: this.headers });
  }

  getTrialResultsByLocation(
    state: string,
    travelImportance: string,
    zipCode: string
  ) {
    let trialIds: string[] = [];

    this.results.nctIds.forEach((id) => {
      trialIds.push(id);
    });
    let payload = JSON.stringify({
      zip: zipCode,
      state: state,
      importanceDist: travelImportance,
      nctIds: trialIds,
    });
    this.http
      .post(this.url + "state", payload, { headers: this.headers })
      .subscribe((response) => {
        this.results = response;
        this.router.navigate(["/results"], { relativeTo: this.route });
      });
    return this.http.post(this.url + "state", payload, {
      headers: this.headers,
    });
  }

  loadTrialResults() {
    // return this.createMockData();
    return this.results;
  }

  createMockData(): any[] {
    this.results = [];
    this.results.push({
      nctId: "NCT04342625",
      title:
        "Effects of Cinnamon Spice on Glucose, Insulin, GI Hormone and Microbiome in Obese Individuals With Pre-Diabetes",
      facilities: [
        {
          id: 36677292,
          status: "Recruiting",
          name: "UCLA",
          city: "Los Angeles",
          state: "California",
          zip: "90095",
          country: "United States",
        },
        {
          id: 36686565,
          status: "Recruiting",
          name: "Novo Nordisk Investigational Site",
          city: "Buena Park",
          state: "California",
          zip: "90620",
          country: "United States",
        },
        {
          id: 36686566,
          status: "Recruiting",
          name: "Novo Nordisk Investigational Site",
          city: "Fresno",
          state: "California",
          zip: "93720",
          country: "United States",
        },
      ],
      sponsors: [
        {
          id: 5450832,
          agencyClass: "Other",
          leadOrCollaborator: "lead",
          name: "University of California, Los Angeles",
        },
      ],
      summaries: [
        {
          id: 3410290,
          description:
            "\n      This study aims to determine whether the effectiveness of cinnamon spice capsules vs. placebo\n      capsules on glucose tolerance in prediabetic subjects who are overweight or obese.\n    ",
        },
      ],
      startDate: "2020-05-01 00:00:00.0",
      endDate: "2021-02-01 00:00:00.0",
      criteria:
        "\n        Inclusion Criteria:\n\n          -  Healthy human adults age >=20 years' old\n\n          -  Typically consume low fiber/polyphenol diet (beige diet see below)\n\n          -  Overweight/obese individuals with a BMI of 25 to 40 kg/m2 and HbA1c >=5.6% and <=\n             6.5%.\n\n          -  Subjects must read and sign the Institutional Review Board-approved written informed\n             consent prior to the initiation of any study specific procedures or enrollment. A\n             subject will be excluded for any condition that might compromise the ability to give\n             truly informed consent.\n\n        Exclusion Criteria:\n\n          -  Any subjects with cinnamon intolerance\n\n          -  Any subject with a screening laboratory value outside of the laboratory normal range\n             that is considered clinically significant for study participation by the investigator.\n\n          -  Any subject currently taking blood thinning medications such as Warfarin or Coumadin\n\n          -  Any history of gastrointestinal disease or surgery except for appendectomy or\n             cholecystectomy.\n\n          -  Eating a high fiber/polyphenol diet or taking any medication or dietary supplement,\n             which interfere with the absorption of polyphenols.\n\n          -  History of gastrointestinal surgery, diabetes mellitus on medications, or other\n             serious medical condition, such as chronic hepatic or renal disease, bleeding\n             disorder, congestive heart disease, chronic diarrhea disorders, myocardial infarction,\n             coronary artery bypass graft, angioplasty within 6 months prior to screening, current\n             diagnosis of uncontrolled hypertension (defined as systolic BP >160mmHg, diastolic BP\n             >95mmHg), active or chronic gastrointestinal disorders, bulimia, anorexia, laxative\n             abuse, or endocrine diseases (except thyroid disease requiring medication) as\n             indicated by medical history.\n\n          -  Pregnant or breastfeeding\n\n          -  Currently uses tobacco products.\n\n          -  Currently has an alcohol intake >= 20 g ⁄ day;\n\n          -  Currently has a coffee intake >= 3 cups ⁄ day;\n\n          -  Allergy or sensitivity to cinnamon. Subjects will be excluded if there is a prior\n             history of such sensitivity. Since these foods are commonly eaten and allergies are\n             rare, subjects should be aware of this sensitivity prior to entering the study. To\n             determine this, a positive history of cinnamon ingestion without incident will be\n             requested. In addition, any subject with a history of allergy or anaphylaxis of any\n             kind will be excluded\n\n          -  Is unable or unwilling to comply with the study protocol.\n      ",
      contacts: [
        {
          id: 1629102,
          contactType: "primary",
          name: "Gail Thames",
          phone: "310-825-0453",
          email: "gthames@mednet.ucla.edu",
        },
        {
          id: 1629103,
          contactType: "backup",
          name: "Dina Ben-Nissan",
          phone: "310-206-2582",
          email: "Dbennissan@mednet.ucla.edu",
        },
      ],
    });
    this.results.push({
      nctId: "NCT04342624",
      title:
        "Effects of Cinnamon Spice on Glucose, Insulin, GI Hormone and Microbiome in Obese Individuals With Pre-Diabetes",
      facilities: [
        {
          id: 36677292,
          status: "Recruiting",
          name: "UCLA",
          city: "Los Angeles",
          state: "California",
          zip: "90095",
          country: "United States",
        },
      ],
      sponsors: [
        {
          id: 5450832,
          agencyClass: "Other",
          leadOrCollaborator: "lead",
          name: "University of California, Los Angeles",
        },
      ],
      summaries: [
        {
          id: 3410290,
          description:
            "\n      This study aims to determine whether the effectiveness of cinnamon spice capsules vs. placebo\n      capsules on glucose tolerance in prediabetic subjects who are overweight or obese.\n    ",
        },
      ],
      startDate: "2020-05-01 00:00:00.0",
      endDate: "2021-02-01 00:00:00.0",
      criteria:
        "\n        Inclusion Criteria:\n\n          -  Healthy human adults age >=20 years' old\n\n          -  Typically consume low fiber/polyphenol diet (beige diet see below)\n\n          -  Overweight/obese individuals with a BMI of 25 to 40 kg/m2 and HbA1c >=5.6% and <=\n             6.5%.\n\n          -  Subjects must read and sign the Institutional Review Board-approved written informed\n             consent prior to the initiation of any study specific procedures or enrollment. A\n             subject will be excluded for any condition that might compromise the ability to give\n             truly informed consent.\n\n        Exclusion Criteria:\n\n          -  Any subjects with cinnamon intolerance\n\n          -  Any subject with a screening laboratory value outside of the laboratory normal range\n             that is considered clinically significant for study participation by the investigator.\n\n          -  Any subject currently taking blood thinning medications such as Warfarin or Coumadin\n\n          -  Any history of gastrointestinal disease or surgery except for appendectomy or\n             cholecystectomy.\n\n          -  Eating a high fiber/polyphenol diet or taking any medication or dietary supplement,\n             which interfere with the absorption of polyphenols.\n\n          -  History of gastrointestinal surgery, diabetes mellitus on medications, or other\n             serious medical condition, such as chronic hepatic or renal disease, bleeding\n             disorder, congestive heart disease, chronic diarrhea disorders, myocardial infarction,\n             coronary artery bypass graft, angioplasty within 6 months prior to screening, current\n             diagnosis of uncontrolled hypertension (defined as systolic BP >160mmHg, diastolic BP\n             >95mmHg), active or chronic gastrointestinal disorders, bulimia, anorexia, laxative\n             abuse, or endocrine diseases (except thyroid disease requiring medication) as\n             indicated by medical history.\n\n          -  Pregnant or breastfeeding\n\n          -  Currently uses tobacco products.\n\n          -  Currently has an alcohol intake >= 20 g ⁄ day;\n\n          -  Currently has a coffee intake >= 3 cups ⁄ day;\n\n          -  Allergy or sensitivity to cinnamon. Subjects will be excluded if there is a prior\n             history of such sensitivity. Since these foods are commonly eaten and allergies are\n             rare, subjects should be aware of this sensitivity prior to entering the study. To\n             determine this, a positive history of cinnamon ingestion without incident will be\n             requested. In addition, any subject with a history of allergy or anaphylaxis of any\n             kind will be excluded\n\n          -  Is unable or unwilling to comply with the study protocol.\n      ",
      contacts: [
        {
          id: 1629102,
          contactType: "primary",
          name: "Gail Thames",
          phone: "310-825-0453",
          email: "gthames@mednet.ucla.edu",
        },
        {
          id: 1629103,
          contactType: "backup",
          name: "Dina Ben-Nissan",
          phone: "310-206-2582",
          email: "Dbennissan@mednet.ucla.edu",
        },
      ],
    });

    return this.results;
  }
}
