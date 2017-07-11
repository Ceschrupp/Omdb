import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar.jsx'

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
    this.props.auth();
	}
	render() {
		return (
			<div>

        <h1>
          <Link to="/">Redux Omdb</Link>
        </h1>
          <Navbar {...this.props}/>
        	{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default Main;
