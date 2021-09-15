import { Injectable } from '@angular/core'; //DI
import { model, genre,countries,cities} from './mock-info'


@Injectable({
  providedIn: 'root',
})
export class DataService {
 //MOCK DE DATOS
  getModel(){
    return model;
  }
  getCountries(){
    return countries;
  }

  getCities(){
    return cities;
  }

  getGenre(){
    return genre;
  }
}

