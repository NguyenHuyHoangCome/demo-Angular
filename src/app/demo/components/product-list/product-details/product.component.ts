import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'productDetails',
    templateUrl: './product.component.html',
})
export class ProductsComponent implements OnInit {
    binding: string = 'hoang yeu linh';

    @Input()
    productDetails: any;
    title: 'hi';

    test() {
        console.log('hi', this.productDetails);
    }
    ngOnInit() {}
}
