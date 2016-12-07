type ValuesOf<T> = T[keyof T];

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

    interface ICertificate {
        Version: number;
        Thumbprint: string;
    }

    interface Store {
        Open(location?: ValuesOf<StoreLocation>, name?: ValuesOf<StoreName>, openMode?: ValuesOf<StoreOpenMode>): void;
        Close(): void;
        Delete(): boolean;
        Import(encodedStore: string): void;
        Certificates: ICertificate[];
        Location: ValuesOf<StoreLocation>;
        Name: string;
    }
}