import { BaseRpcContext } from './base-rpc.context';
declare type NatsContextArgs = [string];
export declare class NatsContext extends BaseRpcContext<NatsContextArgs> {
    constructor(args: NatsContextArgs);
    /**
     * Returns the name of the subject.
     */
    getSubject(): string;
}
export {};
