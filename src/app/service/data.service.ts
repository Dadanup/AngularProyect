import { Injectable } from '@angular/core';
import {Country, City, Model} from '../models/model.interface'

@Injectable()
export class DataService {
 //MOC DE DATOS

 private model: Model[]=[
  {nombre:"", edad:"", genero:"",pais:"", ciudad:""}
 ]
  private countries: Country[]=[
    {value:1, name:"Mexico"},
    {value:2, name:"USA"},
    {value:3, name:"CANADA"}
  ];
  
  private cities:City[]=[
    {value:1,countryid:1,name:'CDMX'},
    {value:2,countryid:1,name:'Edo. de México'},
    {value:3,countryid:1,name:'Guadalajara'},
    {value:4,countryid:1,name:'Monterrey'},
    
    {value:1,countryid:2,name:'Houston'},
    {value:2,countryid:2,name:'Chicago'},
    {value:3,countryid:2,name:'California'},
    {value:4,countryid:2,name:'Denver'},
    
    {value:1,countryid:3,name:'Toronto'},
    {value:2,countryid:3,name:'Montreal'},
    {value:3,countryid:3,name:'Vancouver'},
    {value:4,countryid:3,name:'Calgary'},
  ]
  //get  de los datos privados

  getModel():Model[]{
    return this.model;
  }
  getCountries(): Country[]{
    return this.countries;
  }

  getCities(): City[]{
    return this.cities;
  }
}
