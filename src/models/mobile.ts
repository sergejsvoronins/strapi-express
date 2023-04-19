export interface IMobiles {
    data: IMobile[]
}
export interface IMobileSingle {
    data: IMobile
}
export interface IMobile {
    id?:number,
    name: string,
    description: string,
    maker: string,
    price: number,
    screenType: string
}