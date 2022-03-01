import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  url: string = `https://api.findmytreatments.com/userRequest/`;
  // url: string = "http://localhost:8080/userRequest/";
  // url: string = 'http://localhost:3000/trials';
  headers = new HttpHeaders({ "Content-Type": "application/json" });

  submitEmail(data) {
    let payload = JSON.stringify({
      nctId: data.nctId,
      name: data.firstName + " " + data.lastName,
      email: data.email,
      phoneNumber: data.phone,
      referredBy: data.referredBy,
      body: data.body,
      zipCode: data.zipCode,
      facilityIds: data.facilityIds,
    });
    console.log("PAYLOAD", payload);
    return this.http.post(this.url + "email", payload, {
      headers: this.headers,
    });
  }

  saveEmail(email) {
    let payload = JSON.stringify({
      email: email
    })
    console.log("PAYLOAD", payload);
    return this.http.post(this.url + "userEmail", payload, {
      headers: this.headers,
    });
  }
}
