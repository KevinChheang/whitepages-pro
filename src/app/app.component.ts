import { Component } from '@angular/core';

import { ReversePhoneService } from '../reverse-phone.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: any;
  phoneNumber:string;
  
  constructor(public api: ReversePhoneService) {}
  
  onGetData() {
    this.api.getData(this.phoneNumber)
    .subscribe((res: any) => {
      this.results = res;
      console.log(this.results);
    }
    )
  }
}
