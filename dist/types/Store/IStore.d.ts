export interface IStore {
    getItem: (key: string) => Promise<any>;
    exist: (key: string) => Promise<boolean>;
    setItem: (key: string, item: any) => Promise<void>;
    getAllKeys: () => Promise<string[]>;
    deleteItem: (key: string) => Promise<void>;
}
//# sourceMappingURL=IStore.d.ts.map