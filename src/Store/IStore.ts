export interface IStore {
  getItem: (key: string) => Promise<unknown>
  exist: (key: string) => Promise<boolean>
  setItem: (key: string, item: unknown) => Promise<void>
  getAllKeys: () => Promise<string[]>
  deleteItem: (key: string) => Promise<void>
}