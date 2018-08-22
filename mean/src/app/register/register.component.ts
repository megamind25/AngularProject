import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Owner} from '../owner';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  owner: Owner={
    
    name:"",
    type:"",
    username:"",
    password:""
  }
  constructor(private _dataService: DataService,private router: Router) { }

  ngOnInit() {
    document.getElementById("quote1").style.display="none";
    
  }
  register(owner) {
    this._dataService.register(owner).subscribe();
    alert("Registration Successful")
    this.router.navigateByUrl('/app-login')

  }

}
