import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Country, City, Genre} from '../models/model.interface';
import { DataService} from '../service/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {

  // ---- EXPRESIÓNES REGULARES
  regexName = '[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}';
  regexAge = '#?[0-9]{2}';
  regexGenre = "([masculino]{9})|([Masculino]{9})|([femenino]{8})|([Femenino]{8})|([otro]{4})|([Otro]{4})"
  // ---- FormBuilder
  form=this.fb.group({
    'name':['',[Validators.required,Validators.pattern(this.regexName)]],
    'age':['',[Validators.required,Validators.pattern(this.regexAge)]],
    'genre':['',[Validators.required,Validators.pattern(this.regexGenre)]],
    'country':['',Validators.required],
    'city':['',Validators.required]
  });
  

  // --- Get de los FormControlName para implementar la condicion If
  get name():any{
    return this.form.get('name');
  }
  get age():any{
    return this.form.get('age');
  }
  get genre():any{
    return this.form.get('genre');
  }
  // get country():any{
  //   return this.form.get('country');
  // }
  // get city():any{
  //   return this.form.get('city');
  // }
  
  //Método get para la inyeccion de los servicios
  public countries: Country[] = [];
  public cities: City[] = [];

  constructor(private dataSvc: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.countries=this.dataSvc.getCountries();
  }

  onSelect(countries:any){
    this.cities=this.dataSvc.getCities().filter(x=>x.countryid==countries.target.value)
    console.log(this.cities);
 }

  onSubmit(){
    if('Nombre: ' + this.form.controls.name.value + ' Edad: ' + this.form.controls.age.value + ' Genero: ' + this.form.controls.genre.value + ' Pais: ' + this.form.controls.country.value + ' Ciudad: ' + this.form.controls.city.value){
      alert('Información recibida con éxito');
      console.warn(this.form.value);
    }else{
      alert('Error al procesar la información')
    }
    alert();
  }
}