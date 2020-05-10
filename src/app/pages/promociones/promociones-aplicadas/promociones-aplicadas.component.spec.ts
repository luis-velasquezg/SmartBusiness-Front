import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesAplicadasComponent } from './promociones-aplicadas.component';

describe('PromocionesAplicadasComponent', () => {
  let component: PromocionesAplicadasComponent;
  let fixture: ComponentFixture<PromocionesAplicadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionesAplicadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesAplicadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
