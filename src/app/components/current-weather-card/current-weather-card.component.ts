import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather-card',
  templateUrl: './current-weather-card.component.html',
  styleUrls: ['./current-weather-card.component.css']
})
export class CurrentWeatherCardComponent implements OnInit {
  
  @Input() currentCity: any = "";

  next_days:boolean = false;

  next_day(){
    this.next_days = true;
  }
  

  constructor() { }

  ngOnInit(): void {

  }

}
