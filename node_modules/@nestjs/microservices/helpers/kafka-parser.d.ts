/// <reference types="node" />
export declare class KafkaParser {
    static parse<T = any>(data: any): T;
    static decode(value: Buffer): object | string | null;
}
