import { TestBed } from '@angular/core/testing';

import { PortalAgendamentoService } from './portal-agendamento.service';

describe('PortalAgendamentoService', () => {
  let service: PortalAgendamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalAgendamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
