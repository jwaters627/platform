import React from 'react';
import DownCarat from 'react-material-icons/icons/navigation/expand-more';
import UpCarat from 'react-material-icons/icons/navigation/expand-less';
import styles from './resultsSection.scss';
import {Element} from 'react-scroll';

class ResultsSection extends React.Component {
	 constructor(props) {
        super(props);
        this.state = {
            sections:[{id:1, title: 'Where is the conversation?', name: 'where', image: '../../../common/img/whereIsTheConvoScreenShot.png', collapsed: false},
            {id: 2, title: 'What are people saying?', name: 'what', image: '../../../common/img/whatArePeopleSayingScreenShot.png', collapsed: false},
            {id: 3, title: 'How are people feeling?', name: 'how', image: '../../../common/img/howArePeopleFeelingScreenShot.png', collapsed: false},
            {id: 4, title: 'Who is the audience?', name: 'who', image: '../../../common/img/whoIsTheAudienceScreenShot.png', collapsed: false},
            ],
            sectionsBritain:[{id:1, title: 'Where is the conversation?', image: '../../../common/img/whereIsTheConvoScreenShot.png', collapsed: false},
            {id: 2, title: 'What are people saying?', image: '../../../common/img/whatArePeopleSayingScreenShot.png', collapsed: false},
            {id: 3, title: 'How are people feeling?', image: '../../../common/img/howArePeopleFeelingScreenShot.png', collapsed: false},
            {id: 4, title: 'Who is the audience?', image: '../../../common/img/whoIsTheAudienceScreenShot.png', collapsed: false},
            ],
        }
        this.renderSections = this.renderSections.bind(this);
    }

    renderSections(item){
    	
    	return(
        		<div className='suggestedSearchesContainer' key={item.id}>
                    <Element name={item.name} className='element'>
    		    	<div className='contentContainer'>
    			   		<h3 style={{'fontSize': '44px', 'display': 'inline-block', 'marginTop': '0px'}}>{item.title}</h3>
    			   		<img src={item.image} style={{'width': '100%', 'display': 'block', 'marginTop': '32px'}}/>
    				</div>
                    </Element>
    			</div>
		)
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
