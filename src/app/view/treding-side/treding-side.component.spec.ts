import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TredingSideComponent } from './treding-side.component';

describe('TredingSideComponent', () => {
  let component: TredingSideComponent;
  let fixture: ComponentFixture<TredingSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TredingSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TredingSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
