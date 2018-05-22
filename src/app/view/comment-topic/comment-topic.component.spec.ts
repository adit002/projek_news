import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTopicComponent } from './comment-topic.component';

describe('CommentTopicComponent', () => {
  let component: CommentTopicComponent;
  let fixture: ComponentFixture<CommentTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
