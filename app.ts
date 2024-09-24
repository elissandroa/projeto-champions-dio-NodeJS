import express from 'express'
import { getPlayer } from './src/controllers/playersController'


function createApp() {
    const app = express()

    app.use(express.json())

    app.use('/api', getPlayer)

    return app
}

export default createApp