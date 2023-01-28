let List = puer.$generic(CS.System.Collections.Generic.List$1, CS.Puerts.Component.TsEditorBase.Property)
let Dictionary = puer.$generic(CS.System.Collections.Generic.Dictionary$2, CS.System.String, CS.System.Object);

function PropertiesPick(cls: any): CS.System.Collections.Generic.List$1<CS.Puerts.Component.TsEditorBase.Property> {
    if (!cls) {
        throw new Error("class is null or undefined");
    }
    let o = new cls();

    var ret = new List<CS.Puerts.Component.TsEditorBase.Property>();
    if (!o.__properties) {
        return ret;
    }
    let propertyKeys = Object.keys(o.__properties);
    propertyKeys.forEach(e => {
        const property = new CS.Puerts.Component.TsEditorBase.Property();
        let type = o.__properties[e].type;
        let options = o.__properties[e].options;
        if (options) {
            const optDict = new Dictionary<string, any>();
            Object.keys(options).forEach(key => {
                optDict.Add(key, options[key]);
            });
            property.options = optDict;
        }
        property.type = type;
        property.name = (options && options.name) ? options.name : e;
        ret.Add(property);
    });
    return ret;
}


export default PropertiesPick;