//First Party Imports
import { TDeviceType } from "../Types/TDeviceType"


export interface IDevice{
    name: string
    modelURI?: string
    imageURI: string
    type: TDeviceType
    category: string
    brand?: string
    description: string
}