/// <reference types="csharp" />
export interface PropertyOptions {
    name?: string;
    toTsValue?: (csValue: any) => any;
    [key: string]: any;
}
declare type PropertyType = typeof CS.UnityEngine.Object | typeof CS.UnityEngine.Color | typeof CS.UnityEngine.Vector2 | typeof CS.UnityEngine.Vector3 | typeof CS.System.Int32 | typeof CS.System.String | typeof CS.System.Boolean | typeof CS.System.Double | typeof CS.System.Single | typeof CS.System.Int64;
export declare function ListProperty(type: PropertyType | typeof CS.System.Object, dimension?: number, options?: PropertyOptions): (target: any, propertyKey: string) => void;
export declare function Property(type: PropertyType | typeof CS.System.Object, options?: PropertyOptions): (target: any, propertyKey: string) => void;
export {};
