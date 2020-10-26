/*
Function: loadProfiles
API call to fetch more profiles.
State dependencies:
  chunkSize: number of profiles to request
  currentPage: request profiles for this page
OnSucces: run validateResponse
OnError: thwro error or catch and set state
*/
export const loadProfiles = function() {
  // TODO: Move DATA_SOURCE to config
  const DATA_SOURCE = "https://randomuser.me/api/1.3/?seed=abc&inc=id,gender,name,nat,picture,dob&";
  const {chunkSize, currentPage} = this.state;

  this.setState({ error:null, isLoading: true });


  fetch(DATA_SOURCE + "results=" + chunkSize + "&page=" + currentPage)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong ...');
    }
  })
  .then(data => this.validateResponse(data))
  .catch(error => this.setState({ error, isLoading: false }));
}


/*
  Function: requestMoreProfiles
  Increment currentPage and call for loadProfiles
  State dependencies:
    currentPage: function will increment
*/
export const requestMoreProfiles = function() {
  const {currentPage} = this.state;
  this.setState({currentPage:currentPage + 1});
  this.loadProfiles();
}



/*
  Function: validateResponse
  Validate response to:
    check for duplicates
    estimate if db holds more profiles. If not, hide more button
*/
export const validateResponse = function(data) {
  const {chunkSize, profiles} = this.state;

  // Evaluate chance for more profiles
  // if simple solution chunkSize==number, more profiles exists
  const viewLoadButton = (chunkSize === data.info.results);

  // TODO: evaluate duplicates

  const tState = {
    profiles: profiles.concat(data.results),
    isLoading: false,
    viewLoadButton:viewLoadButton
  };

  // Set state to trigger rerendering
  this.setState(tState)

  // TODO: Handle scroll to first new elem
}
