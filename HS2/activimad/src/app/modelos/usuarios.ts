export interface Usuario  {
    nombre: string;
    apellidos: string;
    email: string;
    sexo: string;
    preferencias: {cultura: boolean, deportes: boolean, aventura: boolean};
    sugerencia: string;
}
