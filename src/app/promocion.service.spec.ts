import { TestBed } from '@angular/core/testing';

import { PromocionService } from './promocion.service';
import { componentFactoryName } from '@angular/compiler';
import { throwError } from 'rxjs';

describe('PromocionService', () => {
  let service: PromocionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromocionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // describe('When getPromociones() is called', () => {
  //   it('should handle error', () => {
  //     spyOn(Component.PromocionService, 'getPromociones').and.returnValue(throwError({ error: 'error' }));
  //     component.getPromociones();
  //     expect(component.error).toBeTruthy();
  //   });
  // });

});
