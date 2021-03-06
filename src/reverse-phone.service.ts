import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class ReversePhoneService {
  api_key: string = "3906d2ed4c654970839de1c863cdc9d5";

  constructor(public http: HttpClient) {}
  
  getData(phoneNumber: string) {
      return this.http.get("https://proapi.whitepages.com/3.0/phone?phone=" + phoneNumber + "&api_key=" + this.api_key);
    }
}
