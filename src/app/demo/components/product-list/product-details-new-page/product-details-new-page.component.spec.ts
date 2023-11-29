import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsNewPageComponent } from './product-details-new-page.component';

describe('ProductDetailsNewPageComponent', () => {
  let component: ProductDetailsNewPageComponent;
  let fixture: ComponentFixture<ProductDetailsNewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsNewPageComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
