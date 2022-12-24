import { Categoria } from './categoria';
export class Producto {
  id!: Number;
  precio!: Number;
  nombre!: String;
  imagen!: String;
  categoria!: Categoria;
}
