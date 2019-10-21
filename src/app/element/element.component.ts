import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../service.service';
import { switchMap} from'rxjs/operators';
import { Subscription, timer } from'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  data:any;
  datasave:any;
  model: any;
  subscription: Subscription;
  selectedName: any;
  posturl: any;
  constructor(private servicess:ServiceService) { }

  ngOnInit() {
    this.ger();
  }
  edit(id){
    console.log(id)
   this.model=id;
   this.servicess.postdata(id).subscribe(res=>this.ger())
  }
  ger(){
    this.subscription=timer(0,10000).pipe(
      switchMap(()=>this.servicess.geturl())
      ).subscribe(res=>{console.log(res)
    this.datasave=res['hits']
     });
    }
  }