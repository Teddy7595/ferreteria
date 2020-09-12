import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: [
  ]
})
export class IncrementatorComponent implements OnInit {

  @Input() leyenda:string;
  @Input() progress:number;

  @ViewChild('txtNumber') input:ElementRef;

  @Output() valueNumber:EventEmitter<number>;

  constructor() 
  { 
    this.progress = 50;
    this.leyenda = 'BARRA DE PROGRESO';
    this.valueNumber  = new EventEmitter();
    
  }

  ngOnInit(): void {
  }

  cambiarValor(value:number)
  {

    this.progress = this.progress + value;
    
    if (this.progress > 100 ) 
    {
      this.progress = 100;

    } else if(this.progress < 0)
    {
      this.progress = 0;
    }

    this.valueNumber.emit(this.progress);
    this.input.nativeElement.focus();
    
  }

  onChanges(newValue:number)
  {

    //let elemHtml:any = document.getElementsByName('progressInput')[0];
    //console.log(newValue);

    if (newValue >= 100) 
    {
      this.progress = 100;

    } else if (newValue <= 0)
    {
      this.progress = 0;
    } else
    {
      this.progress = newValue;
    }
    
    //elemHtml.value = this.progress;
    this.input.nativeElement.value = this.progress;

    this.valueNumber.emit(this.progress);
  }

}
