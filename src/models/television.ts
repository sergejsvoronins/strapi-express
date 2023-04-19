export interface ITelevisions {
    data: ITelevision[]
}
export interface ITelevisionSingle {
    data: ITelevision
}
export interface ITelevision {
    id?:number,
    name: string,
    description: string,
    maker: string,
    price: number,
    screenSize: number
}