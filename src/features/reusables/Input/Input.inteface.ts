import {ChangeEvent} from 'react'

export interface InputTypes {
    value:string,
    change: (e: ChangeEvent<HTMLInputElement>) => void,
    blur:()=>void,
    label:string,
    id:string,
    name:string,
    placeholder:string,
    type:string
}