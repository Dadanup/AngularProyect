export interface Model{
    nombre:string;
    edad:string;
    genero:string;
    pais:string;
    ciudad:string;
}

export interface Country{
    value:number;
    name:string
}

export interface City{
    value:number;
    countryid:number;
    name: string;
}