declare namespace CAdESCOM {
    interface CPSigner {
        Display(hwndParent?: number, title?: string): void;
        Load(fileName: string, password?: string): void;
        //AuthenticatedAttributes
        //AuthenticatedAttributes2
        Certificate: CAPICOM.ICertificate;
        //Chain
        CheckCertificate: boolean;
        //CRLs;
        KeyPin: string;
        //OCSPResponses
        Options: CAPICOM.CAPICOM_CERTIFICATE_INCLUDE_OPTION;
        //SignatureStatus
        readonly SignatureTimeStampTime: VarDate;
        readonly SigningTime: VarDate;
        TSAAddress: string;
        //UnauthenticatedAttributes 
    }

    interface CadesSignedData {
        Display(hwndParent?: number, title?: string): void;
        EnhanceCades(cadesType?: CADESCOM_CADES_TYPE, TSAAddress?: string, encodingType?: CAPICOM.CAPICOM_ENCODING_TYPE): string;
        //Sign
        SignCades(signer?: CPSigner, CadesType?: CADESCOM_CADES_TYPE, bDetached?: boolean, EncodingType?: CAPICOM.CAPICOM_ENCODING_TYPE): string;
        //SignHash
        //Verify
        VerifyCades(SignedMessage: string, CadesType?: CADESCOM_CADES_TYPE, bDetached?: boolean): void;
        //VerifyHash
        readonly Certificates: CAPICOM.ICertificates;
        Content: string;
        ContentEncoding: CADESCOM_CONTENT_ENCODING_TYPE;
        DisplayData: CADESCOM_DISPLAY_DATA;
        //Signers
    }

    interface Version {
        toString(): string;
        readonly BuildVersion: number;
        readonly MajorVersion: number;
        readonly MinorVersion: number;
        readonly toStringDefault: string;
    }

    interface About {
        CSPName(ProviderType?: number): string;
        CSPVersion(ProviderName?: string, ProviderType?: number): Version;
        ProviderVersion(ProviderName?: string, ProviderType?: number): string;
        readonly BuildVersion: number;
        readonly MajorVersion: number;
        readonly MinorVersion: number;
        readonly PluginVersion: Version;
        readonly Version: string;
    }

    interface CPSigners {
        readonly Count: number;
        Item(index: number): CPSigner;
    }

    interface SignedXML {
        Sign(signer?: CPSigner, XPath?: string): string;
        Verify(SignedMessage: string, XPath?: string): void;
        Content: string;
        DigestMethod: string;
        SignatureMethod: string;
        SignatureType: CADESCOM_XML_SIGNATURE_TYPE;
        readonly Signers: CAPICOM.Signers;
    }

    interface CPHashedData {
        Hash(newVal: string): void;
        SetHashValue(newVal: string): void;
        Algorithm: CAPICOM.CAPICOM_HASH_ALGORITHM;
        DataEncoding: CADESCOM_CONTENT_ENCODING_TYPE;
        Value: string;
    }

    interface CPAttribute {
        Name: CADESCOM_ATTRIBUTE;
        //OID: CAPICOM.IOID>;
        Value: any;
        ValueEncoding: CAPICOM.CAPICOM_ENCODING_TYPE;
    }

    interface RawSignature {
        SignHash(hash: CPHashedData, certificate?: string): string;
        VerifyHash(hash: CPHashedData, certificate: CAPICOM.ICertificate, signature: string): void;
    }
}
