import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependancesComponent } from './dependances.component';

describe('DependancesComponent', () => {
  let component: DependancesComponent;
  let fixture: ComponentFixture<DependancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
