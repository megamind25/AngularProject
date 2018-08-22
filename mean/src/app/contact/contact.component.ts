import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit() {
    document.getElementById("quote1").style.display="none";
  }
  f1()
  {
alert("8888063321");
  }
  

}
