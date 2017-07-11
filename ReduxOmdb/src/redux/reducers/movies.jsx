
//1. the action (info about what happened)
//2. copy of current state


function Movies(state = {
  isFetching:false,
  movies:[]},action){
  switch(action.type){
    case 'ATTEMPT' :
    console.log("ATTEMPTING!");//return the updated state

      return Object.assign({},state,{
        isFetchig:true, }
      );
    case 'RECEIVE_MOVIES':
      return Object.assign({}, state, {
          isFetching: false,
          movies: action.movies,
        });

    case 'FAILED_TO_FETCH':
      return Object.assign({},state,{
        isFetchig:false,
        error:action.err,}
      );

    case 'RECEIVE_SINGLE_MOVIE':
      return Object.assign({}, state, {
        isFetching: false,
        movie: action.SingleMovie,
      });
    default:
     return state;
  }

}

export default Movies;
