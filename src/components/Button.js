import React from 'react';
import glamorous from 'glamorous';
import FontAwesome from 'react-fontawesome';  
import PropTypes from 'prop-types';

const Wrapper = glamorous.div({
	width: '50px',
    height: '50px',
    borderRadius: '50%',
    bottom: '15px',
    right: '15px',
    boxShadow: '0 1px 10px #aaaaaa',
    position: 'fixed',
    display: 'table',
    background: '#ff8100',
    transition: 'all 500ms',
    cursor: 'pointer',

    '&:hover':{
        background: '#e87702',
    },
});

const WrapperInner = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle',
	textAlign: 'center',
	color: '#fff'
});

class Button extends React.Component{

    constructor(props){
        super(props);

        this.add = this.addContact.bind(this);

    }

    addContact(){
        this.props.addNewContact();
    }

    render(){
        return (
            <Wrapper onClick={ this.add } >
                <WrapperInner>
                    <FontAwesome name='plus' />
                </WrapperInner>
            </Wrapper>
        );
    }

}

Button.propTypes = {
    addNewContact: PropTypes.func.isRequired
}

export default Button;