import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';
import Main from './Main.jsx';

function mapStateToProps(state){
  return{
    isFetching:state.movies.isFetching,
    movies: state.movies.movies,
    movie: state.movies.movie,
  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps,
  mapDispachToProps)(Main);

export default App;
