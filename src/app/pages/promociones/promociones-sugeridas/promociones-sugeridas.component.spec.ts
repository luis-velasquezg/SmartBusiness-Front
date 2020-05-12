import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesSugeridasComponent } from './promociones-sugeridas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('PromocionesSugeridasComponent', () => {
  let component: PromocionesSugeridasComponent;
  let fixture: ComponentFixture<PromocionesSugeridasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PromocionesSugeridasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesSugeridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h3 tag', async(() => {
    fixture = TestBed.createComponent(PromocionesSugeridasComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Promociones Sugeridas');
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


// describe('When getPromocionesSugeridas() is called', () => {
//     it('should handle error', () => {
//       spyOn(Component.PromocionService, 'getPromocionesSugeridas').and.returnValue(throwError({ error: 'error' }));
//       component.ngOnInit();
//       expect(component.error).toBeTruthy();
//     });
//   });


});
