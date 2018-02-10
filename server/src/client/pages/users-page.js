import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {fetchUsers} from '../actions/index';
import {Helmet} from 'react-helmet';
class Users extends Component {
	
	componentDidMount() {
		this.props.fetchUsers();
	}
	
	
	renderUsers() {
		return this.props.users.map( user => <li key={user.id}>{user.name}</li>);
	}
	
	head() {
		return (
			<Helmet>
				<title>{`${this.props.users.length} Users Loaded`}</title>
				<meta property="og:title" content="Users App"/>
			</Helmet>
		)
	}
	
	render(){
		return(
			<div>
				{this.head()}
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

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export default {
	component: connect(mapStateToProps, {fetchUsers})(Users),
	loadData
};