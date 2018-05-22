import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryForumComponent } from './category-forum.component';

describe('CategoryForumComponent', () => {
  let component: CategoryForumComponent;
  let fixture: ComponentFixture<CategoryForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
