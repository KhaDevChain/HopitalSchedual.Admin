import {Buffer} from 'buffer'
export const base64ImageSource= (bas64String:string) =>{
    var base64string_buffer = Buffer.from(bas64String, "base64")
    return base64string_buffer
}