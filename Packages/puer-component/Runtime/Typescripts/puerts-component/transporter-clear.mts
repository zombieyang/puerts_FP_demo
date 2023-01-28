function TransporterClear(cls: any, transporter: CS.Puerts.Component.TsTransporter){
    if (!cls || !(cls as any).__transporter_clear){
        return;
    }
    (cls as any).__transporter_clear(transporter);
}

export default TransporterClear;