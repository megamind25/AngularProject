// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import {Owner} from '../owner';
// import {Restaurant} from '../restaurant'
// import {User} from '../user'

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.scss']
// })


// export class SearchComponent implements OnInit {
//   search: Array<Restaurant>
//   item1: Restaurant = {
//     item_name : "",
//     cuisine: "",
//     offers: "",
//     price: 0,
//     tags: "",
//     restaurant_name:""
//   }
//   search_string:any=this._dataService.current_search_element
//   constructor(private _dataService: DataService) {
  
   
//    }

//   //  getResults(item1){
//   //   this._dataService.getResults(item1)
//   //   .subscribe(res => this.search = res);
//   //  }
//   ngOnInit() {
//     console.log("in search",this._dataService.current_search_element.item_name)
//     this._dataService.getResults(this._dataService.current_search_element)
//      .subscribe(res => this.search = res);
//         // this._dataService.getResults(item1)
//     // .subscribe(res => {
//     //   document.getElementById("quote1").style.display="none";
//     //   this.search = res});
//   }

// }




import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Owner} from '../owner';
import {Restaurant} from '../restaurant'
import {User} from '../user'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  search: Array<Restaurant>
  item1: Restaurant = {
    item_name : "",
    cuisine: "",
    offers: "",
    price: 0,
    tags: "",
    restaurant_name:""
  }
  search_string:any=this._dataService.current_search_element
  constructor(private _dataService: DataService) {
  
   
   }

  //  getResults(item1){
  //   this._dataService.getResults(item1)
  //   .subscribe(res => this.search = res);
  //  }
  ngOnInit() {
    document.getElementById("quote1").style.display="none";
    console.log("in search",this._dataService.current_search_element.item_name)
    this._dataService.getResults(this._dataService.current_search_element)
     .subscribe(res => this.search = res);
        // this._dataService.getResults(item1)
    // .subscribe(res => {
    //   document.getElementById("quote1").style.display="none";
    //   this.search = res});
  }

}
