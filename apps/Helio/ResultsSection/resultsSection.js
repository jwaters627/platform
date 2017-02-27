import React from 'react';
import DownCarat from 'react-material-icons/icons/navigation/expand-more';
import UpCarat from 'react-material-icons/icons/navigation/expand-less';
import styles from './resultsSection.scss';

class ResultsSection extends React.Component {
	 constructor(props) {
        super(props);
        this.state = {
            sections:[{id:1, title: 'Where is the conversation?', image: '../../../common/img/whereIsTheConvoScreenShot.png', collapsed: false},
            {id: 2, title: 'What are people saying?', image: '../../../common/img/whatArePeopleSayingScreenShot.png', collapsed: false},
            {id: 3, title: 'How are people feeling?', image: '../../../common/img/howArePeopleFeelingScreenShot.png', collapsed: false},
            {id: 4, title: 'Who is the audience?', image: '../../../common/img/whoIsTheAudienceScreenShot.png', collapsed: false},
            ],
            sectionsBritain:[{id:1, title: 'Where is the conversation?', image: '../../../common/img/whereIsTheConvoScreenShot.png', collapsed: false},
            {id: 2, title: 'What are people saying?', image: '../../../common/img/whatArePeopleSayingScreenShot.png', collapsed: false},
            {id: 3, title: 'How are people feeling?', image: '../../../common/img/howArePeopleFeelingScreenShot.png', collapsed: false},
            {id: 4, title: 'Who is the audience?', image: '../../../common/img/whoIsTheAudienceScreenShot.png', collapsed: false},
            ],
        }
        this.renderSections = this.renderSections.bind(this);
        this.hideSection = this.hideSection.bind(this);
    }

    renderSections(item){
    	let shown = 'block';
    	let carat = <DownCarat onClick={ () => { this.hideSection( item )}} style={{'display': 'inline-block', 'float': 'right', 'marginTop': '20px', 'cursor': 'pointer'}}/>
    	if(item.collapsed === true){
    		shown = 'none'
    		carat = (<UpCarat onClick={ () => { this.hideSection( item )}} style={{'display': 'inline-block', 'float': 'right', 'marginTop': '20px', 'cursor': 'pointer'}}/>)
    	}
    	return(
    		<div className='suggestedSearchesContainer'>
		    	<div className='contentContainer'>
			   		<h3 style={{'fontSize': '44px', 'display': 'inline-block', 'marginTop': '0px'}}>{item.title}</h3>
			   		{carat}
			   		<img src={item.image} style={{'width': '100%', 'display': shown, 'marginTop': '32px'}}/>
				</div>
			</div>
		)
    }

    hideSection(item){
    	item.collapsed = !item.collapsed
    	this.setState({sections: this.state.sections})
    }

	render(){
		return(
			<div>
				{this.state.sections.map(this.renderSections)}
		  	</div>
		)
	}
}

export default ResultsSection;
