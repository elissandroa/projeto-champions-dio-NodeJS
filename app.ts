import express from 'express'
import playersRouter from './src/routes/playersRoute'
import cors from 'cors'


function createApp() {
    const app = express()

    app.use(express.json())

    app.use('/api', playersRouter)

    app.use(cors())

    return app
}

export default createApp