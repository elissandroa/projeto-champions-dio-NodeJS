import { noContent, ok } from "../utils/httpHelper"

export const getPlayerData = async () => {
   const data =  {player: 'Ronaldo'}
   let response = null
   if(data) {
    response = await ok(data)
   } else {
    response = await noContent()
   }

   return response
}