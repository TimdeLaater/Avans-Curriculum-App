import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudieplanComponent } from './studieplan.component';

describe('StudieplanComponent', () => {
  let component: StudieplanComponent;
  let fixture: ComponentFixture<StudieplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudieplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudieplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
