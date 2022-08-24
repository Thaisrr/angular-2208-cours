import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherEnfantComponent } from './another-enfant.component';

describe('AnotherEnfantComponent', () => {
  let component: AnotherEnfantComponent;
  let fixture: ComponentFixture<AnotherEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherEnfantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
