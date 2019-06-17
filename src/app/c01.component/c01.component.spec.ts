/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C01Component } from './c01.component';

describe('C01Component', () => {
  let component: C01Component;
  let fixture: ComponentFixture<C01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
