import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasileirosComponent } from './brasileiros.component';

describe('BrasileirosComponent', () => {
  let component: BrasileirosComponent;
  let fixture: ComponentFixture<BrasileirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrasileirosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasileirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
