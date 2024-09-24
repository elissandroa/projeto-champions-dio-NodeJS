import * as playerRepository from "../repositories/playerRepository"
import * as HttpResponse from "../utils/httpHelper"

export const getPlayerData = async () => {
   const data = await playerRepository.findAllPlayers()
   let response = null
   if (data) {
      response = await HttpResponse.ok(data)
   } else {
      response = await HttpResponse.noContent()
   }

   return response
}


export const getPlayerByIdService = async (id: number) => {
   const data = await playerRepository.findPlayerById(id)
   let response = null
   if (data) {
      response = await HttpResponse.ok(data)
   } else {
      response = await HttpResponse.noContent()
   }
   return response
}