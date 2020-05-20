import { ClientProxy } from "@nestjs/microservices";
export interface IPayload {
    server: string;
}
export interface IMessage {
    server: string;
}
export declare class PotatoService {
    client: ClientProxy;
    play(payload: IPayload): Promise<IMessage>;
}
