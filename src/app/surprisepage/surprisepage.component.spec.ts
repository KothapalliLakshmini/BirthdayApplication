import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurprisepageComponent } from './surprisepage.component';

describe('SurprisepageComponent', () => {
  let component: SurprisepageComponent;
  let fixture: ComponentFixture<SurprisepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurprisepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurprisepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
