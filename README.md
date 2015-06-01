load-sample-2-buff
-----------------------

### INSTALL IT

`npm install load-sample-2-buff`

### THE API

loadSample2Buff(audioContext, pathToAudioFile, callback(arrayBuffer)

given an audioContext, a path to an audio file, and a callback,
it creates an XHR request for that file,
decodes the data with the audioContext,
and passes the result to the callback.

### EXAMPLE

(using [openmusic-sample-player](https://github.com/openmusic/sample-player))

```
    var loadSample2Buff = require('load-sample-2-buff')

    var SamplePlayer = require('openmusic-sample-player')

    var audioContext = new AudioContext()
    var player = SamplePlayer(audioContext)

    loadSample2Buff(audioContext, './noise.ogg', function(buffer){
        player.buffer = buffer
        player.start()
    })
```