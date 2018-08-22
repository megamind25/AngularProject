import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Feedback} from '../feedback';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback={
    
    customer_name:"",
    rating:0,
    review:""
  }
  feed:Array<Feedback>
  feedback_flag: string;
  constructor(private _dataService: DataService,private router: Router) {
    this._dataService.getFeedback()
    .subscribe(res => this.feed = res);
    this._dataService.flag='b';
    this.feedback_flag=_dataService.flag
   }

  ngOnInit() {
    document.getElementById("quote1").style.display="none";
    document.getElementById("ord").style.display="none";
   
  }
  addFeedback(feedback) {
    alert("Thanks for your valuable feedback :-)");
    this._dataService.addFeedback(feedback).subscribe();
    document.getElementById("fb").style.display="none";
  }
 nothanks()
 {
  
  this.router.navigateByUrl('/');
 }

}
