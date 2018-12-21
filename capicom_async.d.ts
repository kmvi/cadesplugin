declare namespace CAPICOM {
    interface ICertificateAsync {
        Version: Promise<number>;
        Thumbprint: Promise<string>;
        SubjectName: Promise<string>;
    }

    interface ICertificatesAsync {
        Count: Promise<number>;
        Item(index: number): Promise<ICertificateAsync>;
        Find(findType: ValuesOf<CAPICOM_CERTIFICATE_FIND_TYPE>, varCriteria?: any, bFindValidOnly?: boolean): Promise<ICertificatesAsync>;
    }

    interface StoreAsync {
        Open(location?: ValuesOf<CAPICOM_STORE_LOCATION>, name?: ValuesOf<CAPICOM_STORE_NAME>, openMode?: ValuesOf<CAPICOM_STORE_OPEN_MODE>): Promise<void>;
        Close(): Promise<void>;
        Delete(): Promise<boolean>;
        Certificates: Promise<ICertificatesAsync>;
    }
}
