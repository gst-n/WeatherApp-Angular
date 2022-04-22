import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  
  currentCity:any = [];
  load:boolean = false;

  

  constructor(private weatherData:WeatherService) {
  }
  
  ngOnInit():void {
  }
  
  onSubmit(city:HTMLInputElement){
    
    this.currentCity = city.value;
    
    this.weatherData.getWeatherData(this.currentCity).subscribe(data => {
      this.currentCity = data
      this.load = true;
      city.value = ""
    })

    return false
  }

}
