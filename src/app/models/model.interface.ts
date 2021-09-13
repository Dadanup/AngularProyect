export interface Model{
    nombre:string;
    edad:string;
    genero:string;
    pais:string;
    ciudad:string;
}

export interface Country{
    value:string;
    name:string
}

export interface City{
    value:string;
    countryid:string;
    name: string;
}

export interface Genre{
    value:string;
    genre:string;
}