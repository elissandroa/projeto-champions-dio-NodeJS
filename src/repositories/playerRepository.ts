interface PlayerModel {
    id: number;
    name: string;
}

const database: PlayerModel[] = [
    {id: 1, name: "Messi"},
    {id: 2, name: "Cristiano Ronaldo"},
    {id: 3, name: "Kylian Mbappé"},
    {id: 4, name: "Neymar Jr."},
    {id: 5, name: "Kevin De Bruyne"},
    {id: 6, name: "Robert Lewandowski"},
    {id: 7, name: "Mohamed Salah"},
    {id: 8, name: "Virgil van Dijk"},
    {id: 9, name: "Harry Kane"},
    {id: 10, name: "Erling Haaland"},
    {id: 11, name: "Karim Benzema"},
    {id: 12, name: "Luka Modrić"},
    {id: 13, name: "Antoine Griezmann"},
    {id: 14, name: "Joshua Kimmich"},
    {id: 15, name: "Jan Oblak"},
    {id: 16, name: "Romelu Lukaku"},
    {id: 17, name: "Bruno Fernandes"},
    {id: 18, name: "Jadon Sancho"},
    {id: 19, name: "Sergio Ramos"},
    {id: 20, name: "Paul Pogba"},
    {id: 21, name: "Frenkie de Jong"},
    {id: 22, name: "Thibaut Courtois"},
    {id: 23, name: "Raheem Sterling"},
    {id: 24, name: "Sadio Mané"},
    {id: 25, name: "Alisson Becker"},
    {id: 26, name: "Heung-min Son"},
    {id: 27, name: "Toni Kroos"},
    {id: 28, name: "Mason Mount"},
    {id: 29, name: "Kai Havertz"},
    {id: 30, name: "Phil Foden"},
    {id: 31, name: "Marco Verratti"},
    {id: 32, name: "Jack Grealish"},
    {id: 33, name: "Achraf Hakimi"},
    {id: 34, name: "Ederson Moraes"},
    {id: 35, name: "Matthijs de Ligt"},
    {id: 36, name: "Gerard Moreno"},
    {id: 37, name: "Riyad Mahrez"},
    {id: 38, name: "Aymeric Laporte"},
    {id: 39, name: "Rodri"},
    {id: 40, name: "Vinícius Júnior"},
    {id: 41, name: "Casemiro"},
    {id: 42, name: "Pedri"},
    {id: 43, name: "Lautaro Martínez"},
    {id: 44, name: "Marcus Rashford"},
    {id: 45, name: "Gianluigi Donnarumma"},
    {id: 46, name: "João Cancelo"},
    {id: 47, name: "Andrew Robertson"},
    {id: 48, name: "Leonardo Bonucci"},
    {id: 49, name: "Zlatan Ibrahimović"},
    {id: 50, name: "Bernardo Silva"},
    {id: 51, name: "João Félix"}
];

export const findAllPlayers = async ():Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id:number):Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
}