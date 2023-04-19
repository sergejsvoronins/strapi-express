export interface IAudios {
    data: IAudio[]
}
export interface IAudioSingle {
    data: IAudio
}
export interface IAudio {
    id?:number,
    name: string,
    description: string,
    maker: string,
    price: number,
    effect: number
}