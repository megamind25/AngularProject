import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapp',
  templateUrl: './mapp.component.html',
  styleUrls: ['./mapp.component.scss']
})
export class MappComponent implements OnInit {
  title: string = 'My first AGM project';
  lat=18.566608;
  lng=73.772104;

  constructor() { }

  ngOnInit() {
    document.getElementById("cont").style.display="none";
    //contactandmap
  }

}
