import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  constructor(private productoService: ProductoService) {}
  ngOnInit(): void {
    this.productoService
      .getProductos()
      .subscribe((response) => console.log(response));
  }
}
