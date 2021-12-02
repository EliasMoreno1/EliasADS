import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeusComponent } from './europeus.component';

describe('EuropeusComponent', () => {
  let component: EuropeusComponent;
  let fixture: ComponentFixture<EuropeusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
