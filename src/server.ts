import express, {Request, Response, json} from 'express'


const app = express()

app.use(json())


const port = process.env.PORT


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ player: "Lionel Messi" })
})




app.listen(port, () => {
    console.log(`Rodando na porta: ${port}!`)
})

