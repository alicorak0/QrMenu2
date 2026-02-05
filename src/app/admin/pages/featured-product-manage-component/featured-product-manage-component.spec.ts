import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductManageComponent } from './featured-product-manage-component';

describe('FeaturedProductManageComponent', () => {
  let component: FeaturedProductManageComponent;
  let fixture: ComponentFixture<FeaturedProductManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProductManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProductManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
