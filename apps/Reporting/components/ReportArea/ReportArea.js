'use strict';

import React from 'react';
import AddChart from '../AddChart/AddChart';
import ReportCanvas from '../ReportCanvas/ReportCanvas';
import mui from 'material-ui';
import Add from 'react-material-icons/icons/content/add';
import Chart from 'react-material-icons/icons/social/poll';
import Clock from 'react-material-icons/icons/action/query-builder';
import Share from 'react-material-icons/icons/social/share';
import Trash from 'react-material-icons/icons/action/delete';
import MoreHoriz from 'react-material-icons/icons/navigation/more-horiz'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

require('./reportArea.scss');

class ReportArea extends React.Component {


     static childContextTypes =
    {
        muiTheme: React.PropTypes.object
    }

    getChildContext()
    {
        return {
            muiTheme: getMuiTheme()
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

   


   

    render() {

        return (
            <div className='entireReportArea'>
                <div className='reportNavButton' onClick={this.props.handleAddChartClick}>
                    <span aria-hidden="true"><Chart style={{'width': '28px', 'height': '28px', 'display': 'inline-block', 'color': '#515151', 'verticalAlign': 'middle'}} /></span>
                    <span className="label">Add Charts</span>
                </div>
                <div className='reportNavButton' onClick={this.props.schedulerClick}>
                    <span aria-hidden="true"><Clock style={{'width': '28px', 'height': '28px', 'display': 'inline-block', 'color': '#515151', 'verticalAlign': 'middle'}} /></span>
                    <span className="label">Schedule</span>
                </div>
                <div className='reportNavButton'>
                    <span aria-hidden="true"><Share style={{'width': '28px', 'height': '28px', 'display': 'inline-block', 'color': '#515151', 'verticalAlign': 'middle'}} /></span>
                    <span className="label">Share & Download </span>
                </div>
                <div className='reportNavButton'>
                    <span aria-hidden="true"><Trash style={{'width': '28px', 'height': '28px', 'display': 'inline-block', 'color': '#515151', 'verticalAlign': 'middle'}} /></span>
                    <span className="label">Delete Report</span>
                </div>
                <AddChart 
                        {...this.props}
                    />
                <ReportCanvas 
                        {...this.props}
                />

            </div>
        );
    }
}

export default ReportArea;