import { Component, OnInit } from '@angular/core';
//INYECCION DE SERVICIOS
import { DataService } from '../service/data.service';
//INTERFACE
import { Country,City,Model } from '../models/model.interface';
//Modelo de REACTIVE FORM 
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form-builder',
  templateUrl: './test-form-builder.component.html',
  styleUrls: ['./test-form-builder.component.css']
})
export class TestFormBuilderComponent implements OnInit {
  // metodo get para la inyeccion de los servicios
  public countries:Country []=[]
  public cities:City []=[]
  //ReactiveForm -> FormGroup
  // form=new FormGroup({
  //   'name':new FormControl('',Validators.required),
  //   'age':new FormControl('',Validators.required),
  //   'genre':new FormControl('',Validators.required),
  //   'country':new FormControl('',Validators.required),
  //   'city':new FormControl('',Validators.required)

  // });
  //FormBuilder
  regexAge='^[0-9][0-9]';
  form=this.fb.group({
    name:['',Validators.required],
    age:['',[Validators.required,Validators.pattern(this.regexAge)]],
    genre:['',Validators.required],
    country:['',Validators.required],
    city:['',Validators.required],
  });
  
  constructor(private dataSVC: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.countries=this.dataSVC.getCountries();
  }
  
  onChange(countries: any){
    // 1- VERIFICAR  countries.target.value
    // 2- MOSTRAR this.cities=this.dataSvc.getCities()
    // 3- FILTRAR
    this.cities=this.dataSVC.getCities().filter(x=>x.countryid==countries.target.value)
    console.log(this.cities);
  }  

  onSubmit(){
    //Implementar un EventEmmiter 
   console.warn(this.form.value)
  }
}
