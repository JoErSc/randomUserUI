const { parseProfileDoB, parseProfileHeader } = require('./ProfileFunctions')

const profile = {
  name: {
    title: 'Mr',
    first: 'John',
    last: 'Doe',
  },
  dob: {
    date: '2004-10-07T18:11:04.942Z'
  }
}

test('Validate parseProfileDoB', () => {

  const result = parseProfileDoB(profile);
  expect(result).toBe('2004-10-07');

});

test('Validate parseProfileHeader', () => {

  const result = parseProfileHeader(profile);
  expect(result).toBe('Mr J. Doe');

});
