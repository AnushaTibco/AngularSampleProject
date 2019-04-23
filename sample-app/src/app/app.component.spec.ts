import { TestBed, async, ComponentFixture,inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DataService } from './shared/services/data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],

      providers:[DataService]
    }).compileComponents();
  }));
 beforeEach(()=>{
   fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
 });
  it('should create the app', () => {
  
    expect(component).toBeTruthy();
  });

});
