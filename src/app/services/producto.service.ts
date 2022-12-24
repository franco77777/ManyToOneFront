import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url: String = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url+'/listar');
  }
}
