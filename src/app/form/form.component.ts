import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

//----- FORM   -----
form=new FormGroup({
  'name' : new FormControl(null, Validators.required),
  'age' : new FormControl(null, Validators.required),
  'genre' : new FormControl(null, Validators.required),
  'country' : new FormControl(null, Validators.required),
  'city' : new FormControl(null, Validators.required)
});
//----------
public insertName: Model={nombre:"", edad:"", genero:"",pais:"", ciudad:""};
public selectedCountry: Country={value:0,name: ''};
  
  //Almacena la info aqui
  public countries: Country[] = [];
  public cities: City[] = [];
  // public model: Model[] =[];
  constructor(private dataSvc: DataService) { }
  //instancia datasvc, para que muestre los paises y ciudades en consola
  ngOnInit(): void {
    this.countries=this.dataSvc.getCountries();
    //this.cities=this.dataSvc.getCities();
    // this.model=this.dataSvc.getModel();
  }
  onSelect(countries:any){
    //console.log(countries.target.value);
    this.cities=this.dataSvc.getCities().filter(x=>x.countryid==countries.target.value)
    console.log(this.cities);
    //1 el valor si lo detecta la consola
    //console.log(countries.target.value);
    /*this.cities=this.dataSvc.getCities()
    console.log(this.cities);*/
    //2 Cada opcion ancla los objetos
    //console.log(this.cities);
    //3 usar un filter 
 }
  btn_activo=false;
  onClick(){
    if(this.insertName.nombre && this.insertName.edad && this.insertName.genero ){
      
      alert("Información capturada satisfactoriamente!!!");
    }else{
      alert("Ingresa los datos necesarios!!")
    }
  }
  onSubmit(){
    console.warn(this.form.value);
  }
}