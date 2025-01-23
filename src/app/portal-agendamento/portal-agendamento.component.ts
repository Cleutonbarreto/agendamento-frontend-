import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortalAgendamento } from './portal-agendamento';
import { PortalAgendamentoService } from '../servico/portal-agendamento.service';

@Component({
  selector: 'app-portal-agendamento',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './portal-agendamento.component.html',
  styleUrls: ['./portal-agendamento.component.css']
})
export class PortalAgendamentoComponent {
  portalAgendamentos: PortalAgendamento[] = [];

    constructor(private portalAgendamentoService: PortalAgendamentoService) {
      this.getAll();
      }

  // Buscar todos os registros
    getAll(): void {
      this.portalAgendamentoService.getAll()
        .subscribe((portalAgendamentoList: PortalAgendamento[]) => this.portalAgendamentos = portalAgendamentoList,
          error => console.error("Erro ao obter Agendamento")
    );
    }

}
