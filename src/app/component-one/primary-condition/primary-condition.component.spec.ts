import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryConditionComponent } from './primary-condition.component';

describe('PrimaryConditionComponent', () => {
  let component: PrimaryConditionComponent;
  let fixture: ComponentFixture<PrimaryConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
