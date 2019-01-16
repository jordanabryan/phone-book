import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';


const Wrapper = glamorous.div({
	poisition: 'relative',
	top: 0,
	left: 0,
	top: '100%',
	left: '100%',
	background: 'rgba(255, 255, 255, 0.8)',
});

const WrapperInner = glamorous.div({
	width: '100px',
	height: '100px',
	poisition:' absolute',
	top: '50%',
	left: '50%',
	margin: '-50px 0 0 -50px',
});

class Error extends React.Component {
    render(){
        return (
            <Wrapper>
            	<WrapperInner>{ this.props.message }</WrapperInner>
            </Wrapper>
        )
    }
}

Error.propTypes = {
	message: PropTypes.string.isRequired
}

export default Error;