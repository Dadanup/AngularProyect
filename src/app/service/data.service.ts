import { Injectable } from '@angular/core';
import {Country, City, Model,Genre} from '../models/model.interface'

@Injectable()
export class DataService {
 //MOC DE DATOS

 private model: Model[]=[
  {nombre:"", edad:"", genero:"",pais:"", ciudad:""}
 ]

 private genrem: Genre[]=[
   {value:'Masculino', genre:'Masculino'},
   {value:'Femenino', genre:'Femenino'},
   {value:'Otro', genre:'Otro'}
 ]
  private countries: Country[]=[
    {value:"México", name:"México"},
    {value:"Estados Unidos", name:"Estados Unidos"},
    {value:"Canadá", name:"Canadá"}
  ];
  
  private cities:City[]=[
    {value:'CDMX',countryid:'México',name:'CDMX'},
    {value:'Edo. de México',countryid:'México',name:'Edo. de México'},
    {value:'Guadalajara',countryid:'México',name:'Guadalajara'},
    {value:'Monterrey',countryid:'México',name:'Monterrey'},
    
    {value:'Houston',countryid:'Estados Unidos',name:'Houston'},
    {value:'Chicago',countryid:'Estados Unidos',name:'Chicago'},
    {value:'California',countryid:'Estados Unidos',name:'California'},
    {value:'Denver',countryid:'Estados Unidos',name:'Denver'},
    
    {value:'Toronto',countryid:'Canadá',name:'Toronto'},
    {value:'Montreal',countryid:'Canadá',name:'Montreal'},
    {value:'Vancouver',countryid:'Canadá',name:'Vancouver'},
    {value:'Calgary',countryid:'Canadá',name:'Calgary'},
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

  getGenre(): City[]{
    return this.cities;
  }
}

