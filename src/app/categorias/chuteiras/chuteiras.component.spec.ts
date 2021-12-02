import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuteirasComponent } from './chuteiras.component';

describe('ChuteirasComponent', () => {
  let component: ChuteirasComponent;
  let fixture: ComponentFixture<ChuteirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuteirasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuteirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
