declare namespace CAPICOM {
    type VarDate = object;

    interface ICertificate {
        readonly Version: number;
        readonly Thumbprint: string;
        readonly SubjectName: string;
        readonly SerialNumber: string;
        readonly IssuerName: string;
        readonly ValidFromDate: VarDate;
        readonly ValidToDate: VarDate;
        HasPrivateKey(): boolean;
        //GetInfo(infoType: CAPICOM_CERT_INFO_TYPE): string;
        IsValid(): ICertificateStatus;
        Display(): void;
    }

    interface ICertificateStatus {
        // TODO
    }

    interface ICertificates {
        Count: number;
        Item(index: number): ICertificate;
        Find(findType: ValuesOf<CAPICOM_CERTIFICATE_FIND_TYPE>, varCriteria?: any, bFindValidOnly?: boolean): ICertificates;
        Select(title?: string, displayString?: string, bMultiSelect?: boolean): ICertificates;
    }

    interface Store {
        Open(location?: ValuesOf<CAPICOM_STORE_LOCATION>, name?: ValuesOf<CAPICOM_STORE_NAME>, openMode?: ValuesOf<CAPICOM_STORE_OPEN_MODE>): void;
        Close(): void;
        Delete(): boolean;
        Import(encodedStore: string): void;
        Certificates: ICertificates;
        Location: ValuesOf<CAPICOM_STORE_LOCATION>;
        Name: string;
    }
}
