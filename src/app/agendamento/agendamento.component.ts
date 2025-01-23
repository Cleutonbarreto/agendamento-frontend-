
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Agendamento, StatusAgendamento } from './agendamento';
import { AgendamentoService } from '../servico/agendamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent {
  agendamentos: Agendamento[] = [];
  agendamentoSelecionado?: Agendamento;

  constructor(private agendamentoService: AgendamentoService) {
    this.atualizarLista();
  }


  // Salvar agendamento
  salvarAgendamento(form: NgForm): void {
    if (!form.valid) return;

    const novoAgendamento: Agendamento = { ...form.value };

    if (this.agendamentoSelecionado) {
      novoAgendamento.id = this.agendamentoSelecionado.id;

      // Atualizar agendamento existente
      this.agendamentoService.atualizarAgendamento(this.agendamentoSelecionado.id!, novoAgendamento)
        .subscribe(
          (agendamentoAtualizado) => {
            this.agendamentos = this.agendamentos.map(ag =>
              ag.id === agendamentoAtualizado.id ? agendamentoAtualizado : ag
            );
            form.resetForm();
            this.agendamentoSelecionado = undefined;
          },
          (error) => console.error('Erro ao atualizar agendamento:', error)
        );
    } else {
      // Criar novo agendamento
      this.agendamentoService.salvarAgendamento(novoAgendamento)
        .subscribe(
          (agendamentoCriado) => {
            this.agendamentos.push(agendamentoCriado);
            form.resetForm();
          },
          (error) => console.error('Erro ao salvar agendamento:', error)
        );
    }
  }

  // Atualizar lista de agendamentos
  atualizarLista(): void {
    this.agendamentoService.listarAgendamentos()
      .subscribe(
        (agendamentos) => this.agendamentos = agendamentos,
        (error) => {
          console.error('Erro ao carregar agendamentos:', error);
          alert('Erro ao carregar agendamentos.');
        }
      );
  }

  // Cancelar edição ou operação
  cancelar(): void {
    this.agendamentoSelecionado = undefined;
  }

  // Excluir agendamento
  excluir(): void {
    if (!this.agendamentoSelecionado || !this.agendamentoSelecionado.id) return;
  
    this.agendamentoService.excluirAgendamento(this.agendamentoSelecionado.id)
      .subscribe(
        () => {
          this.agendamentos = this.agendamentos.filter(
            ag => ag.id !== this.agendamentoSelecionado?.id
          );
          this.agendamentoSelecionado = undefined;
        },
        (error) => {
          console.error('Erro ao excluir agendamento:', error);
          alert('Erro ao excluir agendamento.');
        }
      );
  }
  

  // Selecionar agendamento para edição
  selecionarParaEdicao(agendamento: Agendamento): void {
    this.agendamentoSelecionado = { ...agendamento };
  }

  //Metodo para edição
  editAgendamento(id: number): void {
    if (!id) {
      console.error("ID inválido para edição.");
      return;
    }
  
    // Buscar o agendamento a partir do ID
    this.agendamentoService.getAgendamento(id).subscribe(
      (agendamento) => {
        this.agendamentoSelecionado = agendamento;
      },
      (error) => {
        console.error("Erro ao buscar agendamento:", error);
        alert('Erro ao buscar agendamento.');
      }
    );
  }

  updateStatus(id: number, newStatus: string) {
    const agendamento = this.agendamentos.find((a) => a.id === id);
    if(agendamento) {
      agendamento.status = newStatus as StatusAgendamento;
      console.log(`Status do agendamento ${id} atualizado para ${newStatus}`);
    }
  }
}

