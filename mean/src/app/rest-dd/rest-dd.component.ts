import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-dd',
  templateUrl: './rest-dd.component.html',
  styleUrls: ['./rest-dd.component.scss']
})
export class RestDdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("rb").style.display="none";
  }

}
