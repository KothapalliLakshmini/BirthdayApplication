import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaypageComponent } from './birthdaypage.component';

describe('BirthdaypageComponent', () => {
  let component: BirthdaypageComponent;
  let fixture: ComponentFixture<BirthdaypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdaypageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
