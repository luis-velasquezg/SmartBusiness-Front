import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesAplicadasComponent } from './promociones-aplicadas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PromocionesAplicadasComponent', () => {
  let component: PromocionesAplicadasComponent;
  let fixture: ComponentFixture<PromocionesAplicadasComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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

  it('should render title in a h3 tag', async(() => {
    fixture = TestBed.createComponent(PromocionesAplicadasComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Promociones Aplicadas');
  }));


});
