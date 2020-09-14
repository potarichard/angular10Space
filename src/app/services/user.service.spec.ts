import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });

    service = TestBed.inject(UserService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  it('should test HttpClient.get', () => {

      const testPost = {id : 1, name: "Peter"};

      service.getAll().subscribe( posts => expect(testPost).toBe(testPost));   
      
      const req = httpTestCtrl.expectOne(service.URL);

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testPost);

      httpTestCtrl.verify();   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
