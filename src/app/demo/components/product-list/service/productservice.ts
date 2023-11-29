import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient, public router: Router) {}
    private apiUrl = 'https://dummyjson.com';

    getProductsAPIl() {
        return this.http
            .get<any>(this.apiUrl + '/products')
            .toPromise()
            .then((data) => data);
    }
    getProductsDetailsAPI(id) {
        return this.http
            .get<any>(this.apiUrl + '/products/' + id)
            .toPromise()
            .then((data) => data);
    }

    updateProductsDetailsAPI(arg) {
        return this.http
            .put<any>(this.apiUrl + '/products/update', arg)
            .toPromise()
            .then((data) => data);
    }
}
