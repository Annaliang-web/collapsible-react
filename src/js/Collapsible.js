import React from 'react';
import PropTypes from 'prop-types';

class Collapsible extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isExpanded: false,
    }
  }
  handleToggle(e){
    e.preventDefault();
    // console.log(this.refs.inner.clientHeight);
    this.setState({
      isExpanded: !this.state.isExpanded,
      height: this.refs.inner.clientHeight
    })
  }
  render(){
    const {title, children} = this.props;
    // const {isExpanded} = this.state;
    const currentHeight = this.state.isExpanded ? this.state.height : 0;
    return( 
      <div className={`panel ${this.state.isExpanded ? 'is-expanded': ''}`} onClick={(e)=> this.handleToggle(e)}>
        <div className="panel-heading">
          <h2>{title}</h2>
        </div>
        <div className="panel-collapse" style={{height: currentHeight + 'px'}}>
          <div className="panel-body" ref="inner">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Collapsible.PropTypes = {
  title: PropTypes.string,
}
export default Collapsible; 