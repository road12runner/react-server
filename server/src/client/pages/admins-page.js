import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {fetchAdmins} from '../actions/index';
import requireAuth from '../components/hoc/require-auth';

class AdminsPage extends Component {
	
	componentDidMount() {
		this.props.fetchAdmins();
	}
	
	
	renderAdmins() {
		return this.props.admins.map( admin => <li key={admin.id}>{admin.name}</li>);
	}
	
	
	render(){
		return(
			<div>
				Big List of Admins:
				<ul>
					{this.renderAdmins()}
				</ul>
				
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		admins: state.admins
	}
};


export default {
	component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsPage)),
	loadData: ({dispatch}) => dispatch(fetchAdmins())
};