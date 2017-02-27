import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './ch-select.scss';

export default class CHSelect extends React.Component {
  static defaultProps = {
    closeOnClickOutside: true
  }
  constructor( props ) {
    super( props );
    this.state = {
      isOpen: props.hasOwnProperty("isOpen") ? props.isOpen : false
    };
    //TODO: Expose web api events for usability.

  }
  componentWillMount() {
    document.addEventListener('click', this.onClickOutside, false);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.hasOwnProperty("isOpen")) {
      this.setState({
        isOpen: nextProps.isOpen
      });
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside, false);
  }
  onClickOutside = (event) => {
    if (this.props.closeOnClickOutside && this.state.isOpen) {
      const domNode = ReactDOM.findDOMNode(this);
      if (!domNode || !domNode.contains(event.target)) {
        this.onClose();
        this.setState({
          isOpen: false
        });
      }
    }
  }
  onSelect = ( child, e ) => {
    if ( typeof child.props.onSelect === "function" ) {
      //user gave this child an onSelect
      child.props.onSelect();
    }
    if ( typeof this.props.onSelect === "function" ) {
      //singular onSelect handler passed as prop to ch-select
      this.props.onSelect( child );
    }
  }
  onOpen = () => {
    if ( typeof this.props.onOpen === "function" ) {
      this.props.onOpen();
    }
  }
  onClose = () => {
    if ( typeof this.props.onClose === "function" ) {
      this.props.onClose();
    }
  }
  toggleMenu = ( e ) => {
    let newState = !this.state.isOpen;
    if (newState) {
      this.onOpen();
    } else {
      this.onClose();
    }
    this.setState({isOpen: !this.state.isOpen});
  }
  renderLabel(){
    const { label, disabled = false } = this.props,
          { isOpen } = this.state,
          arrowClass = classNames({"arrow-up":isOpen, "arrow-down":!isOpen});

    if ( disabled ) {
      return <div>{label}</div>;
    } else {
      return <div onClick={this.toggleMenu}>{label}<div className={arrowClass}></div></div>;
    };
  }
  renderList () {
    const { selected = "", children, disabled = false } = this.props,
          { isOpen } = this.state,
          wrapperClasses = classNames("ch-select",{"open": isOpen}),
          arrowClass = classNames({"arrow-up":isOpen, "arrow-down":!isOpen});

    if ( disabled ) {
      return null;
    } else {
      return (
        <ul>
          {React.Children.map( children, ( child ) => {
            const onClick = ( e ) => {this.onSelect( child )},
                  selectedClass = classNames({
                    "selected": selected && selected.toString() == child.key.toString()
                  });

            return (
              <li
                key={child.key}
                onClick={onClick}
                className={selectedClass}>
                {child}
              </li>
            );
          })}
        </ul>
      );
    }
  }
  render(){
    const { disabled = false } = this.props,
          { isOpen } = this.state,
          wrapperClasses = classNames(
            "ch-select",{
              "open": isOpen,
              "disabled": disabled
            });

    return (
      <div className={wrapperClasses}>
        {this.renderLabel()}
        {this.renderList()}
      </div>
    );
  }
}


/*
usage:
<CHSelect label="Select this.">
  <Something />
  <Something />
  <Something />
  <Something />
</CHSelect>
or
<CHSelect label={SomeComponent}>
  {items.map( item => <Something {...item} /> )}
</CHSelect>
*/