import { IMessage, PotatoService } from "./potato.service";
export declare class PotatoController {
    private potatoService;
    constructor(potatoService: PotatoService);
    start(): Promise<IMessage>;
}
