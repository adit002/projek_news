import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetizenNewsComponent } from './netizen-news.component';

describe('NetizenNewsComponent', () => {
  let component: NetizenNewsComponent;
  let fixture: ComponentFixture<NetizenNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetizenNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetizenNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
