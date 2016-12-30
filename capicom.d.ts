declare namespace CAPICOM {
    interface StoreLocation {
        CAPICOM_MEMORY_STORE: 0;
        CAPICOM_LOCAL_MACHINE_STORE: 1;
        CAPICOM_CURRENT_USER_STORE: 2;
        CAPICOM_ACTIVE_DIRECTORY_USER_STORE: 3;
        CAPICOM_SMART_CARD_USER_STORE: 4;
    }

    interface StoreName {
        CAPICOM_CA_STORE: 'Ca';
        CAPICOM_MY_STORE: 'My';
        CAPICOM_OTHER_STORE: 'AddressBook';
        CAPICOM_ROOT_STORE: 'Root';
    }

    interface StoreOpenMode {
        CAPICOM_STORE_OPEN_READ_ONLY: 0;
        CAPICOM_STORE_OPEN_READ_WRITE: 1;
        CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED: 2;
        CAPICOM_STORE_OPEN_EXISTING_ONLY: 128;
        CAPICOM_STORE_OPEN_INCLUDE_ARCHIVED: 256;
    }

    interface ICertificateFindType {
        CAPICOM_CERTIFICATE_FIND_SHA1_HASH: 0;
        CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME: 1;
        CAPICOM_CERTIFICATE_FIND_ISSUER_NAME: 2;
        CAPICOM_CERTIFICATE_FIND_ROOT_NAME: 3;
        CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME: 4;
        CAPICOM_CERTIFICATE_FIND_EXTENSION: 5;
        CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY: 6;
        CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY: 7;
        CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY: 8;
        CAPICOM_CERTIFICATE_FIND_TIME_VALID: 9;
        CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID: 10;
        CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED: 11;
        CAPICOM_CERTIFICATE_FIND_KEY_USAGE: 12;
    }

    interface CAPICOM_HASH_ALGORITHM {
        
    }

    interface ICertificate {
        Version: number;
        Thumbprint: string;
    }

    interface ICertificateAsync {
        Version: Promise<number>;
        Thumbprint: Promise<string>;
    }

    interface ICertificates {
        Count: number;
        Item: ICertificate[];
        Find(findType: ValuesOf<ICertificateFindType>, varCriteria?: any, bFindValidOnly?: boolean): ICertificates;
    }

    interface ICertificatesAsync {
        Count: Promise<number>;
        Item(index: number): Promise<ICertificateAsync>;
        Find(findType: ValuesOf<ICertificateFindType>, varCriteria?: any, bFindValidOnly?: boolean): Promise<ICertificatesAsync>;
    }

    interface Store {
        Open(location?: ValuesOf<StoreLocation>, name?: ValuesOf<StoreName>, openMode?: ValuesOf<StoreOpenMode>): void;
        Close(): void;
        Delete(): boolean;
        Import(encodedStore: string): void;
        Certificates: ICertificates;
        Location: ValuesOf<StoreLocation>;
        Name: string;
    }

    interface StoreAsync {
        Open(location?: ValuesOf<StoreLocation>, name?: ValuesOf<StoreName>, openMode?: ValuesOf<StoreOpenMode>): Promise<void>;
        Close(): Promise<void>;
        Delete(): Promise<boolean>;
        Certificates: Promise<ICertificatesAsync>;
    }

}