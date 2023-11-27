import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './productList.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: ProductListComponent }]),
    ],
    declarations: [],
    exports: [RouterModule],
})
export class ButtonDemoRoutingModule {}
