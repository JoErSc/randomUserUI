import React, { Component } from 'react';

import { GenderFilters } from '../../constants/Filters'
import {parseProfileDoB, parseProfileHeader} from '../profile/ProfileFunctions'

/*
  Return font-size based on number of chars in the title
*/
function getBestFontSize(title) {

  if (title.length > 20) {
    return "12px";
  }

  if (title.length > 12) {
    return "14px";
  }

  return "16px";
}

class ListCard extends Component {

  render() {
    const {value, genderFilter} = this.props;

    // If genderFilter, skip all not matching selection    
    if(genderFilter !== GenderFilters.SHOW_ALL && genderFilter !== value.gender ) return null;

    const header = parseProfileHeader(value);
    const dob = parseProfileDoB(value);
    const thumbnail = value.picture?value.picture.large:"";


    return (
      // TODO: Must use profile consts for dimensions
      <div className='listCard'>

        {/* Display an image*/}
        <img className='profileImage' src={thumbnail} alt="Logo" /><br/>

        {/* Show title and name*/}
        <div className='profileHeader' style={{fontSize:getBestFontSize(header)}} title={header}>
          {header}
        </div>

        <i className='dob'>{dob}</i>

      </div>
    );
  }
}

export default ListCard;
