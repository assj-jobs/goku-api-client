import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipoteseDiagnosticaComponent } from './hipotese-diagnostica.component';

describe('HipoteseDiagnosticaComponent', () => {
  let component: HipoteseDiagnosticaComponent;
  let fixture: ComponentFixture<HipoteseDiagnosticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipoteseDiagnosticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipoteseDiagnosticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
