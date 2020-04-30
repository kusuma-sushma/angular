import { Component, OnInit } from '@angular/core';
import { ProductService } from '../home/product.service';
import { Router } from '@angular/router';

// import { ProductService } from './products/products.component'' ;
// import { Posts } from 'PostComponent';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;
  data;

  constructor(private productService: ProductService) {
   // this.getPosts();
  //  this.posts=data;
   }

   getProducts() {
    this.productService.getData().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
   }

  Posts() {
    // this.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
    // console.log(data);
 // });
}

  ngOnInit(): void {
  }

}
