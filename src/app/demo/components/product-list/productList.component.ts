import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from './service/domain/product';
import { ProductService } from './service/productservice';

@Component({
    templateUrl: './productList.component.html',
})
export class ProductListComponent implements OnInit {
    products: Product[];
    productDetails: any;

    constructor(private productService: ProductService) {}

    onRowSelectProduct(event: any) {
        this.productDetails = event.data;
    }
    onRowUnselectProduct(event: any) {
        this.productDetails = null;
    }

    ngOnInit() {
        this.productService.getProductsAPIl().then((data) => {
            console.log(data.products);
            this.products = data.products;
        });
    }
}
