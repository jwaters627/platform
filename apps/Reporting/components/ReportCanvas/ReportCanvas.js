'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Charts from '../Charts/Charts';
import mui from 'material-ui';
import Add from 'react-material-icons/icons/content/add';
import Chart from 'react-material-icons/icons/social/poll';
import MoreHoriz from 'react-material-icons/icons/navigation/more-horiz';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import classNames from 'classnames';
import _ from 'lodash';
import {Responsive, WidthProvider} from 'react-grid-layout';

require('./reportCanvas.scss');

let GridLayout = WidthProvider(Responsive);

class ReportCanvas extends React.Component {


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
        this.placeholder = {};
        this.gridProps = {
            rowHeight: 30,
            breakpoints: {lg: 1200, md: 996, sm: 768, xs: 360, xxs: 0},
            cols: {lg: 16, md: 12, sm: 8, xs: 4, xxs: 2},
            verticalCompact: true,
            draggableCancel: 'input',
            color: '#a432b3'
        };
        this.createChart = this.createChart.bind(this)
    }


    createChart(item){
        let selectChartClass = classNames(
            'card-parent',
            {
                "selected": (item.id === this.props.selectedViz)
            }
        );
         return (
            <div key={item.id} id={'chartId' + item.id} data-grid={{x: 1, y: 0, w: 6, h: 8, maxW: 16, minW: 4, minH: 6}} className={selectChartClass}>
                <Charts item={item} {...this.props}/>
            </div>
        );
    }

   
    onUpdatePlaceholder = (layout, oldItem, newItem, placeholder, e, element) => {
        this.placeholder = placeholder;
    }

    onResize = (layout, oldItem, newItem, placeholder, e, element) => {
        let self = this;
        if (_.isEqual(oldItem, newItem)) {
            return false;
        } else if (typeof(newItem) != 'undefined') {
            this.props.visualizations.forEach(function (viz) {
                layout.forEach(function (item) {
                    if (+item.i == viz.id) {

                        // prevent users from doing something dumb
                        if (viz.type == 'gender') {
                            item.maxW = (item.h * (self.gridProps.rowHeight/(self.gridProps.breakpoints.lg/self.gridProps.cols.lg)));
                        }

                        if ('geography' == viz.type) {
                            //keep min and proportion
                            // TODO, could not figure it out
                        }
                    }
                });
            });
        }
    }

    onResizeOrDragStop = (layout, oldItem, newItem, placeholder, e, element) => {
        var el = document.getElementById("chartId" + oldItem.i);
        this.props.visualizations[oldItem.i].size.width = (el.offsetWidth - 10)
        this.props.visualizations[oldItem.i].size.height = (el.offsetHeight - 110)
        if (_.isEqual(oldItem, newItem)) {
            return false;
        } else if (typeof(newItem) != 'undefined') {
            let visualizations = [], placeholder = this.placeholder;
            this.props.visualizations.forEach(function(viz) {
                let newViz = {};
                layout.forEach(function(item) {
                    if (item.i == placeholder.i && (item.x != placeholder.x || item.y != placeholder.y)) {
                        item = placeholder;
                    }

                    if (+item.i == viz.id) {
                        newViz.height = item.h;
                        newViz.width = item.w;
                        newViz.x = item.x;
                        newViz.y = item.y;
                        newViz.id = viz.id;
                        newViz.name = viz.name;     // Not necessary, but nice for debugging
                        visualizations.push(newViz);
                    }
                });

            });

            
        }

    }

    
   

    render() {
        let canvasClass = classNames(
            'reportCanvas',
            {
                "greyedCanvas": (this.props.selectedViz || this.props.selectedViz === 0)
            }
        );

        return (
            <div className={canvasClass} onClick={this.props.handleChartAreaClick}>
                <div className='titleContainer'>
                    <h3 className='logoInput'>+ Add Logo</h3>
                    <input className='reportTitle' defaultValue='Untitled Report'></input>
                </div>
                <GridLayout {...this.gridProps} onResize={this.onResize} style={{'backgroundColor': '#ffffff'}} onResizeStop={this.onResizeOrDragStop} onDragStop={this.onResizeOrDragStop}>
                    {_.map(this.props.visualizations, this.createChart)}
                </GridLayout>
            </div>
        );
    }
}

export default ReportCanvas;