
function Users(state = {
  isFetchingRegister: false,
  usuario: null,
  estado: null
}, action) {
  switch(action.type){
    case 'ATTEMPT_REGISTER':
    console.log("ATTEMPTING!");

    return Object.assign({},state,{
      isFetchingRegister:true,
    });

    case 'REGISTER':
    return Object.assign({}, state, {
        isFetchingRegister: false,
        usuario: action.data.username,
        estado: action.data.estado,
      });

    case 'REGISTER_FAIL':
    return Object.assign({},state,{
         isFetchigRegister:false,
         error:action.err,
        });

    case 'ATTEMPT_LOGIN':
    console.log("ATTEMPTING!")
    return Object.assign({},state,{
      isFetchingLogin:true,
    })

    case 'LOGIN':
    console.log("LOGIN")
    return Object.assign({}, state, {
        isFetchingLogin: false,
        usuario: action.data.username,
        estado: action.data.estado,

      });

    case 'LOGIN_FAIL':
    return Object.assign({},state,{
         isFetchigLogin:false,
         error:action.err,
        });
    default:
      return state;
  }
}

export default Users;
