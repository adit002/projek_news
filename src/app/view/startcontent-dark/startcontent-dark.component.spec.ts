import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcontentDarkComponent } from './startcontent-dark.component';

describe('StartcontentDarkComponent', () => {
  let component: StartcontentDarkComponent;
  let fixture: ComponentFixture<StartcontentDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartcontentDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartcontentDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
