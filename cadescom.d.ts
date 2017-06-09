declare namespace CAdESCOM {
    interface CADESCOM_CADES_TYPE {
        CADESCOM_CADES_BES: 1;
        CADESCOM_CADES_DEFAULT: 0;
        CADESCOM_CADES_T: 5;
        CADESCOM_CADES_X_LONG_TYPE_1: 93;
    }

    interface CAPICOM_ENCODING_TYPE {
        CAPICOM_ENCODE_ANY: -1;
        CAPICOM_ENCODE_BASE64: 0;
        CAPICOM_ENCODE_BINARY: 1;
    }

    interface CADESCOM_CONTENT_ENCODING_TYPE {
        CADESCOM_BASE64_TO_BINARY: 1;
        CADESCOM_STRING_TO_UCS2LE: 0;
    }

    interface CADESCOM_XML_SIGNATURE_TYPE {
        CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED: 0;
        CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING: 1;
        CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE: 2;
    }

    interface CPSigner {
        Certificate: CAPICOM.ICertificate;
    }

    interface CPSignerAsync {
        Certificate: Promise<CAPICOM.ICertificateAsync>;
        propset_Certificate(certificate: CAPICOM.ICertificateAsync): Promise<void>;
    }

    interface CadesSignedData {
        Content: string;
        ContentEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>;
        SignCades(signer?: CPSigner, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean, EncodingType?: ValuesOf<CAPICOM_ENCODING_TYPE>): string;
        VerifyCades(SignedMessage: string, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean): void;
    }

    interface CadesSignedDataAsync {
        Content: Promise<string>;
        propset_Content(content: string): Promise<void>;
        ContentEncoding: Promise<ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>>;
        propset_ContentEncoding(contentEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>): Promise<void>;
        SignCades(signer?: CPSignerAsync, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean, EncodingType?: ValuesOf<CAPICOM_ENCODING_TYPE>): Promise<string>
        VerifyCades(SignedMessage: string, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean): Promise<void>;
    }

    interface Version {
        toString(): string;
        BuildVersion: number;
        MajorVersion: number;
        MinorVersion: number;
        toStringDefault: string;
    }

    interface VersionAsync {
        toString(): Promise<string>;
        BuildVersion: Promise<number>;
        MajorVersion: Promise<number>;
        MinorVersion: Promise<number>;
        toStringDefault: Promise<string>;
    }

    interface About {
        CSPName(ProviderType?: number): string;
        CSPVersion(ProviderName?: string, ProviderType?: number): Version;
        ProviderVersion(ProviderName?: string, ProviderType?: number): string;
        BuildVersion: number;
        MajorVersion: number;
        MinorVersion: number;
        PluginVersion: Version;
        Version: string;
    }

    interface AboutAsync {
        CSPName(ProviderType?: number): Promise<string>;
        CSPVersion(ProviderName?: string, ProviderType?: number): Promise<VersionAsync>;
        ProviderVersion(ProviderName?: string, ProviderType?: number): Promise<string>;
        BuildVersion: Promise<number>;
        MajorVersion: Promise<number>;
        MinorVersion: Promise<number>;
        PluginVersion: Promise<VersionAsync>;
        Version: Promise<string>;
    }

    interface Signers {
        Count: number;
        Item(index: number): CPSigner;
    }

    interface SignersAsync {
        Count: Promise<number>;
        Item(index: number): Promise<CPSigner>;
    }

    interface SignedXML {
        Sign(signer?: CPSigner, XPath?: string): string;
        Verify(SignedMessage: string, XPath?: string): void;
        Content: string;
        DigestMethod: string;
        SignatureMethod: string;
        SignatureType: ValuesOf<CADESCOM_XML_SIGNATURE_TYPE>;
        Signers: Signers;
    }

    interface SignedXMLAsync {
        Sign(signer?: CPSignerAsync, XPath?: string): Promise<string>;
        Verify(SignedMessage: string, XPath?: string): Promise<void>;
        Content: Promise<string>;
        propset_Content(content: string): Promise<void>;
        DigestMethod: Promise<string>;
        propset_DigestMethod(digestMethod: string): Promise<void>;
        SignatureMethod: Promise<string>;
        propset_SignatureMethod(signatureMethod: string): Promise<void>;
        SignatureType: Promise<ValuesOf<CADESCOM_XML_SIGNATURE_TYPE>>;
        propset_SignatureType(signatureType: ValuesOf<CADESCOM_XML_SIGNATURE_TYPE>): Promise<void>;
        Signers: Promise<SignersAsync>;
    }

    interface CPHashedData {
        Hash(newVal: string): void;
        SetHashValue(newVal: string): void;
        Algorithm: ValuesOf<CAPICOM.CAPICOM_HASH_ALGORITHM>;
        DataEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>;
        Value: string;
    }

    interface CPHashedDataAsync {
        Hash(newVal: string): Promise<void>;
        SetHashValue(newVal: string): Promise<void>;
        Algorithm: Promise<ValuesOf<CAPICOM.CAPICOM_HASH_ALGORITHM>>;
        propset_Algorithm(algorithm: ValuesOf<CAPICOM.CAPICOM_HASH_ALGORITHM>): Promise<void>;
        DataEncoding: Promise<ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>>;
        propset_DataEncoding(dataEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>): Promise<void>;
        Value: Promise<string>;
    }
}