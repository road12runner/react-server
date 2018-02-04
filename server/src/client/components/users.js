import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {fetchUsers} from '../actions/index';

class Users extends Component {
	
	componentDidMount() {
		this.props.fetchUsers();
	}
	
	
	renderUsers() {
		return this.props.users.map( user => <li key={user.id}>{user.name}</li>);
	}
	
	
	render(){
		return(
			<div>
				Big List of Users:
				<ul>
					{this.renderUsers()}
				</ul>
				
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		users: state.users
	}
};

export default connect(mapStateToProps, {fetchUsers})(Users);