import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeiaoComponent } from './meiao.component';

describe('MeiaoComponent', () => {
  let component: MeiaoComponent;
  let fixture: ComponentFixture<MeiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeiaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
