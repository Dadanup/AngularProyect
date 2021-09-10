import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import {Country, City,Model} from '../models/model.interface';
import {DataService} from '../service/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  //propiedad providers -> array de opciones a inyectar
  providers:[DataService]
})
export class FormComponent implements OnInit {
  model={
    nombre:"",
    edad:"",
    genero:"",
    pais:"",
    ciudad:""}

    //implementar en model.interface a model
  public selectedCountry: Country={value:0,name: ''};
  public countries: Country[] = [];
  public cities: City[] = [];
  // public model: Model[] =[];

  constructor(private dataSvc: DataService) { }
  //instancia datasvc, para que muestre los paises y ciudades en consola
  ngOnInit(): void {
    this.countries=this.dataSvc.getCountries();
    this.cities=this.dataSvc.getCities();
    // this.model=this.dataSvc.getModel();
    
 
  }
  btn_activo=false;
  onClick(){
    if(this.model.nombre && this.model.edad && this.model.genero ){
      
      alert("Nombre: "+this.model.nombre+" Edad: "+this.model.edad+" Genero: "+this.model.genero);
    }else{
      alert("Ingresa los datos necesarios!!")
    }
  

  
  }


}