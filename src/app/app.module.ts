import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { WeatherService } from './services/weather.service';
import { CurrentWeatherCardComponent } from './components/current-weather-card/current-weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    CurrentWeatherCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
