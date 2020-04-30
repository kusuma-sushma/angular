import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    myUrl = 'http://localhost:8080/products/';
    constructor(private http: HttpClientModule) {

    }
    postData(product) {
        return this.http.post<any>('${this.myUrl}add-product', product);
    }

    getData() {
        return this.http.get<any>('${this.myUrl}get-products');
    }

    deleteData(product) {
        return this.http.delete<any>('${this.myUrl}delete-product/${product._id}');
    }
    }