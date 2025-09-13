import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarPlatformComponent } from './webinar-platform.component';

describe('WebinarPlatformComponent', () => {
  let component: WebinarPlatformComponent;
  let fixture: ComponentFixture<WebinarPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarPlatformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
