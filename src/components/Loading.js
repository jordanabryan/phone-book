import React from 'react';
import glamorous from 'glamorous';

import myImage from '../assets/loader.gif';

const Wrapper = glamorous.div({
	position: 'relative',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: 'rgba(255, 255, 255, 0.8)',
});

const WrapperInner = glamorous.div({
	width: '100px',
	height: '100px',
	position:' absolute',
	top: '50%',
	left: '50%',
	margin: '-50px 0 0 -50px',
});

class Loading extends React.Component {
    render(){
        return (
            <Wrapper>
            	<WrapperInner>
					<img src={ myImage } alt='loader' title='loader' />
            	</WrapperInner>
            </Wrapper>
        )
    }
}


export default Loading;