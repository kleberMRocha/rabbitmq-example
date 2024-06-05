
export class Alerta{
    constructor(){}
    async getAlertasInmet(){
            const response = await fetch('https://apiprevmet3.inmet.gov.br/avisos/ativos')
            return response.json();
    }
}