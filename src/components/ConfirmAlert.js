import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
	background: 'rgba(0, 0, 0, 0.2)',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	position: 'fixed',
	display: 'block',
	zIndex: '2'
});

const ConfirmBox = glamorous.div({
	maxWidth: '100%',
	width: '500px',
	padding: '20px',
	background: '#fff',
	color: '#333',
	borderRadius: '5px',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});

const ConfirmTitle = glamorous.div({
	fontSize: '1.2em',
	marginBottom: '30px',
});

const ConfirmContent = glamorous.div({
	marginBottom: '30px',
});

const ConfirmBoxes = glamorous.div({
textAlign: 'right'
});

const Cancel = glamorous.div({
	color: '#ff8100',
	border: 'none',
	padding: '10px',
	fontSize: '0.8em',
	textTransform: 'uppercase',
	borderRadius: '5px',
	marginRight: '2%',
	display: 'inline-block',
	cursor: 'pointer',
	transition: 'all 500ms',
});

const Confirm = glamorous.div({
	color: '#ff8100',
	border: 'none',
	padding: '10px',
	fontSize: '0.8em',
	textTransform: 'uppercase',
	borderRadius: '5px',
	display: 'inline-block',
	cursor: 'pointer',
	transition: 'all 500ms',
});

class ConfirmAlert extends React.Component {
	constructor(props){
		super(props);

		this.onConfrimClick = this.confirm.bind(this);
		this.onCancelClick = this.cancel.bind(this);

	}

	confirm(e){
		this.props.onConfirm(this.props.safeName);
	}

	cancel(e){
		this.props.onCancel();
	}


	render(){

		const { title, message, confirmLabel, cancelLabel } = this.props;

		return(
			<Wrapper>
				<ConfirmBox>
					<ConfirmTitle>{ title }</ConfirmTitle>
					{ message ? <ConfirmContent>{ message }</ConfirmContent> : '' }
					<ConfirmBoxes>
						<Cancel onClick={ this.onCancelClick }>{ cancelLabel }</Cancel>
						<Confirm onClick={ this.onConfrimClick }>{ confirmLabel }</Confirm>
					</ConfirmBoxes>
				</ConfirmBox>
			</Wrapper>
		)
	}

}

ConfirmAlert.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	confirmLabel: PropTypes.string.isRequired,	
	cancelLabel: PropTypes.string.isRequired,	
	onConfirm: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	safeName: PropTypes.string.isRequired,
};

export default ConfirmAlert;