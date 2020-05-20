import { PipeTransform, Type } from '@nestjs/common';
export declare function Payload(): ParameterDecorator;
export declare function Payload(...pipes: (Type<PipeTransform> | PipeTransform)[]): ParameterDecorator;
