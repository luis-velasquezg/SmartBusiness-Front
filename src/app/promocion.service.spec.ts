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

  const mockResponse = {
    'name': 'Biggs Darklighter',
    'height': '183',
    'mass': '84',
    'hair_color': 'black',
    'skin_color': 'light',
    'eye_color': 'brown',
    'birth_year': '24BBY',
    'gender': 'male',
    'mensaje': 'Este es un mensaje',
    'homeworld': 'https://swapi.co/api/planets/1/',
    'films': [
        'https://swapi.co/api/films/1/'
    ],
    'species': [
        'https://swapi.co/api/species/1/'
    ],
    'vehicles': [],
    'starships': [
        'https://swapi.co/api/starships/12/'
    ],
    'created': '2014-12-10T15:59:50.509000Z',
    'edited': '2014-12-20T21:17:50.323000Z',
    'url': 'https://swapi.co/api/people/9/'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PromocionService]
    });
  });

  describe('get data', () => {
    it('should get results',
    inject([HttpTestingController, PromocionService], (httpMock: HttpTestingController, promocionServiceTested: PromocionService) => {
      const apiUrl = 'https://swapi.co/api/people/9/';
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


