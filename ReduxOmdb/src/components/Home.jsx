import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.register = this.register.bind(this)
	}
	register(e) {
		e.preventDefault()

    this.props.registering(this.refs.username.value, this.refs.password.value)

		}
	render() {
		return (
			<div>
				<input ref='username' placeholder='username'></input>
				<input ref= 'password' placeholder='contraseña'></input>
				<button onClick = {this.register}>Register!</button>
			</div>
		);
	}
}

export default Home;
