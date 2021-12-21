import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoortgangComponent } from './voortgang.component';

describe('VoortgangComponent', () => {
  let component: VoortgangComponent;
  let fixture: ComponentFixture<VoortgangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoortgangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoortgangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
