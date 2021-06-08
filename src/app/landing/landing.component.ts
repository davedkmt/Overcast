import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  weather: any;
  searchCity: String = 'Houston';
  temp: number;
  weatherType: any;


  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getWeather(this.searchCity).subscribe(data => {
      this.weather = data;
      console.log(this.weather);
      let dataTemp: any = this.weather.main.temp;
      this.temp = Math.trunc((dataTemp - 273.15) * 9/5 + 32);
      this.weatherType = this.weather.weather[0].description;
      console.log(this.temp)
    });
  }

  searchCityTemp () {
    this.http.getWeather(this.searchCity).subscribe(data => {
      this.weather = data;
      console.log(this.weather);
      let dataTemp: any = this.weather.main.temp;
      this.temp = Math.trunc((dataTemp - 273.15) * 9/5 + 32);
      this.weatherType = this.weather.weather[0].description;
      console.log(this.temp)
    });
  }

}
