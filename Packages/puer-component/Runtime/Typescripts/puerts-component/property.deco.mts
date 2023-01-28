export interface PropertyOptions {
    name?: string;
    toTsValue?: (csValue: any)=>any;
    [key: string]: any;
}

type PropertyType = typeof CS.UnityEngine.Object 
    | typeof CS.UnityEngine.Color 
    | typeof CS.UnityEngine.Vector2 
    | typeof CS.UnityEngine.Vector3 
    | typeof CS.System.Int32 
    | typeof CS.System.String 
    | typeof CS.System.Boolean 
    | typeof CS.System.Double 
    | typeof CS.System.Single 
    | typeof CS.System.Int64 

export function ListProperty(type: PropertyType | typeof CS.System.Object, dimension: number = 1, options?: PropertyOptions){
    return !CS.UnityEngine.Application.isEditor ? 
    (target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            key: propertyKey
        };
        if (options && options.toTsValue){
            target["__properties"][name].toTsValue = options.toTsValue;
            delete options.toTsValue;
        }
    }
    :(target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        for(var i = 0; i < dimension; i++){
            type = puer.$generic(CS.System.Collections.Generic.List$1, type);
        }
        target["__properties"][name] = {
            type: puer.$typeof(type),
            options: options,
            key: propertyKey
        }
        if (options && options.toTsValue){
            target["__properties"][name].toTsValue = options.toTsValue;
            delete options.toTsValue;
        }
    }
}

export function Property(type: PropertyType | typeof CS.System.Object, options?: PropertyOptions){
    return !CS.UnityEngine.Application.isEditor ? 
    (target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            propertyKey
        };
        if (options && options.toTsValue){
            target["__properties"][name].toTsValue = options.toTsValue;
            delete options.toTsValue;
        }
    }
    :(target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            type: puer.$typeof(type),
            options: options,
            key: propertyKey
        }
        if (options && options.toTsValue){
            target["__properties"][name].toTsValue = options.toTsValue;
            delete options.toTsValue;
        }
    }
}

