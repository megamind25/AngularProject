// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import {Owner} from '../owner';
// import {Restaurant} from '../restaurant'
// import {User} from '../user'

// @Component({
//   selector: 'app-disp',
//   templateUrl: './disp.component.html',
//   styleUrls: ['./disp.component.scss']
// })

// export class DispComponent implements OnInit {

//   private display=[];
 
//   public getdisplay() {
//     this._dataService.displayMenu().subscribe(res => {this.display = res;
//       var i=0;
//       var j=0;
//       var k=0;
//       var m=0;
//       for(let rest of this.display)
//     { 
  
//       if(rest.restaurant_name=="zapata")
//      {
//       this.x=rest.restaurant_name;
//       this.y[i]=rest.item_name+"for"+rest.price+"\n";
//       i++;
     
//       }
//       if(rest.restaurant_name=="Renuka")
//       {
//         this.x1=rest.restaurant_name;
//         this.y1[j]+=rest.item_name+"for"+rest.price;
//         j++;
//       }
//       if(rest.restaurant_name=="Glow energy")
//       {
//         this.x2=rest.restaurant_name;
//       this.y2[k]+=rest.item_name+"for"+rest.price;
//       k++;
//       }
//       if(rest.restaurant_name=="Southern")
//       {
//         this.x3=rest.restaurant_name;
//       this.y3[m]+=rest.item_name+"for"+rest.price;
//       m++;
//       }
     
    
//     }
    
    
  
  
//   });


//   }
//   // public getdisplay() {
//   //   var i=0;
//   //   this._dataService.displayMenu().subscribe(res => {this.display = res;
//   //     for(let rest of this.display)
//   //   { 
     
      
//   // console.log(rest.restaurant_name);
//   //      this.x+=rest.item_name+ ' for '+ rest.price;
//   //      this.tiles[i]= {text: this.x, cols: 2, rows: 2, color: 'lightblue'}
//   //      i++;
      
    
    
//   //   }
    
    
  
  
//   // });


//   // }
// x="";
// y=[];
// x1="";
// y1=[];
// x2="";
// y2=[];
// x3="";
// y3=[];

//   constructor(private _dataService: DataService) {
    

//     // Access the Data Service's getUsers() method we defined
   
     
        
  
//   }
 
 

//   ngOnInit() {
//     document.getElementById("quote1").style.display="none";
//     this.getdisplay();  
    

// }
// }

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Owner } from '../owner';
import { Restaurant } from '../restaurant'
import { User } from '../user'

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.scss']
})

export class DispComponent implements OnInit {

  private display = [];
  private resto = [];
  restaurantNames: Array<string>;

  public getdisplay() {
    this._dataService.displayMenu().subscribe(res => {
      this.display = res;
      var i = 0;
      var j = 0;
      var k = 0;
      var m = 0;
      var a=0;
      var b=0;

      // for(let i of res)
      // {
      //   for(let s of this.restaurantNames)
      //   {
      //     if(s == i.restaurant_name)
      //     {
      //       break;
      //     }
      //     else
      //     {
      //       s = i.restaurant_name;
      //     }
      //   }
      // }

      // this.resto = Array.from(new Set(res.restaurant_name));
      // console.log(this.resto);
      

      for (let rest of this.display) {

        if (rest.restaurant_name == "Zapata") {
          this.x = rest.restaurant_name;
          this.y[i] = rest.item_name + " for ₹" + rest.price + "\n";
          i++;

        }
        if (rest.restaurant_name == "Renuka") {
          this.x1 = rest.restaurant_name;
          this.y1[j] = rest.item_name + " for ₹" + rest.price;
          j++;
        }
        if (rest.restaurant_name == "Glow") {
          this.x2 = rest.restaurant_name;
          this.y2[k] = rest.item_name + " for ₹" + rest.price;
          k++;
        }
        if (rest.restaurant_name == "Southern Express") {
          this.x3 = rest.restaurant_name;
          this.y3[m] = rest.item_name + " for ₹" + rest.price;
          m++;
        }
        if (rest.restaurant_name == "Zaika") {
          this.x4 = rest.restaurant_name;
          this.y4[a] = rest.item_name + " for ₹" + rest.price;
          a++;
        }
        if (rest.restaurant_name == "Galaxy") {
          this.x5 = rest.restaurant_name;
          this.y5[b] = rest.item_name + " for ₹" + rest.price;
          b++;
        }


      }

    });


  }
  // public getdisplay() {
  //   var i=0;
  //   this._dataService.displayMenu().subscribe(res => {this.display = res;
  //     for(let rest of this.display)
  //   { 


  // console.log(rest.restaurant_name);
  //      this.x+=rest.item_name+ ' for '+ rest.price;
  //      this.tiles[i]= {text: this.x, cols: 2, rows: 2, color: 'lightblue'}
  //      i++;



  //   }




  // });


  // }
  x = "";
  y = [];
  x1 = "";
  y1 = [];
  x2 = "";
  y2 = [];
  x3 = "";
  y3 = [];
  x4 = "";
  y4 = [];
  x5 = "";
  y5 = [];

  constructor(private _dataService: DataService) {


    // Access the Data Service's getUsers() method we defined




  }



  ngOnInit() {
    document.getElementById("quote1").style.display = "none";
    this.getdisplay();


  }
}
