declare namespace CAdESCOM {
    interface CPSignerAsync {
        readonly Certificate: Promise<CAPICOM.ICertificateAsync>;
        propset_Certificate(certificate: CAPICOM.ICertificateAsync): Promise<void>;
        Display(hwndParent?: number, title?: string): Promise<void>;
        Load(fileName: string, password?: string): Promise<void>;
        //AuthenticatedAttributes
        //AuthenticatedAttributes2
        //Chain
        readonly CheckCertificate: Promise<boolean>;
        propset_CheckCertificate(checkCertificate: boolean): Promise<void>;
        //CRLs;
        readonly KeyPin: Promise<string>;
        propset_KeyPin(keyPin: string): Promise<void>
        //OCSPResponses
        readonly Options: Promise<ValuesOf<CAPICOM.CAPICOM_CERTIFICATE_INCLUDE_OPTION>>;
        propset_Options(options: ValuesOf<CAPICOM.CAPICOM_CERTIFICATE_INCLUDE_OPTION>): Promise<void>
        //SignatureStatus
        readonly SignatureTimeStampTime: Promise<VarDate>;
        readonly SigningTime: Promise<VarDate>;
        readonly TSAAddress: Promise<string>;
        propset_TSAAddress(TSAAddress: string): Promise<void>;
        //UnauthenticatedAttributes 
    }

    interface CadesSignedDataAsync {
        Display(hwndParent?: number, title?: string): Promise<void>;
        EnhanceCades(cadesType?: ValuesOf<CADESCOM_CADES_TYPE>, TSAAddress?: string, encodingType?: ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): Promise<string>;
        //Sign
        //SignHash
        //Verify
        //VerifyHash
        readonly Certificates: Promise<CAPICOM.ICertificates>;
        readonly DisplayData: Promise<ValuesOf<CADESCOM_DISPLAY_DATA>>;
        propset_DisplayData(displayData: ValuesOf<CADESCOM_DISPLAY_DATA>): Promise<void>;
        //Signers
        readonly Content: Promise<string>;
        propset_Content(content: string): Promise<void>;
        readonly ContentEncoding: Promise<ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>>;
        propset_ContentEncoding(contentEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>): Promise<void>;
        SignCades(signer?: CPSignerAsync, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean, EncodingType?: ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): Promise<string>
        VerifyCades(SignedMessage: string, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean): Promise<void>;
    }

    interface VersionAsync {
        toString(): Promise<string>;
        readonly BuildVersion: Promise<number>;
        readonly MajorVersion: Promise<number>;
        readonly MinorVersion: Promise<number>;
        readonly toStringDefault: Promise<string>;
    }

    interface AboutAsync {
        CSPName(ProviderType?: number): Promise<string>;
        CSPVersion(ProviderName?: string, ProviderType?: number): Promise<VersionAsync>;
        ProviderVersion(ProviderName?: string, ProviderType?: number): Promise<string>;
        readonly BuildVersion: Promise<number>;
        readonly MajorVersion: Promise<number>;
        readonly MinorVersion: Promise<number>;
        readonly PluginVersion: Promise<VersionAsync>;
        readonly Version: Promise<string>;
    }

    interface SignersAsync {
        readonly Count: Promise<number>;
        Item(index: number): Promise<CPSigner>;
    }

    interface SignedXMLAsync {
        Sign(signer?: CPSignerAsync, XPath?: string): Promise<string>;
        Verify(SignedMessage: string, XPath?: string): Promise<void>;
        readonly Content: Promise<string>;
        propset_Content(content: string): Promise<void>;
        readonly DigestMethod: Promise<string>;
        propset_DigestMethod(digestMethod: string): Promise<void>;
        readonly SignatureMethod: Promise<string>;
        propset_SignatureMethod(signatureMethod: string): Promise<void>;
        readonly SignatureType: Promise<ValuesOf<CADESCOM_XML_SIGNATURE_TYPE>>;
        propset_SignatureType(signatureType: ValuesOf<CADESCOM_XML_SIGNATURE_TYPE>): Promise<void>;
        readonly Signers: Promise<SignersAsync>;
    }

    interface CPHashedDataAsync {
        Hash(newVal: string): Promise<void>;
        SetHashValue(newVal: string): Promise<void>;
        readonly Algorithm: Promise<ValuesOf<CAPICOM.CAPICOM_HASH_ALGORITHM>>;
        propset_Algorithm(algorithm: ValuesOf<CAPICOM.CAPICOM_HASH_ALGORITHM>): Promise<void>;
        readonly DataEncoding: Promise<ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>>;
        propset_DataEncoding(dataEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>): Promise<void>;
        readonly Value: Promise<string>;
    }

    interface CPAttributeAsync {
        readonly Name: Promise<ValuesOf<CADESCOM_ATTRIBUTE>>;
        propset_Name(name: ValuesOf<CADESCOM_ATTRIBUTE>): Promise<void>;
        //OID: ValuesOf<CAPICOM.IOID>;
        readonly Value: Promise<any>;
        propset_Value(value: any): Promise<void>;
        readonly ValueEncoding: Promise<ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>>;
        propset_ValueEncoding(valueEncoding: ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): Promise<void>;
    }

    interface RawSignatureAsync {
        SignHash(hash: CPHashedDataAsync, certificate?: string): Promise<string>;
        VerifyHash(hash: CPHashedDataAsync, certificate: CAPICOM.ICertificateAsync, signature: string): Promise<void>;
    }
}
