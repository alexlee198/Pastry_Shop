import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryCardComponent } from './pastry-card.component';

describe('PastryCardComponent', () => {
  let component: PastryCardComponent;
  let fixture: ComponentFixture<PastryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
