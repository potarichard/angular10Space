import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should "Add Clicks" button is clicked ', ()=>{
    const h1 = de.query(By.css('h1'));
    const btn = de.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText));
  });

  // TODO: create  login form , and test it

  // it('[Form-Check] - should check form is valid or not when values entered',()=>{
  //   component.loginForm.controls['useremail'].setValue('abc@xyz.com');
  //   component.loginForm.controls['userpassword'].setValue('123456');

  //   expect(component.loginForm.valid).toBeTruthy();
  // });

  // TODO: create custompipe, and test it

});
