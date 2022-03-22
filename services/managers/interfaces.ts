export interface IManager {
    resource: string
    total: number
    // ! to fix: Set abstract interface for api responses
    fetchData: () => Promise<any[]>
    getData: () => Promise<any[]>
}