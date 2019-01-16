import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import SectionBlock from './SectionBlock';
import Loading from './Loading';
import ConfirmAlert from './ConfirmAlert';

import myImage from '../assets/blank-profile.png';

const Wrapper = glamorous.div({
	display: 'block',
	position: 'relative',
	width: '100%',
	height: '100%',
	margin: '0 auto',
	maxWidth: '600px',
})

const WrapperInner = glamorous.div({});

const ProfileHeader = glamorous.div({
	overflow: 'hidden',
	height: '250px',
	position: 'relative',
    zIndex: '2',
})

const BlurOver = glamorous.div({
	position: 'absolute',
	zIndex: '-1',
	top: '-5%',
	left: '-5%',
	width: '110%',
	height: '110%',
	filter: 'blur(2px)',

	'& img': {
		width: '100%',
	}
});

const ImageLighten = glamorous.div({
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
})

const OptionsBar = glamorous.div({
	height: '40px',
	width: '100%',
	padding: '0 10px'
})

const OptionsButton = glamorous.div({
  	padding: '5px',
  	display: 'inline-block',
});

const OptionsButtonInner = glamorous.div({
	textDecoration: 'none',
	color: '#fff',
	fontWeight: 'bold',
	textShadow: '0 0 1px #333333',
	cursor: 'pointer'
});

const ProfileTitle = glamorous.div({
	position: 'absolute',
	textShadow: '0 0 1px #333333',
	bottom: '10px',
	left: '10px',

    '& h3':{
        color: '#fff',
        fontSize: '1.6em'
    }

})

const MainInfo = glamorous.div({
  padding: '2%'
});

class Contact extends React.Component{
	constructor(props){
		super(props);

        this.clickBack = this.backClick.bind(this);
        this.clickEdit = this.editClick.bind(this);
        this.clickDelete = this.deleteClick.bind(this)

    }

    backClick(e){
        this.props.removeFetchedContact();
    }

    editClick(e){
        this.props.setUpdateContact();
    }

    deleteClick(){
        this.props.showConfirm(); 
    }

    render(){
        
        const { safeName, name, surname, phone, email, website, dob, facebook, instagram, twitter } = this.props.contact;
    
        const { deleteContact, showConfirmBool, showConfirm, cancelConfirm } = this.props;

        return(
            <Wrapper>
                <WrapperInner>
                    <ProfileHeader>
                        <BlurOver>
                            <ImageLighten></ImageLighten>
                            <img src={ myImage } alt={safeName} title={safeName} />
                        </BlurOver>
                        <OptionsBar>
                            <div className='options-bar-inner'>
                                <OptionsButton>
                                    <OptionsButtonInner onClick={ this.clickBack }>back</OptionsButtonInner>
                                </OptionsButton>
                                <OptionsButton>
                                    <OptionsButtonInner onClick={ this.clickEdit }>edit</OptionsButtonInner>
                                </OptionsButton>
                                <OptionsButton>
                                    <OptionsButtonInner onClick={ this.clickDelete }>delete</OptionsButtonInner>
                                </OptionsButton>
                            </div>
                        </OptionsBar>
                        <ProfileTitle>
                            <h3>{ `${name} ${surname}` }</h3>
                        </ProfileTitle>
                    </ProfileHeader>
                    <MainInfo>
						{ phone && <SectionBlock title='phone' icon='phone' value={ phone } /> }
						{ email && <SectionBlock title='email' icon='envelope-open' value={ email } /> }
						{ website && <SectionBlock title='website' icon='globe' value={ website } /> }
						{ dob && <SectionBlock title='dob' icon='calendar' value={ dob } /> }
						{ facebook && <SectionBlock title='facebook' icon='facebook' value={ facebook } /> }
						{ instagram && <SectionBlock title='instagram' icon='instagram' value={ instagram } /> }
						{ twitter && <SectionBlock title='twitter' icon='twitter' value={ twitter } /> }
                    </MainInfo>
                </WrapperInner>

                { showConfirmBool === true && 
                    <ConfirmAlert
                        title='Delete contact?'
                        message=''
                        confirmLabel='Delete'
                        cancelLabel='Cancel' 
                        onConfirm={ deleteContact }
                        onCancel={ cancelConfirm }
                        safeName={ safeName } />
                }

            </Wrapper>
        )
    }

}

Contact.propTypes = {
    setUpdateContact: PropTypes.func.isRequired,
    removeFetchedContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
    showConfirm: PropTypes.func.isRequired,
    showConfirmBool: PropTypes.bool.isRequired,
}

export default Contact;