//

const url = "https://ergast.com/api/f1/";
const url_seasons = "seasons.json?limit=1000?offset=20";
const url_pilotos = "/drivers.json"
const url_corridas = "/circuits.json"



const headers = {
    method: "GET",
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const buscarTemporadas = () =>
    fetch(url + url_seasons, headers)
        .then(response => response.json())
        .then(response => response.MRData.SeasonTable.Seasons)
        .catch(error => error.message)


export const buscarPilotos = season =>
    fetch(url + season + url_pilotos, headers)
        .then(response => response.json())
        .then(response => response.MRData.DriverTable.Drivers)
        .catch(error => error.message)

export const buscarCorridas = season =>
    fetch(url + season + url_corridas, headers)
        .then(response => response.json())
        .then(response => response.MRData.CircuitTable.Circuits)
        .catch(error => error.message)


export const buscarDetalhesCorrida = (season, corrida) =>
    fetch(url + season + "/circuits/" + corrida + "/results.json")
        .then(response => response.json())
        .then(response => response.MRData.RaceTable.Races[0])
        .catch(error => error.message)

export const buscarDetalhesPiloto = (season,piloto) =>
    fetch(url + season +"/drivers/"+ piloto + "/driverStandings.json")
        .then(response => response.json())
        .then(response => response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0])
        .catch(error => error.message)