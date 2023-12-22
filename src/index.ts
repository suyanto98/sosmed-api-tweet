import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import usersRouters from './routers/usersRouters'

const PORT = 4000
const app = express()

// menghubungkan antara backend dan frontend
app.use(cors())

// middleware untuk membaca req body
app.use(express.json())

app.use("/users", usersRouters)

// middleware error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).send(err.message)
})

app.listen(PORT, () => {
    console.log(`server runinng on port : ${PORT}`)
})