import { Pipe, PipeTransform } from '@angular/core';

interface Product {
  _id :String;
  productName: String;
  productPrice: number;
  productDescription : String;
  
  productImageUrl : String;
}
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[],search: String): Product[] {
    if (search===undefined) {
      return products;
    } else {
    return products.filter(product => {
      return products.productName.toLowercase().includes(search.toLowerCase());
    });
  }
  }

}
