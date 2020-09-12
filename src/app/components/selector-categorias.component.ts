import { Component, OnInit, Input } from '@angular/core';
import { CategoriasModelo } from '../modelos/categorias.model';

@Component({
  selector: 'app-selector-categorias',
  templateUrl: './selector-categorias.component.html',
  styles: [
  ]
})
export class SelectorCategoriasComponent implements OnInit {

  @Input() CategoriasArray:Array<CategoriasModelo>;
  subCategoriasArray:Array<any>;
  auxCategory:Array<string>;

  constructor() { }

  ngOnInit(): void 
  {
    console.log('Categorias del modal', this.CategoriasArray);
    
  }

  filterSubcategory(value:Array<string>)
  {

    this.subCategoriasArray.splice(0, this.subCategoriasArray.length);

    this.CategoriasArray.filter((r)=>
    {
      for (let index = 0; index < value.length; index++) 
      {
        if(r.name === value[index]) return r;
      }

    }).forEach((s)=>
    { 
      s._subCategory.forEach(t=> this.subCategoriasArray.push(t));
      
    });
    
  }

  onSelectCategory()
  {
    
    this.filterSubcategory(this.auxCategory);
    console.log(this.auxCategory);
    
  }

  /*
  onSelectSubCategory()
  {
    this.sbCategory.push(this.forma.value.subCategoria);
    console.log('Selector de subcategorias', this.subCategory);
  }*/
}
