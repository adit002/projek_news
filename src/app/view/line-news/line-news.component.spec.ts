import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineNewsComponent } from './line-news.component';

describe('LineNewsComponent', () => {
  let component: LineNewsComponent;
  let fixture: ComponentFixture<LineNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
