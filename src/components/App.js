import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as contactActions from '../actions/contactActions';

import Search from './Search';
import Contact from './Contact';
import Update from './Update';
import Add from './Add';
import Loading from './Loading';


class App extends React.Component {

	componentWillMount(){
        this.props.contactActions.fetchContacts();  
    }

	render(){

		const { createContact, deleteContact, fetchContact, searchContacts, updateContact, removeFetchedContact, updateFetchedContact, updatingContact, setUpdateContact, addNewContact, removeAddContact, removeUpdateContact, setAddContact, showConfirm, cancelConfirm } = this.props.contactActions;
		const { contact, contacts, errorMessage, hasFetchedContact, hasFetchedContacts, isFetchingContact, isFetchingContacts, hasSetUpdatingContact, addContact, showConfirmBool } = this.props.contactStore;  

		console.log(this.props);

		if(addContact){
			return (
				<Add
					setAddContact={ setAddContact }
					removeAddContact={ removeAddContact }
					createContact={ createContact } />
			)
		}

		if(hasSetUpdatingContact){
			return (
				<Update 
					contact={ contact }
					removeUpdateContact={ removeUpdateContact }
					updateContact={ updateContact } />
			)
		}

		if(hasFetchedContact){
			return (
				<Contact
					contact={ contact }
					setUpdateContact={ setUpdateContact }
					deleteContact={ deleteContact }
					removeFetchedContact={ removeFetchedContact }
					showConfirm={ showConfirm }
					cancelConfirm={ cancelConfirm }
					showConfirmBool={ showConfirmBool } />
			)
		}
		
		if(hasFetchedContacts){
			return  (
				<Search 
					fetchContact={ fetchContact }
					searchContacts={ searchContacts }
					addNewContact={ addNewContact }
					contacts={ contacts } />
			)
		}

		if(isFetchingContacts){
			return (
				<Loading />
			)
		}

		return (
			<Loading />
		)

	}
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    contactActions: bindActionCreators(contactActions, dispatch),
});

// Connect app to redux
export default connect(mapStateToProps, mapDispatchToProps)(App);