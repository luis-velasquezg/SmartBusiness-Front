import { TestBed, inject, async } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { PromocionService } from './promocion.service';
import { componentFactoryName } from '@angular/compiler';
import { throwError } from 'rxjs';


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


  it('should be created', inject([PromocionService], (service: PromocionService) => {
    expect(service).toBeTruthy();
  }));

  it ('should get Promociones', async(() => {
    const service: PromocionService = TestBed.get(PromocionService);
    service.getPromociones().subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  }));


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


