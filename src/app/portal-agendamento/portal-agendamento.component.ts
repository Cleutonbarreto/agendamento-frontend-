import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortalAgendamento } from './portal-agendamento';
import { PortalAgendamentoService } from '../servico/portal-agendamento.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portal-agendamento',
  standalone: true,
  templateUrl: './portal-agendamento.component.html',
  styleUrls: ['./portal-agendamento.component.css'],  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
})
export class PortalAgendamentoComponent {
  portalAgendamentos: PortalAgendamento[] = [];

    constructor(private portalAgendamentoService: PortalAgendamentoService) {
      this.getAll();
      }

  // Buscar todos os registros
    getAll(): void {
      this.portalAgendamentoService.getAll()
        .subscribe((portalAgendamentoList: PortalAgendamento[]) => {
          this.portalAgendamentos = portalAgendamentoList.filter(agendamento => !agendamento.finalizado);
        }, error => console.error("Erro ao obter Agendamento"));
        }
      }
