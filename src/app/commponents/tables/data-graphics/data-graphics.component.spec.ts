import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGraphicsComponent } from './data-graphics.component';

describe('DataGraphicsComponent', () => {
  let component: DataGraphicsComponent;
  let fixture: ComponentFixture<DataGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
