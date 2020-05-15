import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductboughtComponent } from './productbought.component';

describe('ProductboughtComponent', () => {
  let component: ProductboughtComponent;
  let fixture: ComponentFixture<ProductboughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductboughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductboughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
