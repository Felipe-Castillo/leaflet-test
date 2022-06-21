import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementInformationComponent } from './element-information.component';

describe('ElementInformationComponent', () => {
  let component: ElementInformationComponent;
  let fixture: ComponentFixture<ElementInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
