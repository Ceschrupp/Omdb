import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this)
	}
	login(e) {
		e.preventDefault()

    this.props.logIn(this.refs.username.value, this.refs.password.value)

		}
	render() {
		return (
			<div>
				<input ref='username' placeholder='username'></input>
				<input ref= 'password' placeholder='contraseña'></input>
				<button onClick = {this.login}>Login!</button>
			</div>
		);
	}
}

export default Login;
