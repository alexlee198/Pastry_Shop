import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCakeComponent } from './buy-cake.component';

describe('BuyCakeComponent', () => {
  let component: BuyCakeComponent;
  let fixture: ComponentFixture<BuyCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
