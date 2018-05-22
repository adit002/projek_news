import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLineNewsComponent } from './content-line-news.component';

describe('ContentLineNewsComponent', () => {
  let component: ContentLineNewsComponent;
  let fixture: ComponentFixture<ContentLineNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLineNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLineNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
