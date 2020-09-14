import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);       /// ????

    await TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      providers: [
          {
            provide: Router,
            useValue: routerSpy
          }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // spy
  it('check if spy is working', () =>{
    spyOn(component, 'generatePrime');
    component.validator();
    expect(component.generatePrime).toHaveBeenCalled();
  });

  it('check if validator is working with spy', () =>{
    spyOn(component, 'generatePrime').and.returnValue(31);
    let valid = component.validator();
    expect(valid).toBeTruthy();
    expect(component.generatePrime).toHaveBeenCalled();
  });

  it('check if validator is falsy', () =>{
    spyOn(component, 'generatePrime').and.returnValue(32);
    let valid = component.validator();
    expect(valid).toBeFalsy();
    expect(component.generatePrime).toHaveBeenCalled();
  });  

  it('spyobject', () =>{
    let spyobj = spyOn(component, 'generatePrime');
    spyobj.and.returnValue(12);
    let valid = component.validator();
    expect(valid).toBeFalse();
    expect(spyobj).toHaveBeenCalled();
  });  

  it('spy with args', () => {
    let productSpy = spyOn(component, 'filterOrder').withArgs('fresh').and.callThrough();
   
    // and then what

  });
  

  it('should test filter product list (fakeAsync)', fakeAsync(() => {

    component.searchText = 'fresh';

    let productSpy = spyOn(component, 'filterOrder').withArgs('fresh').and.callThrough();

    component.filterOrder('fresh');

    tick(); 
    
    fixture.detectChanges();
    // const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
    // expect(value).toContain(component.searchText);

   

  }));

});
