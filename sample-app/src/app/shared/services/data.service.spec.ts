import { TestBed, inject,getTestBed,async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';



describe('DataService', () => {
  let injector: TestBed;
  let service: DataService;
  let httpMock: HttpTestingController;
  const data = {
    'title': 'Book Title',
    'author': 'John Smith',
    'volumeId': '12345'
  };
    
  const queryTitle = 'flowers';
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [DataService]
}));

    it('should return an Observable', inject(
      [HttpTestingController, DataService],
      (
        httpMock: HttpTestingController,
        dataService: DataService
      ) => {
      dataService.getBooks(queryTitle).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(data);
        }
      });
      const mockReq = httpMock.expectOne(dataService.API_PATH+'?q=flowers');
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(data);

httpMock.verify();

    }));
});




