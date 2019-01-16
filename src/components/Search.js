import React from 'react';
import FontAwesome from 'react-fontawesome';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Button from './Button';
import ContactBlockSmall from './ContactBlockSmall';
import Loading from './Loading';

const Wrapper = glamorous.div({
	display: 'block',
	position: 'relative', 
	width: '100%',
	height: '100%',
	margin: '0 auto',
	maxWidth: '600px',
})

const SearchBar = glamorous.div({
	marginBottom: '30px',
});

const SearchBarInput = glamorous.form({
	width: '100%',
	border: 'solid 1px #eeeeee',
	height: '50px',
	padding: '0 10px',
	borderRadius: '5px',
	display: 'table'
});

const Input = glamorous.input({
	border: 'none',
	width: '100%',
	outline: 'none',
	height: '50px',
	fontSize: '15px',
	display: 'table-cell',
	verticalAlign: 'middle',
	fontFamily: "'Quicksand', sans-serif"
});

const VoiceCommand = glamorous.div({
	width: '3%',
	fontSize: '20px',
	position: 'relative',
	textAlign: 'center',
	display: 'table-cell',
	verticalAlign: 'middle'
});

const Close = glamorous.div({
	width: '3%',
	display: 'none',
	fontSize: '20px',
	position: 'relative',
	textAlign: 'center',
	display: 'table-cell',
	verticalAlign: 'middle'
})

const TitleWrap = glamorous.div({
	display: 'table',
	width: '100%',
	background: '#eee',
	padding: '0 10px',
	height: '40px',

	'& p':{
		display: 'table-cell',
		verticalAlign: 'middle'
	}
})

class Search extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			searchInput : '',
			contacts: [],
			display: 'mic'
		}

		this.change = this.onChangeHandler.bind(this);
		this.stop = this.stopSearch.bind(this);
		this.search = this.speachSearch.bind(this);

	}

	componentWillUnmount() {
		if(this.recognition){
			this.recognition.stop();
		}
	}

	onChangeHandler(e){

		this.props.searchContacts(e.target.value); 

		this.setState({
			searchInput: e.target.value
		})
	}

	onResult(e) {

		this.recognition.stop();

		this.setState({
			searchInput: e.results[e.results.length - 1][0].transcript.toLowerCase(),
			display: 'mic'
		})

		this.props.searchContacts(this.state.searchInput); 

	}

	stopSearch(e){
	
		this.recognition.stop();

		this.setState({
			display: 'mic',
			searchInput : (e.results ? e.results[e.results.length - 1][0].transcript.toLowerCase() : '')
		})

	}

	speachSearch(e){

		this.recognition = new (window.SpeechRecognition || 
			window.webkitSpeechRecognition || 
			window.mozSpeechRecognition || 
			window.msSpeechRecognition
		)();

		this.setState({
			display: 'close',
			searchInput: ''
		})

		if (this.recognition) {
			this.recognition.onresult = this.onResult.bind(this);
			this.recognition.continuous = true;
			this.recognition.start();
		}

	}

	renderTitle(letter){
		return (
			<TitleWrap>
				<p>{ letter }</p>
			</TitleWrap>
		)
	}


	renderContacts(){
		const { contacts } = this.props;

		if(contacts){

			let firstLetter = '';
			let currLetter = '';
			let contactObj = {};

			contacts.forEach((contact, i) => {

				currLetter = contact.surname.charAt(0);

				if(firstLetter !== currLetter){
					contactObj[contact.surname.charAt(0)] = [];
					contactObj[contact.surname.charAt(0)].push(contact);
				} else {
					contactObj[currLetter].push(contact);
				}

				firstLetter = currLetter;

			});

			return Object.keys(contactObj).sort().map((category, key) => (

				 <div className='category-holder' key={key}>
			   
					{category && this.renderTitle(category) }

					{ contactObj[category].map((contact, catKey) => (
						<ContactBlockSmall 
							key={ catKey }
							fetchContact={ this.props.fetchContact } 
							safename={ contact.safeName } 
							name={ contact.name } 
							fullname={ `${contact.name} ${contact.surname}` }
							phone={ contact.phone }
							email={ contact.email } />
					))}

				</div>

			));
		}
	}

	render() {
		
		return (
			<Wrapper>
				<SearchBar>
					<SearchBarInput>
						<Input 
							type='text' 
							name='search' 
							id='search' 
							placeholder='search' 
							value={ this.state.searchInput }
							onChange={ this.change } />
						
						{ this.state.display === 'mic' && 
							<VoiceCommand onClick={ this.search }>
								<FontAwesome name='microphone' />
							</VoiceCommand>
						}
						{ this.state.display === 'close' && 
							<Close onClick={ this.stop }>
								<FontAwesome name='times' />
							</Close>
					   }
					</SearchBarInput>
				</SearchBar>
				{ this.renderContacts() }
				<Button
					addNewContact={this.props.addNewContact} />
			</Wrapper>
		);
	}
}


Search.propTypes = {
	fetchContact: PropTypes.func.isRequired,
	searchContacts: PropTypes.func.isRequired,
	addNewContact: PropTypes.func.isRequired,
	contacts: PropTypes.array
}

export default Search;
