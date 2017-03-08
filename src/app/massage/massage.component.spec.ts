import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgPanelComponent } from './msg-panel.component';

describe('MsgPanelComponent', () => {
  let component: MsgPanelComponent;
  let fixture: ComponentFixture<MsgPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
