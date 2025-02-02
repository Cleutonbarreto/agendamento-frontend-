import { Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { PortalAgendamentoComponent } from './portal-agendamento/portal-agendamento.component';

export const routes: Routes = [
    { path: '', redirectTo: '/portal', pathMatch: 'full' },
    { path: 'portal', component: PortalAgendamentoComponent},
    { path: 'agendamento', component: AgendamentoComponent}
];
