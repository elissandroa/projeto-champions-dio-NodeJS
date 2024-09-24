import { PlayerModel } from '../models/playersModel'
import { StatisticsModel } from '../models/statiticsModel';

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "David Beckham",
        "club": "Retired",
        "nationality": "England",
        "position": "Midfielder",
        "statistics": {
            "Overall": 85,
            "Pace": 76,
            "Shooting": 82,
            "Passing": 90,
            "Dribbling": 84,
            "Defending": 70,
            "Physical": 72
        }
    },
    {
        "id": 2,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 92,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 40,
            "Physical": 65
        }
    },
    {
        "id": 3,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portugal",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 85,
            "Shooting": 93,
            "Passing": 81,
            "Dribbling": 86,
            "Defending": 35,
            "Physical": 79
        }
    },
    {
        "id": 4,
        "name": "Kylian Mbappé",
        "club": "Paris Saint-Germain",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 97,
            "Shooting": 89,
            "Passing": 80,
            "Dribbling": 92,
            "Defending": 36,
            "Physical": 77
        }
    },
    {
        "id": 5,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgium",
        "position": "Midfielder",
        "statistics": {
            "Overall": 91,
            "Pace": 76,
            "Shooting": 86,
            "Passing": 93,
            "Dribbling": 87,
            "Defending": 64,
            "Physical": 77
        }
    },
    {
        "id": 6,
        "name": "Robert Lewandowski",
        "club": "Barcelona",
        "nationality": "Poland",
        "position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 78,
            "Shooting": 94,
            "Passing": 79,
            "Dribbling": 86,
            "Defending": 44,
            "Physical": 82
        }
    },
    {
        "id": 7,
        "name": "Neymar Jr.",
        "club": "Al Hilal",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 91,
            "Shooting": 83,
            "Passing": 86,
            "Dribbling": 94,
            "Defending": 37,
            "Physical": 60
        }
    },
    {
        "id": 8,
        "name": "Mohamed Salah",
        "club": "Liverpool",
        "nationality": "Egypt",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 93,
            "Shooting": 88,
            "Passing": 81,
            "Dribbling": 89,
            "Defending": 45,
            "Physical": 75
        }
    },
    {
        "id": 9,
        "name": "Virgil van Dijk",
        "club": "Liverpool",
        "nationality": "Netherlands",
        "position": "Defender",
        "statistics": {
            "Overall": 89,
            "Pace": 74,
            "Shooting": 60,
            "Passing": 71,
            "Dribbling": 72,
            "Defending": 91,
            "Physical": 86
        }
    },
    {
        "id": 10,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": "Norway",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 94,
            "Shooting": 93,
            "Passing": 65,
            "Dribbling": 80,
            "Defending": 45,
            "Physical": 88
        }
    },
    {
        "id": 11,
        "name": "Karim Benzema",
        "club": "Al Ittihad",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 78,
            "Shooting": 92,
            "Passing": 83,
            "Dribbling": 88,
            "Defending": 39,
            "Physical": 78
        }
    },
    {
        "id": 12,
        "name": "Luka Modrić",
        "club": "Real Madrid",
        "nationality": "Croatia",
        "position": "Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 71,
            "Shooting": 75,
            "Passing": 89,
            "Dribbling": 90,
            "Defending": 73,
            "Physical": 65
        }
    },
    {
        "id": 13,
        "name": "Joshua Kimmich",
        "club": "Bayern Munich",
        "nationality": "Germany",
        "position": "Midfielder",
        "statistics": {
            "Overall": 89,
            "Pace": 70,
            "Shooting": 72,
            "Passing": 88,
            "Dribbling": 84,
            "Defending": 82,
            "Physical": 76
        }
    },
    {
        "id": 14,
        "name": "Harry Kane",
        "club": "Bayern Munich",
        "nationality": "England",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 71,
            "Shooting": 93,
            "Passing": 83,
            "Dribbling": 82,
            "Defending": 47,
            "Physical": 83
        }
    },
    {
        "id": 15,
        "name": "Thibaut Courtois",
        "club": "Real Madrid",
        "nationality": "Belgium",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 90,
            "Pace": 50,
            "Shooting": 41,
            "Passing": 68,
            "Dribbling": 60,
            "Defending": 85,
            "Physical": 78
        }
    },
    {
        "id": 16,
        "name": "Sadio Mané",
        "club": "Al Nassr",
        "nationality": "Senegal",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 91,
            "Shooting": 84,
            "Passing": 79,
            "Dribbling": 89,
            "Defending": 45,
            "Physical": 77
        }
    },
    {
        "id": 17,
        "name": "Alisson Becker",
        "club": "Liverpool",
        "nationality": "Brazil",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 89,
            "Pace": 52,
            "Shooting": 43,
            "Passing": 69,
            "Dribbling": 57,
            "Defending": 89,
            "Physical": 80
        }
    },
    {
        "id": 18,
        "name": "Bruno Fernandes",
        "club": "Manchester United",
        "nationality": "Portugal",
        "position": "Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 73,
            "Shooting": 85,
            "Passing": 89,
            "Dribbling": 82,
            "Defending": 64,
            "Physical": 78
        }
    },
    {
        "id": 19,
        "name": "Jan Oblak",
        "club": "Atlético Madrid",
        "nationality": "Slovenia",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 89,
            "Pace": 46,
            "Shooting": 38,
            "Passing": 68,
            "Dribbling": 51,
            "Defending": 88,
            "Physical": 77
        }
    },
    {
        "id": 20,
        "name": "Romelu Lukaku",
        "club": "Roma",
        "nationality": "Belgium",
        "position": "Forward",
        "statistics": {
            "Overall": 86,
            "Pace": 84,
            "Shooting": 85,
            "Passing": 71,
            "Dribbling": 75,
            "Defending": 37,
            "Physical": 85
        }
    },
    {
        "id": 21,
        "name": "Vinícius Júnior",
        "club": "Real Madrid",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 95,
            "Shooting": 83,
            "Passing": 79,
            "Dribbling": 92,
            "Defending": 34,
            "Physical": 72
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex((player) => player.id === id)
    if (index !== -1) {
        database.splice(index, 1)
        return true
    } else {
        return false
    }
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex((player) => player.id === id)
    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics
    }
    return database[playerIndex]
} 