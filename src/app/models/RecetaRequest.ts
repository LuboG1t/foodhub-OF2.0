import { Categoria } from "./categoria";

export interface Ingrediente {
  idIngrediente: number;
  ingrediente: string;
}

export interface Instruccion {
  idInstruccion: number;
  instruccion: string;
}

export interface RecetaRequest {
  titulo: string;
  descripcion: string;
  tiempoCoccion: number;
  porciones: number;
  calorias: number;
  imagen: string;
  categoria: Categoria;
  ingredientes: Ingrediente[];
  instrucciones: Instruccion[];
}
