import express from "express"
import { peticion } from "./controller"
import 'dotenv/config'

const app = express()

const port = process.env.port || 3000

app.use("/soyTA", peticion)

app.listen(port, () => {
    console.log(`server listening ${port}`)
})