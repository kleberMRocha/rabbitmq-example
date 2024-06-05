export interface IResposneAlertasinterface{
    id: number;
    id_aviso: number;
    id_sequencia: number;
    id_condicao_severa: number;
    id_icone: number;
    id_usuario: number;
    codigo: string;
    referencia: string;
    data_inicio: string;  // ISO date string
    hora_inicio: string;
    data_fim: string;  // ISO date string
    hora_fim: string;
    poligono: string;  // JSON string representing a GeoJSON Polygon
    municipios: string;
    microrregioes: string;
    mesorregioes: string;
    estados: string;
    regioes: string;
    geocodes: string;
    alterado: boolean;
    encerrado: boolean;
    created_at: string;  // ISO date string
    updated_at: string;  // ISO date string
    inicio: string;  // Date and time as a single string
    fim: string;  // Date and time as a single string
    icone: string;  // Base64-encoded image string
};

export interface IResponseAlertas{
    hoje:IResposneAlertasinterface[],
    futuro:IResposneAlertasinterface[],
}

export enum Filas{
    'Alertas' = 'Alertas'
}