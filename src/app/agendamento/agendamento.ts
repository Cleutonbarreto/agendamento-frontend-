export enum StatusAgendamento {

ABERTO = 'ABERTO',
PREVISAO = 'PREVISAO',
FECHADO = 'FECHADO'
}

export interface Agendamento {
    id?: number;           
    fornecedor: string;   
    produtos: string;     
    data: string;        
    hora: string;         
    notaFiscal?: number;  
    quantidadeVolumes: number;
    status: StatusAgendamento;
    finalizado: string;
}