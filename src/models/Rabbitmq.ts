import { Channel, Connection, connect } from "amqplib";

export class RabbitmqClient{
    constructor(uri: string){ 
        this.uri = uri; 
    }

    public conection!: Connection;
    public channel!: Channel;
    private uri: string;

    async startServer():Promise<void>{
        this.conection = await connect(this.uri);
        this.channel = await this.conection.createConfirmChannel();
    }

    async publishInQueue(queue:string, message:string){
       return  this.channel.sendToQueue(queue, Buffer.from(message));
    }
}