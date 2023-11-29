import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output,
    NgZone,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'productDetails',
    templateUrl: './product.component.html',
})
export class ProductsComponent implements OnInit {
    binding: string = 'hoang';
    @Input() searchVal = 'hi';
    @Input() productDetails: any;
    data: any;
    constructor(private ngZone: NgZone) {}

    title: 'hi';

    test() {
        console.log('hi', this.productDetails);
    }
    ngOnInit() {
      
    }
}
