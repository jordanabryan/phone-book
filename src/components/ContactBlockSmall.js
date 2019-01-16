import React from 'react';
import glamorous from 'glamorous';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import myImage from '../assets/blank-profile.png';

const ContactBlock = glamorous.div({
	width: '100%',
	borderBottom: 'solid #eee 1px',
	marginBottom: '5px',

	'&:last-child':{
		borderBottom: 'none'
	}
});

const ContactInner = glamorous.div({
	display: 'table',
	width: '100%',
	padding: '0 10px',
	height: '80px',
	textDecoration: 'none',
	color: '#333'    
})

const ContactImage = glamorous.div({
	width: '40px',
	height: '40px',
	borderRadius: '50%',
	overflow: 'hidden',
	display: 'table-cell',
	verticalAlign: 'middle',

	'& img': {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
	}
});

const ContactName = glamorous.div({
	paddingLeft: '15px',
	display: 'table-cell',
	verticalAlign: 'middle'
});

const Name = glamorous.h3({});


class ContactBlockSmall extends React.Component {
	constructor(props){
		super(props);

		this.onShowClick = this.detailsClick.bind(this);

	}

	showClick(){
		this.setState({
			active: !this.state.active
		});
	}

	detailsClick(){
		this.props.fetchContact(this.props.safename);
	}

	render(){

		const { safename, name, fullname } = this.props;

		return (
			<ContactBlock>
				<ContactInner onClick={ this.onShowClick }>
					<ContactImage>
						<img src={myImage} title={ name } alt={ name } />
					</ContactImage>
					<ContactName>
						<Name>{ fullname }</Name>
					</ContactName>
				</ContactInner>
			</ContactBlock>
		);
	}

}

ContactBlockSmall.propTypes = {
	fetchContact: PropTypes.func.isRequired,
	safename: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};


export default ContactBlockSmall;