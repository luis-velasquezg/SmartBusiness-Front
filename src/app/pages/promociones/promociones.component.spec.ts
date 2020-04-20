import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesComponent } from './promociones.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('PromocionesComponent', () => {
  let component: PromocionesComponent;
  let fixture: ComponentFixture<PromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h3 tag', async(() => {
    fixture = TestBed.createComponent(PromocionesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Promociones');
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


// describe('When getPromociones() is called', () => {
//     it('should handle error', () => {
//       spyOn(Component.PromocionService, 'getPromociones').and.returnValue(throwError({ error: 'error' }));
//       component.ngOnInit();
//       expect(component.error).toBeTruthy();
//     });
//   });


});
