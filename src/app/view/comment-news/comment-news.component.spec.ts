import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentNewsComponent } from './comment-news.component';

describe('CommentNewsComponent', () => {
  let component: CommentNewsComponent;
  let fixture: ComponentFixture<CommentNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
