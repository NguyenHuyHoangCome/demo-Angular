import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoRoutingModule } from './productList-routing.module';
import { ProductListComponent } from './productList.component';
import { ProductsComponent } from './product-details/product.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ButtonDemoRoutingModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        ToggleButtonModule,
        TableModule,
        FormsModule,
        InputTextModule,
    ],
    declarations: [ProductListComponent, ProductsComponent],
})
export class ProductListModule {}
