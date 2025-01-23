import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from '../agendamento/agendamento';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  
  private apiUrl = 'http://localhost:8080/agendamento';

  constructor(private httpClient: HttpClient) { }

  // Método para salvar um novo agendamento
  salvarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.httpClient.post<Agendamento>(`${this.apiUrl}/salvar`, agendamento);
  }

  // Método para atualizar a lista de agendamentos
  atualizarAgendamento(id: number, agendamento: Agendamento): Observable<Agendamento> {
    return this.httpClient.put<Agendamento>(`${this.apiUrl}/${id}`, agendamento);
  }

    // Listar todos os agendamentos
  listarAgendamentos(): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(this.apiUrl);
  }

  // Método para excluir um agendamento específico
  excluirAgendamento(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  // Método para obter um agendamento por ID
  getAgendamento(id: number): Observable<Agendamento> {
    return this.httpClient.get<Agendamento>(`${this.apiUrl}/${id}`);
  }
}
