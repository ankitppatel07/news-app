import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HomeService } from 'src/app/services/home/home.service'

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  weatherObject = {
    temp: 0,
    location: '',
    country: '',
    description: '',
    windSpeed: 0
  };
  lat : Number;
  long : Number;
  sunriseTime: string;
  sunsetTime: string;
  sunriseDate: Date;
  sunsetDate: Date;
  currDate : Date;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude
        this.long = position.coords.longitude
        //console.log("Latitude: ", this.lat, "Longitude: ", this.long)

        this.homeService.getWeatherData(this.lat, this.long).subscribe(
          (data) => {
            this.weatherObject.temp = Math.round((data.main.temp-273.15)*10)/10;
            this.weatherObject.location = data.name;
            this.weatherObject.country = data.sys.country;
            this.weatherObject.description = data.weather[0].description;
            this.weatherObject.windSpeed = data.wind.speed;
            this.setTime(data.sys.sunrise, data.sys.sunset) //UNIX Timestamp
          },
          (err) => {
            console.log("Error fetching weather data!!!")
          }
        )
      })
      
    }
    
  }
  //convert UNIX Timestamp
  setTime(sunrise, sunset) {
    this.sunriseDate = new Date(sunrise * 1000)
    this.sunriseTime = this.sunriseDate.getHours() + ":" + ("0" + this.sunriseDate.getMinutes()).substr(-2)
    
    this.sunsetDate = new Date(sunset * 1000)
    this.sunsetTime = this.sunsetDate.getHours() + ":" + ("0" + this.sunsetDate.getMinutes()).substr(-2)

    this.currDate = new Date()
    // console.log("Sunrise Date: ", this.sunriseDate)
    // console.log("Sunset Date: ", this.sunsetDate)
  }





}
