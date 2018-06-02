export function sendMovieQueryReq(param){

  return fetch("http://backend.movies.pawfa.usermd.net:3004/movies",{
    body: JSON.stringify({query: param.payload}), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
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

  return fetch("http://backend.movies.pawfa.usermd.net:3004/movies",{
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  }).then(
      (response)=> { return response.json()}
  )
}

export function sendCommentReq(param){

  return fetch("http://backend.movies.pawfa.usermd.net:3004/comments",{
    body: JSON.stringify(param.payload), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
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

  return fetch("http://backend.movies.pawfa.usermd.net:3004/comments",{
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  }).then(
      (response)=> { return response.json()}
  )
}

export function fetchCommentsForIdReq(param){
  console.log(param);
  return fetch("http://backend.movies.pawfa.usermd.net:3004/comments?id="+param.payload,{
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  }).then(
      (response)=> { return response.json()}
  )
}
