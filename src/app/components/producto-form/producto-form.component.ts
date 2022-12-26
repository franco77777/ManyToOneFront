import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],
})
export class ProductoFormComponent implements OnInit {
  producto: Producto = new Producto();

  categorias: Categoria[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService
      .getCategoria()
      .subscribe(
        (response) => ((this.categorias = response), console.log(response))
      );
  }

  crearProducto() {
    /*  this.productoService
      .crearProducto(this.producto)
      .subscribe((response) => console.log(response)); */
    console.log(this.producto);
  }
}
