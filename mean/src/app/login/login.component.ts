// import { Component, OnInit } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';
// import {User} from '../user';
// import { Owner } from '../owner';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   owner: Owner={
//     username:"",
//     password:"",
//     name:"",
//     type:""
   
//   }
//   // register(owner) {
//   //   //alert("reg success");
//   //   this._dataService.register(owner).subscribe();
//   // }
//   current_restaurant: any;
//   feedback_flag: string;
  
//   constructor(private _dataService: DataService,private router: Router) { }

//   ngOnInit() {
//     document.getElementById("quote1").style.display="none";
//     document.getElementById("reggg").style.display="none";
//     //this.register(this.owner);
//   }
//   login(owner) {alert("asdasd");
//     if(localStorage.getItem("loginstatus")!="true")
//     {alert(localStorage.getItem("loginstatus"));
//     this._dataService.login(owner).subscribe(res =>{this.current_restaurant = res
//     for(let rest of this.current_restaurant)
//      { console.log(rest.name);
//       alert(rest.name)
//       this._dataService.current_rest=rest.name;
//      }
//      alert(this._dataService.current_rest);
//     //console.log("a");
//     ///////////loginsuccess/////
//      localStorage.setItem("loginstatus","true");
//      localStorage.setItem("username",owner.username);
//      localStorage.setItem("password",owner.password);

//     ////////////////
//     console.log("bfore router")
//     this.router.navigateByUrl('/app-menuitems');
//     console.log("after router")});
    
//     //this.current_restaurant.name='b';
    
//     // alert(this.current_restaurant.name.toString())
//     // //alert(this.current_restaurant[0]["name"])
//     // alert(typeof this.current_restaurant.name)
//     // alert(typeof Owner)
//     // alert(typeof this.current_restaurant)
//     // alert(typeof this.current_restaurant)
    
 
//     }
//     else
//     {
//       alert("already login");
//     }
//   }


// }
/////start/////////////////////


import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {User} from '../user';
import { Owner } from '../owner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  owner: Owner={
    username:"",
    password:"",
    name:"",
    type:""
   
  }
  // register(owner) {
  //   //alert("reg success");
  //   this._dataService.register(owner).subscribe();
  // }
  current_restaurant: any;
  feedback_flag: string;
  
  constructor(private _dataService: DataService,private router: Router) { }

  ngOnInit() {
    document.getElementById("quote1").style.display="none";
    //document.getElementById("reggg").style.display="none";
    console.log("in init");
    //localStorage.removeItem("loginstatus");
    //alert(localStorage.getItem("loginstatus"))
    console.log("in inti");
    //this.register(this.owner);
  }
  login(owner) {//alert("asdasd");

    if(localStorage.getItem("loginstatus")!="true")
    {//alert(localStorage.getItem("loginstatus"));
    console.log("before login function in ts")
    this._dataService.login(owner).subscribe(res =>{this.current_restaurant = res
      console.log("in login function in ts")
    for(let rest of this.current_restaurant)
     { console.log(rest.name);
      //alert(rest.name)
      this._dataService.current_rest=rest.name;
     }
     //alert(this._dataService.current_rest);
    //console.log("a");
    ///////////loginsuccess/////
     localStorage.setItem("loginstatus","true");
     localStorage.setItem("username",owner.username);
     localStorage.setItem("password",owner.password);

    ////////////////
    console.log("bfore router")
    this.router.navigateByUrl('/app-menuitems');
    console.log("after router")});
    console.log("after login function in ts")
    //this.current_restaurant.name='b';
    
    // alert(this.current_restaurant.name.toString())
    // //alert(this.current_restaurant[0]["name"])
    // alert(typeof this.current_restaurant.name)
    // alert(typeof Owner)
    // alert(typeof this.current_restaurant)
    // alert(typeof this.current_restaurant)
    
 
    }
    else
    {
      //alert(localStorage.getItem("loginstatus"))
      alert("Already logged in.. ");
      this.router.navigateByUrl('/app-menuitems');
    }
  }

}
