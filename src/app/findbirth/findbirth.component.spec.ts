import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbirthComponent } from './findbirth.component';

describe('FindbirthComponent', () => {
  let component: FindbirthComponent;
  let fixture: ComponentFixture<FindbirthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindbirthComponent]
    });
    fixture = TestBed.createComponent(FindbirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
