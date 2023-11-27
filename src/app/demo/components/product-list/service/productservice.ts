import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}
    private apiUrl = 'https://dummyjson.com/products';

    getProductsAPIl() {
        return this.http
            .get<any>(this.apiUrl)
            .toPromise()
            .then((data) => data);
    }
}
