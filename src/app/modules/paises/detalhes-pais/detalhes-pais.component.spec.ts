import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPaisComponent } from './detalhes-pais.component';

describe('DetalhesPaisComponent', () => {
  let component: DetalhesPaisComponent;
  let fixture: ComponentFixture<DetalhesPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
