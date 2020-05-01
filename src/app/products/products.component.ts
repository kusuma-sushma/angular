import { Component, OnInit } from '@angular/core';
import { ProductService } from '../home/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  todaysDate = new Date();
  products;
  message : String;

  constructor(
    private productService: ProductService,
    private router: Router
    ) {
    this.getProducts();
   }

  getProducts() {
    this.productService.getData().subscribe(response => {
      console.log(response);
      this.products = response.products;
    }, error => {
      console.log(error);
    });

  }

  deletProduct(product) {
    this.productService.deleteData(product).subscribe(response => {
      console.log(response);
      if (response.error) {
        this.message='Failed to delete the product';
      } else {
        this.message ='Product Deleted successfully';
      }
      setTimeout(() => {
        this.message = null;
      }, 5000);
      this.getProducts();
    });
  }

  selectproduct(product) {
    this.router.navigate(['/edit-product'], {queryParams: product});
  }
  ngOnInit(): void {
  }

}
