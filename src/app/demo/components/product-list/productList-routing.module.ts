import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './productList.component';
import { ProductDetailsNewPageComponent } from './product-details-new-page/product-details-new-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: ProductListComponent }]),
        RouterModule.forChild([{ path: ':id', component: ProductDetailsNewPageComponent }]),
    ],
    declarations: [],
    exports: [RouterModule],
})
export class ButtonDemoRoutingModule {}
