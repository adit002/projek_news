import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesForumComponent } from './lates-forum.component';

describe('LatesForumComponent', () => {
  let component: LatesForumComponent;
  let fixture: ComponentFixture<LatesForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatesForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatesForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
