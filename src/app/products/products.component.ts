import { Component } from '@angular/core';
import productsData from './products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Products: any = productsData;
  ngOnInit(): void {
    console.log(this.Products);
  }
}
