import express from 'express'
import playersRouter from './src/routes/playersRoute'


function createApp() {
    const app = express()

    app.use(express.json())

    app.use('/api', playersRouter)

    return app
}

export default createApp