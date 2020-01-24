declare namespace CAPICOM {
    interface ICertificateAsync {
        readonly Version: Promise<number>;
        readonly Thumbprint: Promise<string>;
        readonly SubjectName: Promise<string>;
    }

    interface ICertificatesAsync {
        readonly Count: Promise<number>;
        Item(index: number): Promise<ICertificateAsync>;
        Find(findType: CAPICOM_CERTIFICATE_FIND_TYPE, varCriteria?: any, bFindValidOnly?: boolean): Promise<ICertificatesAsync>;
    }

    interface StoreAsync {
        Open(location?: CAPICOM_STORE_LOCATION, name?: CAPICOM_STORE_NAME, openMode?: CAPICOM_STORE_OPEN_MODE): Promise<void>;
        Close(): Promise<void>;
        Delete(): Promise<boolean>;
        readonly Certificates: Promise<ICertificatesAsync>;
    }
}
