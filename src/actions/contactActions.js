export const FETCHING_CONTACTS = 'FETCHING_CONTACTS';
export const FETCHING_CONTACTS_FAILED = 'FETCHING_CONTACTS_FAILED';
export const FETCHING_CONTACTS_SUCCESS = 'FETCHING_CONTACTS_SUCCESS';
export const FILTER_CONTACTS = 'FILTER_CONTACTS';
export const REMOVE_FETCHED_CONTACT = 'REMOVE_FETCHED_CONTACT';

export const FETCHING_CONTACT = 'FETCHING_CONTACT';
export const FETCHING_CONTACT_FAILED = 'FETCHING_CONTACT_FAILED';
export const FETCHING_CONTACT_SUCCESS = 'FETCHING_CONTACT_SUCCESS';

export const SET_ADD_CONTACT = 'SET_ADD_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_ADD_CONTACT = 'REMOVE_ADD_CONTACT';
export const CREATING_CONTACT = 'CREATING_CONTACT';
export const CREATING_CONTACT_FAILED = 'CREATING_CONTACT_FAILED';
export const CREATING_CONTACT_SUCCESS = 'CREATING_CONTACT_SUCCESS';

export const SET_UPDATE_CONTACT = 'SET_UPDATE_CONTACT';
export const REMOVE_UPDATE_CONTACT = 'REMOVE_UPDATE_CONTACT';
export const UPDATING_CONTACT = 'UPDATE_CONTACT';
export const UPDATING_CONTACT_FAILED = 'UPDATE_CONTACT_FAILED';
export const UPDATING_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';

export const DELETING_CONTACT = 'DELETING_CONTACT';
export const DELETING_CONTACT_FAILED = 'DELETING_CONTACT_FAILED';
export const DELETING_CONTACT_SUCCESS = 'DELETING_CONTACT_SUCCESS';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const SHOW_CONFIRM = 'SHOW_CONFIRM';
export const HIDE_CONFIRM = 'HIDE_CONFIRM';


/* GET CONTACTS ACTIONS */
const fetchingContacts = () => ({
	type: FETCHING_CONTACTS,
});
  
const fetchingContactsFailed = error => ({
	type: FETCHING_CONTACTS_FAILED,
	error,
});
  
const fetchingContactsSuccess = contacts => ({
	type: FETCHING_CONTACTS_SUCCESS,
	contacts,
});


/* GET CONTACT ACTIONS */
const fetchingContact = () => ({
	type: FETCHING_CONTACT,
});
  
const fetchingContactFailed = error => ({
	type: FETCHING_CONTACT_FAILED,
	error,
});
  
const fetchingContactSuccess = results => ({
	type: FETCHING_CONTACT_SUCCESS,
	results,
});


/* CREATE CONTACT ACTIONS */
const creatingContact = () => ({
	type: CREATING_CONTACT,
});
  
const creatingContactFailed = error => ({
	type: CREATING_CONTACT_FAILED,
	error,
});
  
const creatingContactSuccess = contacts => ({
	type: CREATING_CONTACT_SUCCESS,
	contacts,
});


/* UPDATE CONTACT ACTIONS */
const updatingContact = () => ({
	type: UPDATING_CONTACT,
});
  
const updatingContactFailed = error => ({
	type: UPDATING_CONTACT_FAILED,
	error,
});
  
const updatingContactSuccess = (contacts, contact) => ({
	type: UPDATING_CONTACT_SUCCESS,
	contacts,
	contact,
});


/* DELETE CONTACT ACTIONS */
const deletingContact = () => ({
	type: DELETING_CONTACT,
});
  
const deletingContactFailed = error => ({
	type: DELETING_CONTACT_FAILED,
	error,
});
  
const deletingContactSuccess = contacts => ({
	type: DELETING_CONTACT_SUCCESS,
	contacts,
});

/* */
const filterContactsSuccess = results => ({
	type: FILTER_CONTACTS,
	results,
});


export const setUpdateContact = () => ({
	type: SET_UPDATE_CONTACT
});

export const setAddContact = () => ({
	type: SET_ADD_CONTACT,
})

export const removeAddContact = () => ({
	type: REMOVE_ADD_CONTACT,
})

export const removeFetchedContact = () => ({
	type: REMOVE_FETCHED_CONTACT
});

export const addNewContact = () => ({
	type: ADD_CONTACT
})

export const removeUpdateContact = () => ({
	type: REMOVE_UPDATE_CONTACT
})

/* CONFIRM MODEL ACTIONS */
export const showConfirm = () => ({
	type: SHOW_CONFIRM
})
export const cancelConfirm = () => ({
	type: HIDE_CONFIRM
})

//
export function fetchContacts(){
	
	return (dispatch) => {

		dispatch(fetchingContacts());

		
		setTimeout(() => {

			let contacts = localStorage.getItem("contacts");

			if(contacts) contacts = JSON.parse(contacts);

			dispatch(fetchingContactsSuccess(contacts));

		}, 750);
	}
}

export function searchContacts(searchStr){
	
	return (dispatch) => {
  
	  	dispatch(fetchingContacts());		

		let contacts = localStorage.getItem("contacts");

		if(contacts){
			contacts = JSON.parse(contacts);
	
			let returnObj = [];
			let firstLetter = '';
            let currLetter = '';

			contacts.forEach((contact, i) => {
				if(contact['name'].toLowerCase().includes(searchStr)){
					returnObj.push(contact);
				} else if(contact['surname'].toLowerCase().includes(searchStr)){
					returnObj.push(contact);
				}
			})

			dispatch(fetchingContactsSuccess(returnObj));

		}

	};

  }

