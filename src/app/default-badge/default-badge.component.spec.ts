import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBadgeComponent } from './default-badge.component';

describe('DefaultBadgeComponent', () => {
  let component: DefaultBadgeComponent;
  let fixture: ComponentFixture<DefaultBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
