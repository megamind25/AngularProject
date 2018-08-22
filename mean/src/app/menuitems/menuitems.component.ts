import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { DataService } from '../data.service';
import { User } from '../user';
import { Restaurant } from '../restaurant';
import { Orders } from '../orders';
import { pureFunction1 } from '@angular/core/src/render3/pure_function';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.scss']
})
export class MenuitemsComponent implements OnInit {// Define a users property to hold our user data
  users: Array<User>;
  owner: Owner={
    username:"",
    password:"",
    name:"",
    type:""
   
  }
  
  ordersArray : Array<Orders>
  currentLoggedRest =   this._dataService.current_rest
  
current_restaurant: any;
feedback_flag: string;


  item:Array<Restaurant>
  // item = {
  //   item_name: "test1",
  //   price:0
  // }

  restaurant: Restaurant = {
    item_name : "",
    cuisine: "",
    offers: "",
    price: 0,
    tags: "",
    restaurant_name:""
  }
restaurant_flag:string=this._dataService.current_rest;
  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {

    // Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
        .subscribe(res => this.users = res);


    
  
  }
  
  add(item) {
    alert("Item added successfully");
    console.log(this._dataService.current_rest)
  item.restaurant_name=this._dataService.current_rest;
    this._dataService.add(item).subscribe();
    
  }
update(item){
  this._dataService.update(item).subscribe();
}
  ngOnInit() {

    document.getElementById("quote1").style.display="none";
    document.getElementById("loggg").style.display="none";
  

  
  }
  showOrders()
  {
    this._dataService.getOrders(this.currentLoggedRest).subscribe(res=>this.ordersArray=res)
  }

}
