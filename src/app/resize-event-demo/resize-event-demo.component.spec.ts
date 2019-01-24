import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeEventDemoComponent } from './resize-event-demo.component';

describe('ResizeEventDemoComponent', () => {
  let component: ResizeEventDemoComponent;
  let fixture: ComponentFixture<ResizeEventDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizeEventDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeEventDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
