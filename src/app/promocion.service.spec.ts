import { TestBed, inject, async } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { PromocionService } from './promocion.service';
import { componentFactoryName } from '@angular/compiler';
import { throwError } from 'rxjs';


describe('PromocionService', () => {

  const mockResponsePromocionesSugeridas = [
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

  const mockResponsePromocionesAplicadas = [
    {      
      "codigo": 9,
      "mensaje": "Usted puede aplicar 20.0% de descuento al producto Cetirizina 200mg MK x12 tabs",
      "fecha": "2020-05-10T05:00:00.000+0000",
      "producto": {
         "codigo": 2,
         "nombre": "Cetirizina 200mg MK x12 tabs",
         "precio": 2200.0,
         "costo": 550.0,
         "iva": 0.19,
         "inventario": 150
      },
      "porcentajePromocion": 0.2
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

  it ('should get Promociones Sugeridas', async(() => {
    const service: PromocionService = TestBed.get(PromocionService);
    service.getPromocionesSugeridas().subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  }));


  describe('get data', () => {
    it('should get results from Promociones Sugeridas',
    inject([HttpTestingController, PromocionService], (httpMock: HttpTestingController, promocionServiceTested: PromocionService) => {
      // const apiUrl = 'http://localhost:8080/smartbusiness/api/v1/promociones';
      const apiUrl = 'http://192.168.137.1:8080/smartbusiness/api/v1/promociones';
      promocionServiceTested.getPromocionesSugeridas()
      .subscribe(
        (data) => {
          expect(data).toEqual(mockResponsePromocionesSugeridas);
        }
      );
      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponsePromocionesSugeridas);
    })
  );
  });

  it ('should get Promociones Aplicadas', async(() => {
    const service: PromocionService = TestBed.get(PromocionService);
    service.getPromocionesAplicadas().subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  }));


  describe('get data', () => {
    it('should get results from Promociones Aplicadas',
    inject([HttpTestingController, PromocionService], (httpMock: HttpTestingController, promocionServiceTested: PromocionService) => {
      // const apiUrl = 'http://localhost:8080/smartbusiness/api/v1/promociones/guardadas/';
      const apiUrl = 'http://192.168.137.1:8080/smartbusiness/api/v1/promociones/guardadas/';
      promocionServiceTested.getPromocionesAplicadas()
      .subscribe(
        (data) => {
          expect(data).toEqual(mockResponsePromocionesAplicadas);
        }
      );
      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponsePromocionesAplicadas);
    })
  );
  });

});


