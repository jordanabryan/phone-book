import React from 'react';
import glamorous from 'glamorous';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Section = glamorous.div({
    display: 'table',
    width: '100%',
    marginBottom: '20px',
});

const SectionContent = glamorous.div({
    display: 'table-cell',
    verticalAlign: 'middle', 
});

const SectionTitle = glamorous.p({
    color: '#aaaaaa',
    margin: '0 0 5px 0',
});

const SectionInfo = glamorous.p({
    fontSize: '0.8em',
    color: '#aaaaaa',
    margin: '0 0 5px 0',
});

const SectionIcon = glamorous.div({
    display: 'table-cell',
    verticalAlign: 'middle',
    color: '#aaaaaa', 
    width: '7%',
    textAlign: 'right',
    fontSize: '1.4em'
});

class SectionBlock extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const { title, value, icon } = this.props;

        return(
            <Section>
                <SectionContent>
                    <SectionTitle>{ title }</SectionTitle>
                    <SectionInfo>{ value }</SectionInfo>
                </SectionContent>
                <SectionIcon>
                    <FontAwesome name={ icon } />
                </SectionIcon>
            </Section>
        )
    }
}

SectionBlock.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default SectionBlock;