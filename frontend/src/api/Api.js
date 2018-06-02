export function sendMovieQuery(param){
  fetch("http://localhost:3000/movies",{
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
      (data)=> {return data}
  )
  // fetch()
  //     .then(res => res.json())
  //     .then(
  //         (result) => {
  //           this.setState({
  //             isLoaded: true,
  //             items: result.items
  //           });
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         (error) => {
  //           this.setState({
  //             isLoaded: true,
  //             error
  //           });
  //         }
  //     )

}
