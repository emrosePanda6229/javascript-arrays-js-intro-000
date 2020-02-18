var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  chocolateBars.unshift('foo');
  return chocolateBars;
}
addElementToBeginningOfArray();

function destructivelyAddElementToBeginningOfArray(array, element) {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  chocolateBars[0] = 'foo';
  return chocolateBars;
}
destructivelyAddElementToBeginningOfArray();
