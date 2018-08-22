import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
//import { User } from 'src/app/user';
import { Restaurant } from './restaurant';
import { Owner } from './owner';
import { Feedback } from './feedback';
import { Observable } from '../../node_modules/rxjs';
import { Orders } from './orders';


@Injectable()
export class DataService {

  result:Observable<JSON>;
  flag:string='a';
  current_rest:string;
  current_search_element: any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/users")
      .pipe(map(result => this.result = result.json().data));
  }

  getFeedback() {
    return this._http.get("/api/getfeed")
      .pipe(map(result => this.result = result.json().data));
  }
  add(item: Restaurant){
    return this._http.post("/api/addItem",item)
  }

  update(item:Restaurant){
    return this._http.put("/api/updateItem",item)
    .pipe(map(result => this.result = result.json().data));
  }

login(owner: Owner){
    return this._http.get("/api/login"+"?uname="+owner.username+"&pwd="+owner.password)
    .pipe(map(result => this.result = result.json().data));
    
}
register(owner:Owner){
  return this._http.post("/api/register",owner)
}
addFeedback(feedback:Feedback){
    return this._http.post("/api/addFeedback",feedback)
}

displayMenu(){
  return this._http.get("/api/display")
      .pipe(map(result => this.result = result.json().data));

}

// getResults(item1: Restaurant){
//   return this._http.get("/api/search"+"?searchtag="+item1.item_name)
//     .pipe(map(result => this.result = result.json().data));

// }
getResults(item1: Restaurant){
  return this._http.get("/api/search"+"?searchtag="+item1.item_name)
    .pipe(map(result => this.result = result.json().data));

}

searchResults(item1: Restaurant){
  return this._http.get("/api/search"+":item_name="+item1.item_name)
    .pipe(map(result => this.result = result.json().data));

}
 
// getRest()
//   {
//     return this._http.get("/api/getRestNames").pipe(ma1p(result => this.result = result.json().data));
//   }

//   getItems(rest_name:string)
//   {
//     return this._http.get("/api/getItems"+"?enquired="+rest_name).pipe(map(result => this.result = result.json().data));
//   }
//   placeOrder(orders:Orders)
//   {
//     return this._http.post("/api/placeOrder", orders)
//   }

getRest()
  {
    return this._http.get("/api/getRestNames").pipe(map(result => this.result = result.json().data));
  }

  getItems(rest_name:string)
  {
    return this._http.get("/api/getItems"+"?enquired="+rest_name).pipe(map(result => this.result = result.json().data));
  }

  getOrders(rest_name:string)
  {
    return this._http.get("/api/getOrders"+"?enquired="+rest_name).pipe(map(result => this.result =result.json().data));
  }

placeOrder(orders:Orders)
  {
    return this._http.post("/api/placeOrder", orders)
  }


}