import { JsonSocket } from '../helpers/json-socket';
import { ReadPacket, WritePacket } from '../interfaces';
import { TcpClientOptions } from '../interfaces/client-metadata.interface';
import { ClientProxy } from './client-proxy';
export declare class ClientTCP extends ClientProxy {
    protected connection: Promise<any>;
    private readonly logger;
    private readonly port;
    private readonly host;
    private isConnected;
    private socket;
    constructor(options: TcpClientOptions['options']);
    connect(): Promise<any>;
    handleResponse(buffer: unknown): void;
    createSocket(): JsonSocket;
    close(): void;
    bindEvents(socket: JsonSocket): void;
    handleError(err: any): void;
    handleClose(): void;
    protected publish(partialPacket: ReadPacket, callback: (packet: WritePacket) => any): Function;
    protected dispatchEvent(packet: ReadPacket): Promise<any>;
}
