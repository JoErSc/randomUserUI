/*
  Function: parseProfileDoB
  input: [JSON], profile object
  returns: [string], value
*/
const parseProfileDoB = function(profile) {

  if(!profile || profile === undefined) return ''

  const date = (profile.dob && profile.dob.date)?profile.dob.date:'';

  return date.substring(0, 10);
}



/*
  Function: parseProfileHeader
  input: [JSON] profile object
  returns: [string], value
*/
const parseProfileHeader = function(profile) {

  if(!profile || profile === undefined) return ''

  const name = profile.name?profile.name:{};
  const title = name.title?name.title:"";
  const fname = name.first?name.first:"-";
  const lname = name.last?name.last:"...";
  const header = title + " " + fname[0] + ". " + lname;

  return header
}

module.exports = { parseProfileDoB, parseProfileHeader };
