import React, { Component } from 'react';
import { connect } from 'react-redux'
import InfiniteScroll from "react-infinite-scroll-component";

import { GenderFilters } from '../../constants/Filters'
import Loader from '../../utils/loader';
import ListCard from './ListCard';

import {loadProfiles, requestMoreProfiles, validateResponse} from './ListFunctions'



class ListContent extends Component {

  constructor(props) {
    super(props);

    this.loadProfiles = loadProfiles.bind(this);
    this.requestMoreProfiles = requestMoreProfiles.bind(this);
    this.validateResponse = validateResponse.bind(this);

    this.state = {
      error: false,
      currentPage: 1,
      chunkSize: 50,
      genderFilter: GenderFilters.SHOW_ALL,
      profiles: [],
      isLoading: false,
      viewLoadButton: false
    };
  }

  // Load profiles on mount
  componentDidMount() {
    this.loadProfiles();
  }


  render() {
    const { profiles, isLoading, error, viewLoadButton} = this.state;
    const {genderFilter} = this.props;

    if (error) {
      return <div className='errorCard' onClick={this.loadProfiles}>{error.message}<br/><p><button>Retry</button></p></div>;
    }

    return (
      <div className='listContent'>

        {/* Let user call for more profiles */}
        {
          (isLoading)?<Loader/>:null
        }

        {/* Show all available profiles*/}
        <InfiniteScroll
          dataLength={profiles.length}
          next={this.requestMoreProfiles}
          hasMore={viewLoadButton}
        >
          {profiles.map((profile, index) => (
            <ListCard key={index} value={profile} genderFilter={genderFilter}/>
          ))}
        </InfiniteScroll>

      </div>
    );
  }
}

function mapStateToProps(state) {
  //When I dispatch action, I can get update selectLayout value right away here, but it can't map the state to props right away.
  return {
    genderFilter: state.filter
  };
}


export default connect(mapStateToProps)(ListContent);
