import React from 'react';

import ResultsHeader from '../ResultsHeader/resultsHeader';
import FilterBar from '../FilterBar/filterBar';
import ResultsSection from '../ResultsSection/resultsSection';
import SourceBar from '../SourceBar/sourceBar';
import styles from './results.scss';

class Results extends React.Component {
	
	render(){
		return(
			<div>
			    <ResultsHeader />
		    	<FilterBar filters={this.props.filters} />
                <SourceBar />
                <p className='sourceText'><span style={{'fontWeight': '600'}}>498,359 </span>posts from Twitter, Facebook and Instagram (sampled)</p>
                <p className='learnMoreText'>Learn more about this data</p>
                <ResultsSection filters={this.props.filters}/>
		  	</div>
		)
	}
}

export default Results;
