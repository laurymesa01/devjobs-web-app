import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTarjetaComponent } from './job-tarjeta.component';

describe('JobTarjetaComponent', () => {
  let component: JobTarjetaComponent;
  let fixture: ComponentFixture<JobTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
