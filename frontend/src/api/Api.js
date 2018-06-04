// const url ="http://localhost:3004";
const url ="http://backend.movies.pawfa.usermd.net:3004";

export function sendMovieQueryReq(param){

  return fetch(url+"/movies",{
    body: JSON.stringify({query: param.payload}),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    redirect: 'follow',
    referrer: 'no-referrer',
  }).then(
      (response)=> {
        if(response.status === 404){
          throw Error("Movie not found");
        }else{
          return response.json()
        }
      }
  )
}

export function fetchAllMoviesReq(){

  return fetch(url+"/movies",{
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET',
  }).then(
      (response)=> { return response.json()}
  )
}

export function sendCommentReq(param){

  return fetch(url+"/comments",{
    body: JSON.stringify(param.payload),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    redirect: 'follow',
    referrer: 'no-referrer',
  }).then(
      (response)=> {
        if(response.status === 404){
          throw Error("Error while sending comment");
        }else{
          return response.json()
        }
      }
  )
}

export function fetchAllCommentsReq(){

  return fetch(url+"/comments",{
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET',
  }).then(
      (response)=> { return response.json()}
  )
}

export function fetchCommentsForIdReq(param){
  return fetch(url+"/comments?id="+param.payload,{
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET',
  }).then(
      (response)=> { return response.json()}
  )
}
