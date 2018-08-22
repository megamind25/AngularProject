// ---------main file-----------
// import { Component, OnInit } from '@angular/core';
// import { Orders } from '../orders';
// import { DataService } from '../data.service';
// import { Restaurant } from '../restaurant';
// import { Owner } from '../owner';

// @Component({
//   selector: 'app-orders',
//   templateUrl: './orders.component.html',
//   styleUrls: ['./orders.component.scss']
// })
// export class OrdersComponent implements OnInit {
  

//   str = "Zayka";


//   orders: Orders={
//     itemName : "",
//     quantity : 0,
//     restID : -1,
//     customerName : "",
//     customerNumber : -1,
//     restaurantName:""



//   }
//   options=["Thali","Paratha","Chole Bhature"];
//   optionSelected = "";

//   menuItems : Array<String>
//   restName : Array<String>
//   selectedRestName = ""
//   restname:string
//   current_price:number=20

//   // onRestSelected(restSelected)
//   // {
//   //   console.log("in rest selected")
//   //   // this.selectedRestName = event.selectedRestName;
//   //   // console.log(this.selectedRestName) 
//   //   console.log(restSelected)
//   //   this.selectedRestName =restSelected
//   //   console.log(this.selectedRestName)
//   // }

//   // onOptionSelected(event)
//   // {
//   //   console.log(event);
//   //   var str = event;
//   // }

//   constructor(private _dataService: DataService) 
//   {}
    
//     // this._dataService.getRest().subscribe(res=>{
//     //   this.restName=res
//     //   console.log(this.restName);
//     //   console.log(this.selectedRestName )
//     //   this._dataService.getItems(this.selectedRestName)
//     // .subscribe(res => {
//     //   console.log("in get item of ts");
//     //   console.log(this.selectedRestName);
//     //   this.menuItems = res;
//     // console.log("menu:",this.menuItems)});
//     //   //console.log(this.restname);}
//     // }
//   //)
 
//    //console.log(this.res)
//    //console.log(this.selectedRestName) 
//     // this._dataService.getItems(this.selectedRestName)
//     // .subscribe(res =>{
     
//     //   this.menuItems = res
//     // console.log(this.menuItems)}
//     // );
//     //getitems(this.restname){
//   //     console.log(this.restname);
//   //     this._dataService.getItems(this.restname).subscribe(res=>this.menuItems);
    
     
//   //  }

//   total = 0
//   ngOnInit() 
//   {
//     document.getElementById("rb").style.display="none";

//     // this._dataService.getRest().subscribe(res=>{
//     //   this.restName=res
//     //   console.log(this.restName);
//     //   console.log(this.selectedRestName )
//     //   this._dataService.getItems(this.selectedRestName)
//     // .subscribe(res1 => {
//     //   console.log("in get item of ts");
//     //   console.log(this.selectedRestName);
//     //   this.menuItems = res1;
//     // console.log("menu:",this.menuItems)});
//     //   //console.log(this.restname);}
//     // })
//     this._dataService.getRest().subscribe(res=>{
//        this.restName=res
//       console.log(this.restName);
//   })

 

// }


// orderItem(orders:Orders)
// {
//   alert("Your Order is as follows: \n Restaurant:"+orders.restaurantName+"\n Ordered Items"+orders.itemName+"\n Quantity:"+orders.quantity);
//  console.log(typeof orders.itemName,orders.itemName)
//  console.log(typeof orders.restaurantName, orders.restaurantName)
//  console.log(orders.quantity)
//  console.log(orders)
//   this._dataService.placeOrder(orders).subscribe();
  
//   console.log("in order functrion, curretn prcie is", this.current_price)
//   this.total=orders.quantity* this.current_price;
//   console.log("amo:", this.total)
// }
// getItems(rest_selected){
//   //console.log(rest_selected)
  
//   this._dataService.getItems(rest_selected).subscribe(res=>{
//     this.menuItems=res;
//     console.log(this.menuItems)
    
//   })
// }
// }

// ---------main file---------
import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders';
import { DataService } from '../data.service';
import { Restaurant } from '../restaurant';
import { Owner } from '../owner';
import { NgForOf } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  

  str = "Zayka";


  orders: Orders={
    itemName : "",
    restName : "",
    quantity : 0,
    total:0,
    restID : -1,
    customerName : "",
    customerNumber : -1



  }
  options=["Thali","Paratha","Chole Bhature"];
  

  //Global variables required to store values that are used in queries.
  optionSelected = "";
  selectedItem = ""
  selectedRestName = ""
  currentLoggedRest =   this._dataService.current_rest
  total = 0

  //Arrays to store results from queries.
  menuItems : Array<Restaurant>
  restName : Array<String>
  ordersArray : Array<Orders>
  
  //If needed to convert data to JSON strings.
  toStr = JSON.stringify



  onRestSelected(val:any)
  {
    this.selectedRestName = val;
    console.log(this.selectedRestName)

    this._dataService.getItems(this.selectedRestName)
    .subscribe(res => this.menuItems = res);
  }

  onOptionSelected(event)
  {
    //console.log(event);
    var str = event;
  }

  constructor(private _dataService: DataService,private router: Router) 
  {
    this._dataService.getRest().subscribe(res=>this.restName=res)
    console.log("Here in function")
   }

  
  ngOnInit() 
  {
    
    document.getElementById("rb").style.display="none";
  }

  onItemSelected(val:string)
  {
    this.selectedItem = val;
    console.log(this.selectedItem);

    //To calculate the total cost of the order
    
    for(let i of this.menuItems)
    {
      if(i.item_name == this.selectedItem)
      {
        this.total = i.price;
       
      }
    }
  }

  orderItem(orders:Orders)
  {
    
    
    this.orders.itemName = this.selectedItem;
    this.orders.restName = this.selectedRestName;
    this.orders.total = this.orders.quantity * this.total;
    alert("Your Order is as follows: \n Restaurant:"+orders.restName+"\n Ordered Items:"+orders.itemName+"\n Quantity:"+orders.quantity);
    this._dataService.placeOrder(orders).subscribe();
    this.router.navigateByUrl('/app-feedback')
  }


  showOrders()
  {
    this._dataService.getOrders(this.currentLoggedRest).subscribe(res=>this.ordersArray=res)
    

  }

}
