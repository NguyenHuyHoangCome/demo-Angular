import {
    Component,
    Input,
    OnInit,
    OnChanges,
    SimpleChanges,
    Output,
    EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../service/productservice';
import {
    FormControl,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'product-details-new-page',
    templateUrl: './product-details-new-page.component.html',
    styleUrls: ['./product-details-new-page.component.scss'],
})
export class ProductDetailsNewPageComponent implements OnInit, OnChanges {
    profileForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: [''],
        brand: [''],
        price: [''],
        address: this.formBuilder.group({
            street: [''],
            city: [''],
            state: [''],
            zip: [''],
        }),
    });

    favoriteColorControl = new FormControl('');
    productDetails: any;
    private routeSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        public router: Router,
        private productService: ProductService,
        private formBuilder: FormBuilder
    ) {}

    onClickGoBack() {
        this.router.navigate([`productList`]);
    }

    test() {
        console.log(this.favoriteColorControl);
        console.log(this.productDetails);
        console.log(this.profileForm.value, 'profileForm');
        console.log(this.profileForm, 'profileForm');
        // this.favoriteColorControl.setValue('Nancy');
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
        this.productService.updateProductsDetailsAPI(this.profileForm.value);
    }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            // console.log(params);
            // console.log(params['id']);
            this.productService
                .getProductsDetailsAPI(params['id'])
                .then((data) => {
                    console.log(data, 'data');
                    this.productDetails = data;
                    this.profileForm.patchValue({
                        title: data.title,
                        description: data.description,
                        brand: data.brand,
                        price: data.price,
                    });
                });
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.profileForm.value, 'profileForm in chage');
    }
}
