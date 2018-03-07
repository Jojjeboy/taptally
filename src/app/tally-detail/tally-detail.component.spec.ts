import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyDetailComponent } from './tally-detail.component';

describe('TallyDetailComponent', () => {
  let component: TallyDetailComponent;
  let fixture: ComponentFixture<TallyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
