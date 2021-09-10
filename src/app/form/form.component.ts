import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
  paises=[
    {value:1, name:"Mexico"},
    {value:2, name:"USA"},
    {value:3, name:"CANADA"}
  ];
  paises_MX=[
    {value:1, name:"CDMX"},
    {value:2, name:"Edo. de México"},
    {value:3, name:"Guadalajara"},
    {value:4, name:"Monterrey"}
  ];
  paises_US=[
    {value:1, name:"Houston"},
    {value:2, name:"Chicago"},
    {value:3, name:"California"},
    {value:4, name:"Denver"}
  ];
  paises_CN=[
    {value:1, name:"Toronto"},
    {value:2, name:"Montreal"},
    {value:3, name:"Vancouver"},
    {value:4, name:"Calgary"}
  ];
  
  total=[this.paises_MX,this.paises_US,this.paises_CN];

  model={
    nombre:"",
    edad:"",
    genero:"",
    pais:"",
    ciudad:""

  }
  
  constructor() { }
  
  ngOnInit(): void {
  }
  // btn_activo():boolean{
  //   return true;
  // }

  btn_activo=false;
  onClick(){
    if(this.model.nombre && this.model.edad && this.model.genero && this.model.pais){
      
      alert("Nombre: "+this.model.nombre+" Edad: "+this.model.edad+" Genero: "+this.model.genero+ " Pais: "+this.model.pais );
    }else{
      alert("Ingresa los datos necesarios!!")
    }
      
    }
  }


