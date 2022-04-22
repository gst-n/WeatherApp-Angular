import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  


  constructor(private http:HttpClient ) { }


  getWeatherData(currentCity:string):Observable<string>{
    return this.http.get<any>(`https://weatherdbi.herokuapp.com/data/weather/${currentCity}`);
  };
  

  ngOninit(){
  }
  
}
