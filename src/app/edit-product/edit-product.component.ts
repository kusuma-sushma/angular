import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.route.queryParam.subscribe(data => {
      console.log('product to be updted', data);
      this.productToBeUpdated = data;
    });
   }

  ngOnInit(): void {
  }

}
