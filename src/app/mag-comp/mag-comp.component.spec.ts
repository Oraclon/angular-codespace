import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagCompComponent } from './mag-comp.component';

describe('MagCompComponent', () => {
  let component: MagCompComponent;
  let fixture: ComponentFixture<MagCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
