import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  categories = ['Electronics', 'Clothing', 'Books'];
}
