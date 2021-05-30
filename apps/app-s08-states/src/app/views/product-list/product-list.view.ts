import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../commons/interfaces/product.interface';
import { ProductsHttpService } from '../../commons/services/products-http.service';

@Component({
  templateUrl: './product-list.view.html',
  styleUrls: ['./product-list.view.css']
})
export class ProductListView {
  products$: Observable<Product[]>;

  constructor(
    private productsHttp: ProductsHttpService
  ) {
    this.products$ = this.productsHttp.getAll();
  }
}
