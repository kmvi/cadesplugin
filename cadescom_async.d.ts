declare namespace CAdESCOM {
    interface CPSignerAsync {
        Certificate: Promise<CAPICOM.ICertificateAsync>;
        propset_Certificate(certificate: CAPICOM.ICertificateAsync): Promise<void>;
    }

    interface CadesSignedDataAsync {
        Content: Promise<string>;
        propset_Content(content: string): Promise<void>;
        ContentEncoding: Promise<ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>>;
        propset_ContentEncoding(contentEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>): Promise<void>;
        SignCades(signer?: CPSignerAsync, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean, EncodingType?: ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): Promise<string>
        VerifyCades(SignedMessage: string, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean): Promise<void>;
    }

    interface VersionAsync {
        toString(): Promise<string>;
        BuildVersion: Promise<number>;
        MajorVersion: Promise<number>;
        MinorVersion: Promise<number>;
        toStringDefault: Promise<string>;
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

    interface SignersAsync {
        Count: Promise<number>;
        Item(index: number): Promise<CPSigner>;
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
