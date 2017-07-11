//funciones sincronicas

// attempt
export function attempt(){
  return{
    type: 'ATTEMPT',

  }
}

//receive movies

export function receiveMovies(movies){
  return{
    type: 'RECEIVE_MOVIES',
    movies
  }
}

//receive single movie

export function receiveSingleMovie(SingleMovie){
  return{
    type: 'RECEIVE_SINGLE_MOVIE',
    SingleMovie
  }
}

export function failedToFetch(err){
  return{
    type: 'FAILED_TO_FETCH',
  }
}
//funciones asincronicas

export function findMovies(movies) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(attempt());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://www.omdbapi.com/?apikey=20dac387&s=${movies}`)
      .then(response => response.json())
      .then(data => dispatch(receiveMovies(data.Search)))
      .catch(err => dispatch(failedToFetch(err)));
      // In a real world app, you also want to
      // catch any error in the network call.
  };
}

export function findMovie(movieId) {

  return(dispatch) =>{

    dispatch(attempt());

    return fetch(`https://www.omdbapi.com/?apikey=20dac387&i=${movieId}`)
      .then(response => response.json())
      .then(data => dispatch(receiveSingleMovie(data)))
      .catch(err => dispatch(failedToFetch(err)));

  }

}

export function attemptRegister(){
  return{
    type: 'ATTEMPT_REGISTER',

  }
}

export function register(data){
  return{
    type: 'REGISTER',
    data
  }
}

export function registerFail(err){
  return{
    type: 'REGISTER_FAIL',

  }
}

export function registering(username, password) {

  return(dispatch) =>{

    dispatch(attemptRegister());

    return fetch(`./api/users/register`,{
          method:"POST",
          headers:{'Content-type':"application/json"},
          body:JSON.stringify({username,password})
    })
      .then(response => response.json())
      .then(data => dispatch(register(data)))
      .catch(err => dispatch(registerFail(err)));

  }

}

export function attemptLogin(){
  return{
    type: 'ATTEMPT_LOGIN',

  }
}

export function login(data){
  console.log('login',data)
  return{
    type: 'LOGIN',
    data
  }
}

export function loginFail(err){
  return{
    type: 'LOGIN_FAIL',

  }
}

export function logIn(username, password) {
  console.log(username, password, "aca esta" )
  return(dispatch) =>{

    dispatch(attemptLogin());

    return fetch(`./api/users/login`,{
          method:"POST",
          headers:{"Content-type":"application/json"},
          credentials: "include",
          mode: 'cors',
          body:JSON.stringify({username,password})
    })
      .then(response => {
        if(response.status !== 200)
          return dispatch(loginFail(err))
        return response.json()
      })
      .then(data => dispatch(login(data)))
      .catch(err => dispatch(loginFail(err)));

  }

}

// checkear autenticacion

export function auth() {
  return(dispatch) =>{

    dispatch(attemptLogin());

    return fetch(`./api/users/checkauth`,{
          method:"GET",
          credentials: "include",
          mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        console.log('auth',data)
        if (data.estado === 'logeado') {
          dispatch(login(data))
        }
        else {
          dispatch(loginFail({err: 'no logueado'}))
        }

      })
      .catch(err => dispatch(loginFail(err)));

  }

}
