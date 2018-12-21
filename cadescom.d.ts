declare namespace CAdESCOM {
    interface CPSigner {
        Certificate: CAPICOM.ICertificate;
    }

    interface CadesSignedData {
        Content: string;
        ContentEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>;
        SignCades(signer?: CPSigner, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean, EncodingType?: ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): string;
        VerifyCades(SignedMessage: string, CadesType?: ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean): void;
    }

    interface Version {
        toString(): string;
        BuildVersion: number;
        MajorVersion: number;
        MinorVersion: number;
        toStringDefault: string;
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

    interface Signers {
        Count: number;
        Item(index: number): CPSigner;
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

    interface CPHashedData {
        Hash(newVal: string): void;
        SetHashValue(newVal: string): void;
        Algorithm: ValuesOf<CAPICOM.CAPICOM_HASH_ALGORITHM>;
        DataEncoding: ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>;
        Value: string;
    }
}
