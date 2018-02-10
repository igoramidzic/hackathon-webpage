import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDailyMixComponent } from './your-daily-mix.component';

describe('YourDailyMixComponent', () => {
  let component: YourDailyMixComponent;
  let fixture: ComponentFixture<YourDailyMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourDailyMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourDailyMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
