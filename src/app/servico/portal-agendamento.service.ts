import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortalAgendamento } from '../portal-agendamento/portal-agendamento';

@Injectable({
  providedIn: 'root'
})
export class PortalAgendamentoService {

  private apiUrl = 'http://localhost:8080/agendamento';

  constructor(private httpClient: HttpClient) { }

  //Listar todos os agendamentos
  getAll(): Observable<PortalAgendamento[]> {
    return this.httpClient.get<PortalAgendamento[]>(this.apiUrl);
  }
}
