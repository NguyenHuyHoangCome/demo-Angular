import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoRoutingModule } from './product-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ProductsComponent } from './product.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonDemoRoutingModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        ToggleButtonModule,
        TableModule,
        InputTextModule,
    ],
    declarations: [],
})
export class ProductModule {}
