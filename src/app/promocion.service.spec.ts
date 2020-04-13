import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { PromocionService } from './promocion.service';
import { componentFactoryName } from '@angular/compiler';
import { throwError } from 'rxjs';

// describe('PromocionService', () => {
//   let service: PromocionService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(PromocionService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

  // describe('When getPromociones() is called', () => {
  //   it('should handle error', () => {
  //     spyOn(Component.PromocionService, 'getPromociones').and.returnValue(throwError({ error: 'error' }));
  //     component.getPromociones();
  //     expect(component.error).toBeTruthy();
  //   });
  // });


describe('PromocionService', () => {

  const mockResponse = [
    {
      "codigo": 1,
      "mensaje": "Usted puede aplicar 10.0% de descuento al producto Loratadina",
      "fecha": "2020-04-13T21:35:01.645+0000",
      "producto": {
        "codigo": 1,
        "nombre": "Loratadina",
        "precio": 1200,
        "costo": 1000,
        "iva": 0.16,
        "inventario": 300,
        "categoria": {
          "codigo": 1,
          "nombre": "Antistamínicos"
        }
      },
      "porcentajePromocion": 0.1
    }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PromocionService]
    });
  });

  describe('get data', () => {
    it('should get results',
    inject([HttpTestingController, PromocionService], (httpMock: HttpTestingController, promocionServiceTested: PromocionService) => {
      const apiUrl = 'http://192.168.137.1:8080/promociones/verpromociones/';
      promocionServiceTested.getPromociones()
      .subscribe(
        (data) => {
          expect(data).toEqual(mockResponse);
        }
      );
      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    })
  );
  });

});


