import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url: String = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '/listar');
  }

  getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url + '/categorias');
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url + '/crear', producto);
  }
}
