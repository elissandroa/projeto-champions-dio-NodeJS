import * as playerRepository from "../repositories/playerRepository"
import { noContent, ok } from "../utils/httpHelper"

export const getPlayerData = async () => {
   const data =  await playerRepository.findAllPlayers()
   let response = null
   if(data) {
    response = await ok(data)
   } else {
    response = await noContent()
   }

   return response
}