import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Owner} from './owner';
import {Restaurant} from './restaurant'
import {User} from './user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean';
  search: Array<Restaurant>
  item1: Restaurant = {
    item_name : "",
    cuisine: "",
    offers: "",
    price: 0,
    tags: "",
    restaurant_name:""
  }
  constructor(private _dataService: DataService, private router: Router) {
  
   
   }

   getResults(item1){
    this._dataService.getResults(item1)
    .subscribe(res => {
      document.getElementById("quote1").style.display="none";
      this.search = res}
    );
   }
  //  search1(item1)
  //  {
  //   console.log("in searchs")
  //   this._dataService.current_search_element=this.item1;
  //   this.router.navigateByUrl('/search');
    

  //  }

  // searchResults(item1){
  //   alert("working");
  //   this._dataService.current_search_element=item1;
  //   console.log("in app",this._dataService.current_search_element.item_name);
  //   this.router.navigate(['app-search', item1]); 
  //   // this._dataService.getResults(item1)
  //   // .subscribe(res => {
  //   //   document.getElementById("quote1").style.display="none";
  //   //   this.search = res});
  // }
  searchResults(item1){
    this._dataService.current_search_element=item1;
    console.log("in app",this._dataService.current_search_element.item_name);
    //this.router.navigate(['app-search', item1]); 
    this.router.navigate(['app-search']); 
    // this._dataService.getResults(item1)
    // .subscribe(res => {
    //   document.getElementById("quote1").style.display="none";
    //   this.search = res});
  }

  ngOnInit() {
  }
  logout()
  {
    
    localStorage.removeItem("loginstatus");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
   
    document.getElementById("fb").style.display="none";
    document.getElementById("abt").style.display="none";
    document.getElementById("contactandmap").style.display="none";
    document.getElementById("rb").style.display="none";
    document.getElementById("loggg").style.display="none";
    document.getElementById("mappi").style.display="none";
    document.getElementById("mi").style.display="none";
    document.getElementById("ord").style.display="none";
    document.getElementById("reggg").style.display="none";
    document.getElementById("sea").style.display="none";

    this.router.navigateByUrl('/');
    alert("logged out,thanks for using our website");
  }
  lg(){
    this.router.navigate(['app-logout']); 

}
}
