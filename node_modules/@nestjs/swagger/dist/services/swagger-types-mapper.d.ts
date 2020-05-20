import { BaseParameterObject } from '../interfaces/open-api-spec.interface';
import { ParamWithTypeMetadata } from './parameter-metadata-accessor';
export declare class SwaggerTypesMapper {
    mapParamTypes(parameters: Array<ParamWithTypeMetadata | BaseParameterObject>): any;
    mapTypeToOpenAPIType(type: string | Function): string;
    isEnumArrayType(param: Record<string, any>): boolean;
    mapEnumArrayType(param: Record<string, any>, keysToRemove: string[]): {
        schema: {
            type: string;
            items: any;
        };
    };
    mapArrayType(param: ParamWithTypeMetadata, keysToRemove: string[]): any;
    hasSchemaDefinition(param: BaseParameterObject): param is BaseParameterObject;
    omitParamType(param: ParamWithTypeMetadata | BaseParameterObject): Pick<BaseParameterObject | ParamWithTypeMetadata, "required">;
}
