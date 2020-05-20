import { IMessage, IPayload, PotatoService } from "./potato.service";
export declare class PotatoController {
    private potatoService;
    constructor(potatoService: PotatoService);
    start(payload: IPayload): Promise<IMessage>;
}
