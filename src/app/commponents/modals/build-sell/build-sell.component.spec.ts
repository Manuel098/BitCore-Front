import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSellComponent } from './build-sell.component';

describe('BuildSellComponent', () => {
  let component: BuildSellComponent;
  let fixture: ComponentFixture<BuildSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
