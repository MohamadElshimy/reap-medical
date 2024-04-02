import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLearnMoreComponent } from './product-learn-more.component';

describe('ProductLearnMoreComponent', () => {
  let component: ProductLearnMoreComponent;
  let fixture: ComponentFixture<ProductLearnMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLearnMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductLearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
