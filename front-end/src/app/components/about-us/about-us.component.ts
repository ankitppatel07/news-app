import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { } from '@angular/google-maps'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  options: google.maps.MapOptions = {
    center: {
      lat: 40.758896,
      lng: -73.985130
    },
    zoom: 10
  };

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

}
