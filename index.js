module.exports = function(ac, path, cb){

  var request = new XMLHttpRequest();
  request.open('GET', path, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    ac.decodeAudioData(request.response, cb, onBufferLoadError);
  };

  request.send();

  function onBufferLoadError(err) {
    console.error(err);
  }

}