import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InuputBindingComponent } from './inuput-binding.component';

describe('InuputBindingComponent', () => {
  let component: InuputBindingComponent;
  let fixture: ComponentFixture<InuputBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InuputBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InuputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
