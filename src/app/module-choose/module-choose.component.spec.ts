import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleChooseComponent } from './module-choose.component';

describe('ModuleChooseComponent', () => {
  let component: ModuleChooseComponent;
  let fixture: ComponentFixture<ModuleChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
