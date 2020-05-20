import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';
export declare class InvalidKafkaClientTopicPartitionException extends RuntimeException {
    constructor(topic?: string);
}
