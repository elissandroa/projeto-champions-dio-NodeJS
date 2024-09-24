import { ClubModel } from "../models/clubModel"

const database = [
    { id: 1, name: "Real Madrid" },
    { id: 2, name: "Barcelona" },
    { id: 3, name: "Manchester United" },
    { id: 4, name: "Liverpool" },
    { id: 5, name: "Bayern Munich" },
    { id: 6, name: "Paris Saint-Germain" },
    { id: 7, name: "Juventus" },
    { id: 8, name: "Chelsea" },
    { id: 9, name: "Manchester City" },
    { id: 10, name: "AC Milan" },
    { id: 11, name: "Inter Milan" },
    { id: 12, name: "Arsenal" },
    { id: 13, name: "Atlético Madrid" },
    { id: 14, name: "Borussia Dortmund" },
    { id: 15, name: "Tottenham Hotspur" },
    { id: 16, name: "Ajax" },
    { id: 17, name: "Sevilla" },
    { id: 18, name: "Napoli" },
    { id: 19, name: "RB Leipzig" },
    { id: 20, name: "Porto" }
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database
}