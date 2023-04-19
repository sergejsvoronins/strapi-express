export interface IComputers {
    data: IComputer[]
}
export interface IComputerSingle {
    data: IComputer
}
export interface IComputer {
    id?:number,
    name: string,
    description: string,
    maker: string,
    price: number,
    screenType: string
}