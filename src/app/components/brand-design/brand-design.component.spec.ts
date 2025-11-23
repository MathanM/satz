import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDesignComponent } from './brand-design.component';

describe('BrandDesignComponent', () => {
  let component: BrandDesignComponent;
  let fixture: ComponentFixture<BrandDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

