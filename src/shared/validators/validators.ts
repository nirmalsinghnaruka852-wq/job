import type { Validator } from "./index"

export const  validators= (...validator:Validator[]) :Validator=>{
    return (value)=>{
        for(let i =0 ; i < validator.length ; i++){
            const error = validator[i]?.(value)
            if(error) return error 
        }
        return undefined
    }
}