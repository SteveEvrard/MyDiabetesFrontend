import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  url: string = `https://api.findmytreatments.com/userRequest/`;
  // url: string = "http://localhost:8080/userRequest/";
  // url: string = 'http://localhost:3000/trials';
  headers = new HttpHeaders({ "Content-Type": "application/json" });

  submitFeedback(stars, review) {
    let payload = JSON.stringify({
      stars: stars,
      review: review
    })
    console.log("PAYLOAD", payload);
    return this.http.post(this.url + "customerRating", payload, {
      headers: this.headers,
    });
  }
}
