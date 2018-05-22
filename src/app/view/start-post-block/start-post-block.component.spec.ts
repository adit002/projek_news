import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPostBlockComponent } from './start-post-block.component';

describe('StartPostBlockComponent', () => {
  let component: StartPostBlockComponent;
  let fixture: ComponentFixture<StartPostBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPostBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPostBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