export function fetchContact(safename){
	return (dispatch) => {

	  	dispatch(fetchingContact());		

		let contacts = localStorage.getItem("contacts");

		if(contacts){
			contacts = JSON.parse(contacts);
	
			contacts.forEach((contact, i) => {
				if(contact.safeName === safename){
					dispatch(fetchingContactSuccess(contact));
				}
			})

		}
	};
}


export function createContact(props){
	return (dispatch) => {

		dispatch(creatingContact());

		let contacts = localStorage.getItem("contacts");			

		if(contacts){

			contacts = JSON.parse(contacts);

			let safeName = `${props.name.trim()}-${props.surname.trim()}`;
			
			if(contacts.length > 0) {
				const checkIndex = contacts.filter(contact => (contact.safeName === safeName));

				if(checkIndex.length > 0){
					safeName = `${safeName}-${Math.floor(Math.random() * 20)}`;
				}
			}

			const contact = {
				safeName: safeName,
				name: (props.name && props.name.length > 0 ? props.name.trim() : ''),
				surname: (props.surname && props.surname.length > 0 ? props.surname.trim() : ''),
				phone: (props.phone && props.phone.length > 0 ? props.phone.trim() : ''),
				email: (props.email && props.email.length > 0 ? props.email.trim() : ''),
				website: (props.website && props.website.length > 0 ? props.website.trim() : ''),
				dob: (props.dob && props.dob.length > 0 ? props.dob.trim() : ''),
				facebook: (props.facebook && props.facebook.length > 0 ? props.facebook.trim() : ''),
				instagram: (props.instagram && props.instagram.length > 0 ? props.instagram.trim() : ''),
				twitter: (props.twitter && props.twitter.length > 0 ? props.twitter.trim() : ''),
			}

			contacts.push(contact);

			localStorage.setItem("contacts", JSON.stringify(contacts));

			return dispatch(creatingContactSuccess( contacts ));

		} else {

			contacts = [];

			const contact = {
				safeName: `${props.name.trim()}-${props.surname.trim()}`,
				name: (props.name && props.name.length > 0 ? props.name.trim() : ''),
				surname: (props.surname && props.surname.length > 0 ? props.surname.trim() : ''),
				phone: (props.phone && props.phone.length > 0 ? props.phone.trim() : ''),
				email: (props.email && props.email.length > 0 ? props.email.trim() : ''),
				website: (props.website && props.website.length > 0 ? props.website.trim() : ''),
				dob: (props.dob && props.dob.length > 0 ? props.dob.trim() : ''),
				facebook: (props.facebook && props.facebook.length > 0 ? props.facebook.trim() : ''),
				instagram: (props.instagram && props.instagram.length > 0 ? props.instagram.trim() : ''),
				twitter: (props.twitter && props.twitter.length > 0 ? props.twitter.trim() : ''),
			}

			contacts.push(contact);

			localStorage.setItem("contacts", JSON.stringify(contacts));

			return dispatch(creatingContactSuccess( contacts ));
		
		}
	};

}

export function updateContact(props, contact){
	return (dispatch) => {

		dispatch(updatingContact());

		const newContact = {
			safeName: (contact.safeName ? contact.safeName : ''),
			name: (props.name && props.name !== contact.name ? props.name : contact.name),
			surname: (props.surname && props.surname !== contact.surname ? props.surname : contact.surname),
			phone: (props.phone && props.phone !== contact.phone ? props.phone : contact.phone),
			email: (props.email && props.email !== contact.email ? props.email : contact.email),
			website: (props.website && props.website !== contact.website ? props.website : contact.website),
			dob: (props.dob && props.dob !== contact.dob ? props.dob : contact.dob),
			facebook: (props.facebook && props.facebook !== contact.facebook ? props.facebook : contact.facebook),
			instagram: (props.instagram && props.instagram !== contact.instagram ? props.instagram : contact.instagram),
			twitter: (props.twitter && props.twitter !== contact.twitter ? props.twitter : contact.twitter)
		};

		let contacts = localStorage.getItem("contacts");			

		if(contacts){
			contacts = JSON.parse(contacts);

			const removeIndex = contacts.map((item) => item.safeName ).indexOf(contact.safeName);

			contacts.splice(removeIndex, 1);

			contacts.push(newContact);
	
			localStorage.setItem("contacts", JSON.stringify(contacts));

		}

		return dispatch(updatingContactSuccess(contacts, newContact));
	
	};
}


export function deleteContact(safeName){
	return (dispatch) => {

		dispatch(deletingContact());
	
		let contacts = localStorage.getItem("contacts");			

		if(contacts){
			contacts = JSON.parse(contacts);

			const removeIndex = contacts.map((item) => item.safeName ).indexOf(safeName);

			contacts.splice(removeIndex, 1);

			localStorage.setItem("contacts", JSON.stringify(contacts));

			dispatch(deletingContactSuccess( contacts ));

		} else {
			dispatch(deletingContactFailed('Failed to delete contact'));
		}
	};
}

