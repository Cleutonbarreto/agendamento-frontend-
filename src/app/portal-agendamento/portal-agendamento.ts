export interface PortalAgendamento {
    id?: number;           
    fornecedor: string;   
    produtos: string;     
    data: string;        
    hora: string;         
    notaFiscal?: number;  
    quantidadeVolumes: number;
}