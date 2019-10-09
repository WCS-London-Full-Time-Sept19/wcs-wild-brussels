//get url paramemters
function getUrlParameters(key) {
  //return var
  var parameters = {};
  //get url component decoded and url part after questions mark
  var urlComps = decodeURIComponent(
    window.location.href.slice(window.location.href.indexOf('?') + 1)
  );
  //key pairs split on ampersand
  var keyPairs = urlComps.split('&');
  //for each key pair split them and place in parameters
  keyPairs.forEach(function(val, key) {
    var keyPairParts = val.split('=', 2); //max two splits
    parameters[keyPairParts[0]] = keyPairParts[1]; //now assoc array
  });
  //return required url attribute
  return parameters[key];
}
