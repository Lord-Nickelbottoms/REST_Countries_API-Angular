import { Component } from '@angular/core';
import { GetCountryServiceService } from 'src/app/services/get-country-service.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  countriesData: any;

  constructor(private _http: GetCountryServiceService){}

  ngOnInit() :void{
    this._http.getCountry().subscribe(response => {
      this.countriesData = response;
      console.log(this.countriesData)
      console.log(this.countriesData[0].name.official)
    })
  }
}
