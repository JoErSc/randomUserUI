import React, { Component } from 'react';
import Gender from './Gender';


class ListFilterPanel extends Component {
  render(){
    return(
        <div>
        <div className='ListFilterPanel' onClick={(e) => e.stopPropagation()}>
          <Gender/>
          <button onClick={ this.props.closeHandler }>Close</button>
        </div>

        {/* Cover will catch clicks outside the panel, used to toggle */}
        <div className='ListFilterPanelCover' title='Close'></div>
      </div>
    )
  }
}

export default ListFilterPanel;
