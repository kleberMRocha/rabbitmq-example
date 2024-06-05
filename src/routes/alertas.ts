import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Alerta } from "../models/Alerta";
import { RabbitmqClient } from '../models/Rabbitmq';
import { Filas } from "../models/types";

export default async function AlertaRoute(app: FastifyInstance){
    const alerta = new Alerta();

    app.get('/getAlertas', async (request: FastifyRequest, response: FastifyReply) => {
        try {
            const alertLis = await alerta.getAlertasInmet();
            const rabbitmq = new RabbitmqClient('amqp://guest:guest@localhost:5672');
            await rabbitmq.startServer();

            await rabbitmq.publishInQueue(Filas.Alertas, JSON.stringify(alertLis));

            response.status(200).send(alertLis);
        } catch (error) {
            response.status(500).send(error);
        }
    
    })

};