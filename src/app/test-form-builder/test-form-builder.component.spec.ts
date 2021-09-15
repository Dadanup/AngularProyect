import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormBuilderComponent } from './test-form-builder.component';

describe('TestFormBuilderComponent', () => {
  let component: TestFormBuilderComponent;
  let fixture: ComponentFixture<TestFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
