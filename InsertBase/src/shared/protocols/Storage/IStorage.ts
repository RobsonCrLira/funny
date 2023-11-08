export interface StorageProviderDTO {
    file: string;
    folder: string;
    filename: string;
}
interface IStorageProvider {
    save(data: StorageProviderDTO): Promise<string>;
    delete(data: StorageProviderDTO): Promise<void>;
}

export { IStorageProvider };
