interface IStorageProvider {
    save(file: string, folder?: string, filename?: string): Promise<string>;
    delete(file: string, folder?: string): Promise<void>;
    download(file: string, folder?: string): any;
}

export { IStorageProvider };
