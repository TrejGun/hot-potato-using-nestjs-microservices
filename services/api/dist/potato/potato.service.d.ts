import { ClientProxy } from "@nestjs/microservices";
export interface IMessage {
    server: string;
}
export declare class PotatoService {
    client: ClientProxy;
    play(): Promise<IMessage>;
}
