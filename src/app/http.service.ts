import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiKey: String = '';
  constructor(private http: HttpClient) { }

  getWeather(city: String) {
   // return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + this.apiKey)
  }
}
