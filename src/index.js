
exports.min = function min (array) {
  if(!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const sortArray = array.sort((a,b) => a-b);
  return sortArray[0];
}

exports.max = function max (array) {
  if(!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const sortArray = array.sort((a,b) => b-a);
  return sortArray[0];
}

exports.avg = function avg (array) {
  if(!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  return array.reduce((acc,item) => (acc+item),0) / array.length;
}
