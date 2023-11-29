import {
    Component,
    OnInit,
    OnChanges,
    SimpleChanges,
    Input,
    NgZone,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Product } from './service/domain/product';
import { ProductService } from './service/productservice';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@Component({
    templateUrl: './productList.component.html',
})
export class ProductListComponent implements OnInit, OnChanges {
    products: Product[];
    productDetails: any;
    valueProgressBar = 10;

    // static mặc định là false và progressBarClick sẽ  có val ở ngOnInit nếu như ProgressBarComponent không ở trong một Structural directives
    @ViewChild('progressBarClick', { static: true })
    progressBarClick: ProgressBarComponent;

    @ViewChild('inputTextTestFocus', { static: true })
    inputTextTestFocus: ElementRef<HTMLInputElement>;

    @ViewChild('dataTable', { static: true })
    dataTable: ElementRef<HTMLInputElement>;

    constructor(
        private productService: ProductService,
        private ngZone: NgZone,
        public router: Router
    ) {}

    onRowSelectProduct(event: any) {
        console.log(this.dataTable, 'dataTable');
        this.productDetails = event.data;
    }

    onRowUnselectProduct(event: any) {
        this.productDetails = null;
    }

    clickAddValue() {
        this.valueProgressBar += 10;
    }

    clickRemoveValue() {
        this.valueProgressBar -= 10;
    }

    onClear() {
        this.valueProgressBar = 0;
    }

    test(arg) {
        console.log(arg, 'test');
        this.router.navigate([`productList/${arg.id}`]);
    }

    ngOnInit() {
        setTimeout(() => {
            this.inputTextTestFocus.nativeElement.focus();
        }, 3000);

        this.ngZone.runOutsideAngular(() => {
            this.productService.getProductsAPIl().then((data) => {
                console.log(data.products);
                this.products = data.products;
            });
        });

        console.log(this.progressBarClick, 'progressBarClick init');
        console.log(this.inputTextTestFocus, 'inputTextTestFocus init');
    }

    ngAfterViewInit() {
        console.log(this.progressBarClick, 'progressBarClick');
    }

    ngOnChanges(changes: SimpleChanges): void {}
}
