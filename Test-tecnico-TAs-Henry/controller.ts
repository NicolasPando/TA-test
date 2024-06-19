import axios from "axios"
import { Request, Response } from "express"
import 'dotenv/config'

interface usuario{
    id:string,
    first_name: string,
    last_name: string,
    email: string,
    gender: string
} 

export const peticion = async (req:Request, res:Response) => {
    try {
        const response = await axios.get("https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json")   
        const datos = response.data 
        const usuarios:usuario[] = datos.map((usuario:any)=>({
            id:usuario.id,
            first_name: usuario.first_name,
            last_name: usuario.last_name,
            email: usuario.email,
            gender: usuario.gender
        })) 
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({message:`Algo salió mal`})
    }
     
}