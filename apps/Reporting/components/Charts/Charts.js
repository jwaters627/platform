'use strict';

import React from 'react';
import TotalImpressions from '../TotalImpressions/TotalImpressions';
import DayAndTime from '../DayAndTime/DayAndTime';
import AutoSentiment from '../AutoSentiment/AutoSentiment';
import BarsCard from '../BarsCard/BarsCard';
import Geography from '../Geography/Geography';
import classNames from 'classnames';
import ReactGridLayout from 'react-grid-layout';
import MoreVert from 'react-material-icons/icons/navigation/more-vert';
import { SketchPicker } from 'react-color';


import data from '../../data';



const emptyImage = require('../../../../dist/img/emptyCanvasImage.png');
require('./charts.scss');

class Charts extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            hovering: false,
            hoveringId: false,
            showColor: false,
        }
        
        this.renderCharts = this.renderCharts.bind(this);
        this.showEllipsis = this.showEllipsis.bind(this);
        this.hideEllipsis = this.hideEllipsis.bind(this);
        this.setLegend = this.setLegend.bind(this);
        this.colorDropDownClick =this.colorDropDownClick.bind(this);
        }

    
    setDataVol(item){
        var arr = {data:[], colors:[]};

        for(var i =0; i < item.monitors.length; i++){
            arr.data.push(data[item.monitors[i]].volume)
            arr.colors.push(this.props.monitors[item.monitors[i]].color)
        }

        return arr
    }

     setDataDayAndTime(item){
         var arr = {data:[], colors:[]};

        for(var i =0; i < item.monitors.length; i++){
            arr.data.push(data[item.monitors[i]].dayAndTime)
            arr.colors.push(this.props.monitors[item.monitors[i]].color)
        }

        return arr
    }

     setDataTopHashtags(item){
        var arr = {cardData:[], colors:[]};
        for(var i =0; i < item.monitors.length; i++){
            arr.cardData.push(data[item.monitors[i]].topHashtags)
            arr.colors.push(this.props.monitors[item.monitors[i]].color)
        }
        return arr
    }

    setDataAutoSentiment(item){
        for(var i =0; i < item.monitors.length; i++){
            return(data[item.monitors[i]].sentiment)
        }
    }

    setDataGeography(item){
        let arrGeo = {cardData:[], colors:[]};
        for(var i =0; i < item.monitors.length; i++){
            let newObj = data[item.monitors[i]].geography
            Object.keys(data[item.monitors[i]].geography).forEach(function(key,index){newObj[key].percentage = ((data[item.monitors[i]].geography[key].value/data[item.monitors[i]].totalGeo) * 100)})
            arrGeo.cardData.push(newObj)
            arrGeo.colors.push(this.props.monitors[item.monitors[i]].color)
            let colorArray = this.props.monitors[item.monitors[i]].color.split('');
            if(colorArray.length == 7)colorArray.splice(0,1);
            for(let n = 0; n < colorArray.length; n++){
                if(colorArray[n] == 'a'){colorArray[n] = 'F'}
                else if(colorArray[n] == 'b'){colorArray[n] = 'F'}
                else if(colorArray[n] == 'c'){colorArray[n] = 'F'}
                else if(colorArray[n] == 'd'){colorArray[n] = 'F'}
                else if(colorArray[n] == 'e'){colorArray[n] = 'F'}
                else if(colorArray[n] == 'f'){colorArray[n] = 'F'}
                else if(colorArray[n] == '9'){colorArray[n] = 'F'}
                else if(colorArray[n] == '8'){colorArray[n] = 'E'}
                else if(colorArray[n] == '7'){colorArray[n] = 'D'}
                else if(colorArray[n] == '6'){colorArray[n] = 'C'}
                else if(colorArray[n] == '5'){colorArray[n] = 'B'}
                else if(colorArray[n] == '4'){colorArray[n] = 'A'}
                else{
                    let newNum = Number(colorArray[n]);
                    colorArray[n] = (newNum += 6).toString()}
            }
            arrGeo.colors.push('#' + colorArray.join(''))
        }
        return arrGeo
    }

    showEllipsis(item){
        this.setState({hoveringId: item.id})
    }

    hideEllipsis(){
        this.setState({hoveringId: false})
    }

    colorDropDownClick(e, monitorNumber){
        this.setState({showColor: !this.state.showColor})
        this.props.setChosenMonitor(monitorNumber)
    }
 
    setLegend(monitorNumber){
        let colorPicker = (<div></div>)
        if(this.state.showColor && monitorNumber === this.props.chosenMonitor){
            colorPicker = (<div style={{'position': 'fixed', 'zIndex': '1000000'}}><SketchPicker color={this.props.monitors[monitorNumber].color} style={{'position': 'fixed', 'marginTop': '36px'}} onChangeComplete={this.props.setChipColor}/></div>)
        }
        return(
            <div style={{'display': 'inline-block'}} key={this.props.monitors[monitorNumber].id}>
                <div onClick={( e ) => { this.colorDropDownClick( e, monitorNumber ) }} className='colorDot' style={{'backgroundColor': this.props.monitors[monitorNumber].color}}></div>
                <p style={{'display': 'inline-block', 'marginLeft': '6px'}}>{this.props.monitors[monitorNumber].name}</p>
                {colorPicker}
            </div>
        )
    }

   

    renderCharts(item){

        let myClass = classNames(
            'chart',
            
        );
        let chartTitle = (<h4 className='chartName' id={item.id} onClick={this.props.handleTitleInput}>{item.name}</h4>);
            if(this.props.editing && this.props.selectedTitle == item.id){
                chartTitle = (<input style={{'display':'inline-block', 'font-size': '18px'}} type="text" defaultValue={this.props.clickedText} autoFocus={true} onBlur={( e ) => { this.props.handleTitleUnfocus( e, item ) }} className='inputField' onKeyDown={( e ) => { this.props.setName( e, item ) }} />)
            }

        let analysisType = (<div></div>)
        if(item.chartType === 0){
            analysisType = (
                <TotalImpressions 
                    width={item.size.width} 
                    height={item.size.height} 
                    chartOption={item.chartOption} 
                    dataToRender={this.setDataVol(item)} 
                    color={item.color} 
                    addChartOpen={this.props.openAddChart} 
                />
            )
        }
        else if(item.chartType == 1){
            analysisType = (
                <AutoSentiment 
                    width={item.size.width} 
                    height={item.size.height} 
                    data={this.setDataAutoSentiment(item)} 
                    addChartOpen={this.props.openAddChart} 
                />
            )
        }
        else if(item.chartType == 2){
            analysisType = (
                <DayAndTime 
                    width={item.size.width} 
                    height={item.size.height} 
                    dataToRender={this.setDataDayAndTime(item)} 
                    addChartOpen={this.props.openAddChart} 
                    chartOption={item.chartOption}
                    chartType={item.chartType}
                />
            )
        }
        else if(item.chartType == 3){
            analysisType = (
                <BarsCard 
                    width={item.size.width} 
                    height={item.size.height} 
                    data={this.setDataTopHashtags(item)} 
                    addChartOpen={this.props.openAddChart} 
                />
            )
        }
        else if(item.chartType == 5){
            analysisType = (
                <Geography 
                    width={item.size.width} 
                    height={item.size.height} 
                    data={this.setDataGeography(item)}
                    addChartOpen={this.props.openAddChart} 
                />
            )
        }

        let ellipsis = (<div></div>)
        if((this.state.hoveringId === item.id) || this.props.showMoreContainer === item.id){
            ellipsis = (<MoreVert onClick={ ( e ) => { this.props.handleEllipsisClick( e, item ) }} style={{'display': 'inline-block', 'float': 'right', 'marginTop': '6px'}}/>)
        }
        let moreContainer = (<div></div>);
        if(this.props.showMoreContainer === item.id){
            moreContainer = (<div className='moreContainer'>
                                <p onClick={ ( e ) => { this.props.deleteChart( e, item ) }} className='deleteButton'>Delete Chart</p>
                                <p onClick={ ( e ) => { this.props.duplicateChart( e, item ) }} className='deleteButton'>Duplicate Chart</p>
                                <p id={item.id} className='deleteButton' onClick={this.props.handleAnnotationInput}>Comment</p>
                            </div>)
        }

        let annotation = (<div></div>);
        if(item.chartAnnotation.length > 0){annotation = (<h4 className='chartAnnotation' style={{'maxWidth': item.size.width}} id={item.id} onClick={this.props.handleAnnotationInput}>{item.chartAnnotation}</h4>)}
        if(this.props.editingAnnotation && this.props.selectedAnnotation == item.id){
                annotation = (<textarea style={{'display':'inline-block', 'font-size': '14px'}} defaultValue={item.chartAnnotation} type="text" autoFocus={true} onBlur={( e ) => { this.props.handleTitleUnfocus( e, item ) }} className='inputField' onKeyDown={( e ) => { this.props.setAnnotation( e, item ) }} />)
            }

        let opacity = 1;
        if((this.props.selectedViz || this.props.selectedViz === 0) && this.props.selectedViz !== item.id){
            opacity = 0.4
        }
        let height = item.size.height + 100;
        let width = item.size.width + 100;
        let allowMove = [1, 1];
        if(this.props.editing){
            allowMove = [1000000, 100000]
        }
        let zindex = 99;
        if(this.props.showMoreContainer === item.id){zindex = 100}
        
        return(
                <div className={myClass} id="singleChart" style={{'display': 'block'}} onMouseEnter={ () => { this.showEllipsis( item ) }} onMouseLeave={this.hideEllipsis}>
                    {chartTitle}
                    {ellipsis}
                    {moreContainer}
                    <div onClick={ ( e ) => { this.props.handleChartClick( e, item ) }}>
                        {analysisType}
                    </div>
                    {item.monitors.map(this.setLegend)}
                    {annotation}
                </div>
        )
    }
 
render(){
    let selectedChartClass = classNames(
        'allChartsContainer',
        {
            "selectedChart": (this.props.selectedViz || this.props.selectedViz === 0),
            "open": (this.props.openAddChart)
        }
    );

    let chartArea = (
            <div className = 'emptyImageCanvas'>
                <img className='emptyImage' src={emptyImage} />
                <h2 className='emptyCanvasText'>Your Report is Empty!</h2>
                <h3 className='emptyCanvasSubText'>Let's clear away the dust bunnies and start adding charts.</h3>
            </div>
        );

    if(this.props.visualizations.length > 0){
        chartArea = (
            <div className={selectedChartClass} onClick={this.props.handleChartAreaClick}>
                {this.renderCharts(this.props.item)}
            </div>
        )
    }

     return(
            chartArea
        )
    }
}


export default Charts;