import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Owner} from '../owner';
import {Restaurant} from '../restaurant'
import {User} from '../user'


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  display: Array<Restaurant>;
  
  // items:Array<Restaurant>
  // // item = {
  // //   item_name: "test1",
  // //   price:0
  // // }

  // restaurant: Restaurant = {
  //   item_name : "",
  //   cuisine: "",
  //   offers: "",
  //   price: 0,
  //   tags: "",
  //   restaurant_name:""
  // }

  constructor(private _dataService: DataService) {

    // Access the Data Service's getUsers() method we defined
    this._dataService.displayMenu()
        .subscribe(res => this.display = res);

    
  
  }

  ngOnInit() {
    document.getElementById("quote1").style.display="none";
  }

}
