type ValuesOf<T> = T[keyof T];

declare namespace CADES_Plugin {
    interface ObjectNames {
        'CAPICOM.Store': CAPICOM.Store;
        'CAdESCOM.CPSigner': CAdESCOM.CPSigner;
        'CAdESCOM.About': CAdESCOM.About;
        'CAdESCOM.SignedXML': CAdESCOM.SignedXML;
        'CAdESCOM.HashedData': CAdESCOM.CPHashedData;
        'CAdESCOM.CadesSignedData': CAdESCOM.CadesSignedData;
    }

    interface ObjectNamesAsync {
        'CAPICOM.Store': CAPICOM.StoreAsync;
        'CAdESCOM.CPSigner': CAdESCOM.CPSignerAsync;
        'CAdESCOM.About': CAdESCOM.AboutAsync;
        'CAdESCOM.SignedXML': CAdESCOM.SignedXMLAsync;
        'CAdESCOM.HashedData': CAdESCOM.CPHashedDataAsync;
        'CAdESCOM.CadesSignedData': CAdESCOM.CadesSignedDataAsync;
    }

    interface LogLevel {
        LOG_LEVEL_DEBUG: 4;
        LOG_LEVEL_INFO: 2;
        LOG_LEVEL_ERROR: 1;
    }

    interface ISignedXmlUrls {
        XmlDsigGost3410Url: "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102001-gostr3411";
        XmlDsigGost3410UrlObsolete: "http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411";
        XmlDsigGost3411Url: "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr3411";
        XmlDsigGost3411UrlObsolete: "http://www.w3.org/2001/04/xmldsig-more#gostr3411";
    }
}

interface CADESPluginBase extends Promise<never>,
    CAPICOM.StoreLocation, CAPICOM.StoreName, CAPICOM.StoreOpenMode,
    CAPICOM.ICertificateFindType, CADES_Plugin.LogLevel,
    CADES_Plugin.ISignedXmlUrls, CAdESCOM.CADESCOM_CONTENT_ENCODING_TYPE,
    CAdESCOM.CADESCOM_CADES_TYPE {

    JSModuleVersion: string;
    current_log_level: number;
    async_spawn: <T> (generatorFun: (...args: any[]) => Iterator<T>) => T;
    set: (obj: CADESPluginBase) => void;
    set_log_level: (level: ValuesOf<CADES_Plugin.LogLevel>) => void;
    getLastError: (exception: Error) => string;
}

interface CADESPluginAsync extends CADESPluginBase {
    CreateObjectAsync: <T extends keyof CADES_Plugin.ObjectNamesAsync> (objname: T) => Promise<CADES_Plugin.ObjectNamesAsync[T]>;
}

interface CADESPluginSync extends CADESPluginBase {
    CreateObject: <T extends keyof CADES_Plugin.ObjectNames> (objname: T) => CADES_Plugin.ObjectNames[T];
}

declare module "cadesplugin" {
    export = cadesplugin;
}

type CADESPlugin = CADESPluginAsync | CADESPluginSync;

declare const cadesplugin: CADESPlugin;
