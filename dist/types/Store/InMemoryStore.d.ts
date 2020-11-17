import { IStore } from "./IStore";
export declare class InMemoryStore implements IStore {
    private _map;
    getItem(key: string): Promise<any>;
    exist(key: string): Promise<boolean>;
    setItem(key: string, item: any): Promise<void>;
    getAllKeys(): Promise<string[]>;
    deleteItem(key: string): Promise<void>;
}
//# sourceMappingURL=InMemoryStore.d.ts.map