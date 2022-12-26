import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) {}
  ngOnInit(): void {
    this.productoService
      .getProductos()
      .subscribe(
        (response) => ((this.productos = response), console.log(this.productos))
      );
  }
}
