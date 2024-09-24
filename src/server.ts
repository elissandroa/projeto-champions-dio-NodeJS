import {Request, Response} from 'express'

const app = express()

const port = process.env.PORT


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "Funcionando" })
})




app.listen(port, () => {
    console.log(`Rodando na porta: ${port}!`)
})

