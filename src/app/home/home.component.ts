import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [ HousingLocationComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
housingLocationList: HousingLocation[] = [];
housingService: HousingService = inject(HousingService);

constructor(){
  //setting housingLocationList to the data array in HousingService
    this.housingLocationList = this.housingService.getAllHousingLocations();
}
}


