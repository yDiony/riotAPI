const inputPesquisa = document.querySelector('.inputPesquisa');
const botaoPesquisa = document.querySelector('.botaoPesquisa');
const API_KEY = "RGAPI-9f9e3d45-eefc-473d-b199-c28897784639";
var playerimg = document.querySelector('.playerimg');
var playerlevel = document.querySelector('.playerlevel');
var playernick = document.querySelector('.playernick');
const linkimg = "http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/";

function resultados(players){
    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${players}` + `?api_key=` + API_KEY)
    .then(response => {
        if (!response.ok) {
            throw new Error(`player não encontrado`)
         }
        return response.json();
        })

        .then(function(mostrarPLayer){
            console.log(mostrarPLayer)
            var nickPlayer = mostrarPLayer.name
            var idplayer = mostrarPLayer.id
            var imagemPlayer = mostrarPLayer.profileIconId
            var levelPlayer = mostrarPLayer.summonerLevel
            var pesquisadosplayers = document.querySelector('.pesquisadosplayers')  

            pesquisadosplayers.style.display = "flex"
            playernick.innerHTML = `<h4>NOME DO JOGADOR: ${nickPlayer}</h4>`
            playerimg.innerHTML = `<img src="${linkimg + imagemPlayer + ".png"}"</img>`
            playerlevel.innerHTML = `<h4>Summoner level: ${levelPlayer}</h4>`
        })
    }
    //  function ranks(players){
    //      fetch(`https://br1.api.riotgames.com/lol//league/v4/entries/by-summoner/${playerid}` + `?api_key=` + API_KEY)
    //          .then(function(mostrarPLayer){
    //              console.log(mostrarPLayer)
                
    //          })
    //      }
  
    botaoPesquisa.addEventListener('onclick', function(){
        resultados(inputPesquisa.value)
    })  
    botaoPesquisa.addEventListener('onclick', function(){
        resultados(inputPesquisa.value)
    })

    inputPesquisa.addEventListener('keypress', enter)

    function enter(event) {
        key = event.keyCode
        if (key === 13) {
            resultados(inputPesquisa.value)
        }
    }