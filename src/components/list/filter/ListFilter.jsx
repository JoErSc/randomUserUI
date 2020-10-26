import React, { Component } from 'react';
import './listFilter.css';
import ListFilterPanel from './ListFilterPanel';



class ListFilter extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      toggle: false
    };
  }

  handleClick(){
    this.setState({toggle:!this.state.toggle});
  }

  render() {
    const {toggle} = this.state;

    return (
      // TODO: Filter and instant load do not go hand in hand,
      // Make it possible to load more profiles after filtering
      <div onClick={() => this.handleClick()} className='listFilterIcon'>
        F
        {
          toggle?<ListFilterPanel closeHandler={ this.handleClick }/>:null
        }
      </div>
    );
  }
}

export default ListFilter;
