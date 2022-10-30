import React from 'react';
import games from '../utils/helpers'

function FetchGameData() {
    async function callFourEndpoints () {
        const gameApiStrings = [
        { name : "games",
          query : "fields id,first_release_date, name, platforms, genres, summary; where id = ("
        },
        { name: "covers",
          query: "fields image_id; where game = ("
        },
        { name: "screenshots",
          query: "fields image_id; where game=("
        },
        { name : "game_videos",
          query: "fields video_id; where game = ("
        }
      ];
        for(let a=0;a<games.length;a++){
        for (let i=0;i<gameApiStrings.length;i++) {
          await fetchIGDB(gameApiStrings[i], a);
        }
      }
      }


    function constructHeaders() {
        let a = new Headers();
        a.append("Client-ID", "9h02jtd3d8ulk1057yluksq5ry4b0m");
        a.append("Authorization", "Bearer 1f69qksviffotsmg69r6gww5jhu0un");
        a.append("Content-Type", "text/plain");
        return a;
    }
    function createHeaders(theHeaders,queryString) {
        const x = {
          method: 'POST',
          headers: theHeaders,
          body: queryString,
          redirect: 'follow'
          };
        
        return x; 
      }
    function parseJSON (response){
        return response.json();
    }

    async function fetchIGDB(gameData, index) { 
        var cors = "https:///circumvent-cors.herokuapp.com/";
        var myHeaders = constructHeaders();
        let data = [];
        
        const endString = ");";
        const igdbApiString = "https://api.igdb.com/v4/";
        
      
        
        let queryString = gameData.query+games[index].game_id+endString;
        let url = cors + igdbApiString + gameData.name;
        let fetchObject = createHeaders(myHeaders,queryString);
        let key = gameData.name+" "+games[index].game_id;
      
        try{
        if(localStorage.getItem(key)){
          console.log("Grabbing from localstorage")
          data = JSON.parse(localStorage.getItem(key)); 
        } else {
        data = await fetch(url,fetchObject).then(parseJSON);
        console.log(JSON.stringify(data));
        localStorage.setItem(key,JSON.stringify(data))
        }
      
        } catch(err) {
          console.log(err);
          console.log("Rate Limit or your token has expired!  If its a rate limit, try walking away for 20 minutes and trying again")
        }
        if (gameData.name === "games"){
            console.log(gameData.name)
        //   printGame(data[0]);
        } else if (gameData.name === "covers") {
            console.log(gameData.name);
        //   gameObject[gameIndex].covers = data;
        //   data.forEach(printImage);
        } else if (gameData.name === "screenshots") {
            console.log(gameData.name);
        //   gameObject[gameIndex].screenshots = data;
        //   data.forEach(printImage);
        } else if (gameData.name === "game_videos") {
            console.log(gameData.name)
        //   gameObject[gameIndex].game_videos = data;
        //   data.forEach(printVideo);
        } 
        else {
          console.log("Something went wrong")
        }
      
      }

    // async function fetchIGDB(gameData) { 
        
    //     // console.log("TODO:  Graft lines 115 to 156 from coddpen.io  https://codepen.io/kericarpenter/pen/JjvdYeY to here and get it to work");


    //     // CORS circumvent is absolutely necessary and it took me a week to find this online
    //     // Here's the StackOverflow link:  https://stackoverflow.com/questions/72088723/getting-cors-error-when-using-fetch-to-get-data/74222320#74222320
    //     var cors = "https://circumvent-cors.herokuapp.com/";
    //     var myHeaders = constructHeaders();
    //     let data = [];
  
    //     const endString = ");";
    //     const igdbApiString = "https://api.igdb.com/v4/";
        

        
    //     let queryString = "fields image_id; where game=("+19560+endString;
    //     let url = cors + igdbApiString + "screenshots";
    //     let fetchObject = createHeaders(myHeaders,queryString);
    //     let key = "screenshots"+" "+"19560";
    //     // TODO:  It is trying to fetch but giving a 403 forbidden response.
    //     data = await fetch(url,fetchObject).then(parseJSON);
    //     let data2 = JSON.stringify(data);
    //     console.log(data2);
    //     localStorage.setItem(key,JSON.stringify(data))

    // }


    return(
        <div>   
            <button onClick={callFourEndpoints}>Load Data from IGDB</button>
        </div>
    )
}

export default FetchGameData;