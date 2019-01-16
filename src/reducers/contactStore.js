import {
    FETCHING_CONTACTS,
    FETCHING_CONTACTS_FAILED,
    FETCHING_CONTACTS_SUCCESS,
    FETCHING_CONTACT_FAILED,
    FETCHING_CONTACT_SUCCESS,
    FILTER_CONTACTS,
    REMOVE_FETCHED_CONTACT,
    ADD_CONTACT,
    REMOVE_ADD_CONTACT,
    SET_UPDATE_CONTACT,
    REMOVE_UPDATE_CONTACT,
    UPDATING_CONTACT_SUCCESS,
    CREATING_CONTACT_SUCCESS,
    DELETING_CONTACT_SUCCESS,
	SHOW_CONFIRM,
	HIDE_CONFIRM
} from '../actions/contactActions';
  
export const initialState = {
	contacts: [],
	contact: {},
	isFetchingContacts: false,
	hasFetchedContacts: false,
	isFetchingContact: false,
	hasFetchedContact: false,
	isUpdatingContact: false,
	addContact: false,
	errorMessage: '',
	showConfirmBool: false,
};
  
export default function contactStore(state = initialState, action) {

	switch (action.type) {
		case FETCHING_CONTACTS:
			return { 
				...state, 
				isFetchingContacts: true 
			};

		case FETCHING_CONTACTS_FAILED:
			return { 
				...state, 
				isFetchingContacts: false,
				errorMessage: 'fetching contacts failed'
			};
			
		case FETCHING_CONTACTS_SUCCESS:
			return { 
				...state, 
				isFetchingContacts: false,
				hasFetchedContacts: true,
				errorMessage: '',
				contacts: action.contacts
			};

		case FETCHING_CONTACTS:
			return {
				...state,
				isFetchingContact: true
			};

		case FILTER_CONTACTS:
			return {
				...state,
				isFetchingContacts: false,
				hasFetchedContacts: true,
				contacts: action.results.contacts,
			}

		case FETCHING_CONTACT_FAILED:
			return {
				...state,
				isFetchingContact: false,
				errorMessage: 'fetching contact failed'
			};

		case FETCHING_CONTACT_SUCCESS:
			return {
				...state,
				isFetchingContact: false,
				hasFetchedContact: true,
				contact: action.results
			};

		case REMOVE_FETCHED_CONTACT:
			return {
				...state,
				isFetchingContact: false,
				hasFetchedContact: false,
				contact: {}
			};

		case SET_UPDATE_CONTACT:
			return {
				...state,
				hasSetUpdatingContact: true,
			};

		case ADD_CONTACT:
			return {
				...state,
				addContact: true,
			};

		case REMOVE_ADD_CONTACT:
			return {
				...state,
				addContact: false,
			};

		case REMOVE_UPDATE_CONTACT:
			return {
				...state,
				hasSetUpdatingContact: false,
			};

		case CREATING_CONTACT_SUCCESS:
			return {
				...state,
				contacts: action.contacts,
				addContact: false
			}

		case UPDATING_CONTACT_SUCCESS:
			return {
				...state, 
				hasSetUpdatingContact: false,
				contacts: action.contacts,
				contact: action.contact
			}

		case DELETING_CONTACT_SUCCESS:
			return {
				...state, 
				hasFetchedContact: false,
				contacts: action.contacts,
				showConfirmBool: false,
				contact: {}
			}

		case SHOW_CONFIRM:
			return {
				...state, 
				showConfirmBool: true
			}

		case HIDE_CONFIRM:
			return {
				...state, 
				showConfirmBool: false
			}

	    default: 
			return { ...state };
  
	}
}
  