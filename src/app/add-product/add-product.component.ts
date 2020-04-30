import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { interval, Subscription } from 'rxjs';
import { ProductService } from '../home/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  message: String;

  mySubscription: Subscription;

  constructor(private productService: ProductService ) { 
    this.mySubscription=interval(1000).subscribe(data => {
      console.log(data);
    });
  }

  postProduct(form: NgForm) {
    this.productService.postData(form.value).subscribe(response => {
      console.log(response);
      form.reset();
      if (!response.error) {
        this.message = 'Product added successfully';
      }
    }, error => {
      console.log(error);
    });
  }
  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
