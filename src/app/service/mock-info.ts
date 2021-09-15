import {Country, City, Model,Genre} from '../models/model.interface'

export const model: Model[]=[
    {nombre:"", edad:"", genero:"",pais:"", ciudad:""}
   ]
  
export const genre: Genre[]=[
     {value:'Masculino', genre:'Masculino'},
     {value:'Femenino', genre:'Femenino'},
     {value:'Otro', genre:'Otro'}
   ]
export const  countries: Country[]=[
      {value:"México", name:"México"},
      {value:"Estados Unidos", name:"Estados Unidos"},
      {value:"Canadá", name:"Canadá"}
    ];
export const  cities:City[]=[
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