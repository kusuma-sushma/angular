import { Component } from '@angular/core';
import { ProductService } from './home/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6Project-http';

  constructor(public productService: ProductService) {
    console.log(this.productService.products);
  }
}
