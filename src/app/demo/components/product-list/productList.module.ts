import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoRoutingModule } from './productList-routing.module';
import { ProductListComponent } from './productList.component';
import { ProductsComponent } from './product-details/product.component';
import { ProductDetailsNewPageComponent } from './product-details-new-page/product-details-new-page.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { BoldDirective } from './directives/bold.directive';
import { StyleDirective } from './directives/style.directive';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
        ProgressBarModule,
        ToastModule,
        BoldDirective,
        StyleDirective,
        ReactiveFormsModule,
    ],
    declarations: [
        ProductListComponent,
        ProductsComponent,
        ProgressBarComponent,
        ProductDetailsNewPageComponent,
    ],
})
export class ProductListModule {}
