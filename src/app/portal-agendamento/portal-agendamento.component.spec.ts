import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAgendamentoComponent } from './portal-agendamento.component';

describe('PortalAgendamentoComponent', () => {
  let component: PortalAgendamentoComponent;
  let fixture: ComponentFixture<PortalAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
