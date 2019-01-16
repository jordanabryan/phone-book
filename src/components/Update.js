import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const Wrapper = glamorous.div({
	display: 'block',
	position: 'relative',
	width: '100%',
	height: '100%',
	margin: '0 auto',
	maxWidth: '600px',
})

const Form = glamorous.form({
	display: 'block',
	position: 'relative'
});

const OptionsBar = glamorous.div({
	width: '100%',
	height: '50px',
	padding: '0 10px',
	display: 'table',
	background: '#eeeeee'
})

const OptionBarInner = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	textAlign: 'center',
	textTransform: 'uppercase'
})

const OptionHolder = glamorous.div({
	display: 'grid',
	gridGap: '10px',
	gridTemplateColumns: 'auto auto',

	'@media(max-width:840px)':{
		paddingLeft: '0px',
		width: '100%',
		gridTemplateColumns: '50% 50%',
	},

	'@supports not (display: grid)': {
		display: 'flex',
		flexWrap: 'wrap',
	}
});

const OptionLink = glamorous.div({
	'@supports not (display: grid)': {
		width: '50%',	
		display: 'flex',
	},

	'& .button':{
		color: '#ff8100',
		border: 'none',
		background: 'transparent',
		fontSize: '1em',
		textTransform: 'uppercase',
		padding: '0px 20px',
		height: '100%',
		width: '100%',
		display: 'block',
		textDecoration: 'none',
	}
})

const AddContact = glamorous.div({
	padding: '2%',
})

const Inputholder = glamorous.div({
	margin: '0px 0 25px 0',
	height: '30px',
	width: '100%',
	display: 'table',
});

const InputWrapper = glamorous.div({
	margin: '0 0 25px 0'
});

const InputHolder = glamorous.div({
	margin: '10px 0 0 0'
});

const Label = glamorous.label({
    display: 'block',
    margin: '5px',
    position: 'relative',
    fontSize: '1.4em',
    transition: 'all 500ms',
    height: '28px',
    color: '#ccc',
});

const Input = glamorous.input({
	padding: '2%',
	width: '100%',
	border: 'solid 1px #eee',
	fontSize: '1.2em',
	outline: 'none'
});

class Update extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			name: '',
			surname: '',
			phone: '',
			email: '',
			website: '',
			dob: '',
			facebook: '',
			instagram: '',
			twitter: '',
		};

		this.removeContact = this.remove.bind(this);

	}

	componentWillMount(){

		this.setState({
			name: this.props.contact.name,
			surname: this.props.contact.surname,
			phone: this.props.contact.phone,
			email: this.props.contact.email,
			website: this.props.contact.website,
			dob: this.props.contact.dob,
			facebook: this.props.contact.facebook,
			instagram: this.props.contact.instagram,
			twitter: this.props.contact.twitter,
		})

	}

	componentWillReceiveProps(nextProps){
	
		if(nextProps.contact !== this.props.contact){
			this.setState({someState: someValue });

			this.setState({
				name: (nextProps.contact.name ? nextProps.contact.name : ''),
				surname: (nextProps.contact.surname ? nextProps.contact.surname : ''),
				phone: (nextProps.contact.phone ? nextProps.contact.phone : ''),
				email: (nextProps.contact.email ? nextProps.contact.email : ''),
				website: (nextProps.contact.website ? nextProps.contact.website : ''),
				dob: (nextProps.contact.dob ? nextProps.contact.dob : ''),
				facebook: (nextProps.contact.facebook ? nextProps.contact.facebook : ''),
				instagram: (nextProps.contact.instagram ? nextProps.contact.instagram : ''),
				twitter: (nextProps.contact.twitter ? nextProps.contact.twitter : ''),
			})

		}

	}

	remove(){
		this.props.removeUpdateContact();
	}

	onSubmit(values){    
		this.props.updateContact(this.state, this.props.contact);        
	}

	onNameInput(event){ this.setState({ name: event.target.value }); }
	onSurnameInput(event){ this.setState({ surname: event.target.value }); }
	onPhoneInput(event){ this.setState({ phone: event.target.value }); }
	onEmailInput(event){ this.setState({ email: event.target.value }); }
	onWebsiteInput(event){ this.setState({ website: event.target.value }); }
	onDobInput(event){ this.setState({ dob: event.target.value }); }
	onFacebookInput(event){ this.setState({ facebook: event.target.value }); }
	onInstagramInput(event){ this.setState({ instagram: event.target.value }); }
	onTwitterInput(event){ this.setState({ twitter: event.target.value }); }

	render(){

		return(
			<Wrapper>
				<Form onSubmit={ this.onSubmit.bind(this) }>
					<OptionsBar>
						<OptionBarInner>
							<OptionHolder>
								<OptionLink>
									<span onClick={ this.removeContact } className='button'>cancel</span>
								</OptionLink>
								<OptionLink>
									<button type='submit' className='button'>save</button>
								</OptionLink>
							</OptionHolder>
						</OptionBarInner>
					</OptionsBar>
				
					<AddContact>
						<InputWrapper>
							<Label>Name</Label>
							<InputHolder>
								<Input 
									type="text" 
									name="name"
									autoComplete="off"
									placeholder='name'
									value={ this.state.name }
									onChange={ this.onNameInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>

						<InputWrapper>
							<Label>Surname</Label>
							<InputHolder>
								<Input 
									type="text" 
									name="surname"
									autoComplete="off"
									placeholder='surname'
									value={ this.state.surname }
									onChange={ this.onSurnameInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>

						<InputWrapper>
							<Label>Phone</Label>
							<InputHolder>
								<Input 
									type="text" 
									name="phone"
									autoComplete="off"
									placeholder='phone'
									value={ this.state.phone }
									onChange={ this.onPhoneInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>

						<InputWrapper>
							<Label>Email</Label>
							<InputHolder>
								<Input 
									type="email" 
									name="email"
									autoComplete="off"
									placeholder='email'
									value={ this.state.email }
									onChange={ this.onEmailInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>
						
						<InputWrapper>
							<Label>Website</Label>
							<InputHolder>
								<Input 
									type="text" 
									name="website"
									autoComplete="off"
									placeholder='website'
									value={ this.state.website }
									onChange={ this.onWebsiteInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>

						<InputWrapper>
							<Label>DOB</Label>
							<InputHolder>
								<Input 
									type="text" 
									name="dob"
									autoComplete="off"
									placeholder='dob'
									value={ this.state.dob }
									onChange={ this.onDobInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>

						<InputWrapper>
							<Label>Facebook</Label>
							<InputHolder>
								<Input 
									type="text" 
									name="facebook"
									autoComplete="off"
									placeholder='facebook'
									value={ this.state.facebook }
									onChange={ this.onFacebookInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>

						<InputWrapper>
							<Label>Instagram</Label>
							<InputHolder>
								<Input 
									type="text" 
									name="instagram"
									autoComplete="off"
									placeholder='instagram'
									value={ this.state.instagram }
									onChange={ this.onInstagramInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>

						<InputWrapper>
							<Label>Twitter</Label>
							<InputHolder>
								<Input 
									type="text" 
									name="twitter"
									autoComplete="off"
									placeholder='twitter'
									value={ this.state.twitter }
									onChange={ this.onTwitterInput.bind(this) } />
							</InputHolder>	
						</InputWrapper>
					</AddContact>
				</Form>
			</Wrapper>
		);
	}
}

Update.propTypes = {
	contact: PropTypes.func.isRequired,
	removeUpdateContact: PropTypes.func.isRequired,
	updateContact: PropTypes.func.isRequired,
}

export default Update;

