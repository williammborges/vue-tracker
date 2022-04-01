export interface INotificacao {
    titulo: string,
    texto: string,
    tipo: TipoNotificacao,
    id: number
}

export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}