let transporterObjs: {[key: number]: any} = {};

export function getTransporterObj<T>(transporter: CS.Puerts.Component.TsTransporter): T {
    return transporterObjs[transporter.GetHashCode()];
}

function ConvertValue(value: any, toTsValue?: (csValue: any)=>any): any{
    if (value && value.Transporter){
        return toTsValue ? toTsValue(getTransporterObj(value.Transporter)) : getTransporterObj(value.Transporter);
    }else if (value && value.Count && value.get_Item){
        var jsArrayValue = [];
        for(let i = 0; i < value.Count; i++){
            let ele = value.get_Item(i);
            let convertedEle = ConvertValue(ele, toTsValue);
            jsArrayValue.push(convertedEle);
        }
        return jsArrayValue;
    }
    return toTsValue ? toTsValue(value) : value;
}

export function Transporter(){
    return (ctor: new()=>any) => {
        (ctor as any).__transporter_clear = (transporter: CS.Puerts.Component.TsTransporter) =>{
            delete transporterObjs[transporter.GetHashCode()];
        }
        (ctor as any).__transporter_init = (transporter: CS.Puerts.Component.TsTransporter, properties: CS.System.Collections.Generic.List$1<CS.System.Tuple$2<string, any>>)=>{
            let o = new ctor();
            let propertiesOptions: {[key: string]: {
                key: string
                toTsValue?: (csValue: any)=>any
            }} = (o as any).__properties
            for(let i = 0; i < properties.Count; i++){
                let property = properties.get_Item(i);
                let value = property.Item2;
                let key: string;
                let toTsValue : (csValue: any)=>any;
                if (propertiesOptions && propertiesOptions[property.Item1]){
                    key = propertiesOptions[property.Item1].key;
                    toTsValue = propertiesOptions[property.Item1].toTsValue;
                }else{
                    key = property.Item1
                }
                o[key] = ConvertValue(value, toTsValue);
            }
            if (o.__hooks){
                Object.keys(o.__hooks).forEach(e=>{
                    transporter.RegisterHook(e, (args: CS.System.Array$1<any>) => {
                        let argsJsArr = [];
                        for(let i = 0; i < args.Length; i++){
                            argsJsArr.push(args.get_Item(i));
                        }
                        let key: string = o.__hooks[e].key;
                        if (!o[key]){
                            throw new Error("member not exist: " + e)
                        }
                        return (o[key] as (...args: any[])=>any).apply(o, argsJsArr);
                    });
                });
            }
            
            transporterObjs[transporter.GetHashCode()] = o;
        }
    }
}