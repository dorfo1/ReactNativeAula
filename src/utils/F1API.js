//

const url = "https://ergast.com/api/f1/";
const url_seasons = "seasons.json?limit=1000?offset=20";
const url_pilotos = "/drivers"


const headers = {
    method:"GET",
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const buscarTemporadas = () => 
    fetch(url+url_seasons,headers)
        .then(response => response.json())
        .then(response => response.MRData.SeasonTable.Seasons)
        .catch(error => error.message)


export const buscarPilotos = season =>{
    fetch(url+season+url_pilotos,headers)
        .then(response =>response.json())    
        .catch(error=> error)
}