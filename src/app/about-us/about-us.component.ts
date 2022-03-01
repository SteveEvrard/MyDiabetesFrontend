import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  host: {
    class: "component-styling",
  },
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  tiles = [
    { text: "One", cols: 3, rows: 3, color: "lightblue" },
    { text: "Two", cols: 1, rows: 1, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 2, color: "lightpink" },
  ];

  ngOnInit(): void {}
}
