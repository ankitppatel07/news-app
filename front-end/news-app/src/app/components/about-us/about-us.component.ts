import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  latitude = 40.758896;
  longitude = -73.985130;
  mapType = 'hybrid';
  maxZoom: 15;
  minZoom: 8;
  zoom: 5;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
