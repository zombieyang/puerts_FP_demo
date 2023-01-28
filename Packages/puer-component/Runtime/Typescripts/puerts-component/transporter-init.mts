function TransporterInit(cls: any, transporter: CS.Puerts.Component.TsTransporter, args: CS.System.Collections.Generic.List$1<CS.System.Tuple$2<string, any>>, hookNames: CS.System.Collections.Generic.List$1<string>){
    if (!cls){
        throw new Error("class is null or undefined");
    }
    if (!(cls as any).__transporter_init){
        throw new Error("class doesn't decorated by @Transporter: ");
    }
    (cls as any).__transporter_init(transporter, args, hookNames);
}

export default TransporterInit; 