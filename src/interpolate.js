/*
 * By Alexander Sagalovskiy
 */

function interpolate(strings, ...positions) {
  var errors = positions.filter(pos=>~~pos!==pos);
  if (errors.length) {
    throw "Invalid Interpolation Positions: " + errors.join(', ');
  }
  return function $(...vals) {
    var output = '';
    for (let i = 0; i < positions.length; i ++) {
      output += (strings[i] || '') + (vals[positions[i] - 1] || '');
    }
    output += strings[strings.length - 1];
    return output;
  };
}
