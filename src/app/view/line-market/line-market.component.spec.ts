import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMarketComponent } from './line-market.component';

describe('LineMarketComponent', () => {
  let component: LineMarketComponent;
  let fixture: ComponentFixture<LineMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
