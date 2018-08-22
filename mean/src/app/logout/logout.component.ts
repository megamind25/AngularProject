import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("a")
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

    //this.router.navigateByUrl('app-root');
    alert("logged out,thanks for using our website");
  }

}
