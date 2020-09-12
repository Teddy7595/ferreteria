import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
  ]
})
export class ProgressComponent implements OnInit 
{

  progress1:number;
  progress2:number;
  constructor() 
  { 
    this.progress1 = 20;
    this.progress2 = 30;
  }

  ngOnInit(): void {
  }

  log1(event:number)
  {
    this.progress1 = event;
    console.log(event);
    
  }
  log2(event:number)
  {
    this.progress2 = event;
    console.log(event);
    
  }
}
