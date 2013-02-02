(function () {

    var SHIVA_SERVER = "http://192.168.1.143:9002";
    var GUARD  = "page_size=3&page=1";

    var $shiva = {
        'api': function(what) {
            var url = SHIVA_SERVER + what;
            if (url.match(/\?/)) {
                return url + '&' + GUARD;
            } else {
                return url + '?' + GUARD;
            }
        },

        'get': function(what, callback) {
            var xhr = new XMLHttpRequest({mozSystem: true});
              xhr.open('GET', $shiva.api(what), true);

//              xhr.upload.addEventListener('progress', function (e) {
//                  var percentage = Math.round(e.loaded / (e.total / 100));
//                  if (e.lengthComputable) {
//                      Notification.set('Fetching ' + what, 'Uploaded ' + percentage + '%');
//                  }
//              }, false);
//
//              xhr.upload.addEventListener('load', function (e) {
//                  var percentage = Math.round(e.loaded / (e.total / 100));
//                  Notification.set('Uplading image', 'Uploaded ' + percentage + '%');
//              }, false);

              xhr.onreadystatechange = function () {
                  if (xhr.readyState == XMLHttpRequest.DONE) {
                      var response = JSON.parse(xhr.responseText);

                      if (typeof response.error === 'undefined') {
//                          Notification.set('Fetching ' + what, 'Fetch finished!');
                          callback(response);
                      } else {
                          alert('Error: ' + response.error);
//                          Notification.hide();
                      }

                  }
              };

              xhr.send();
        },

        'getArtists': function(callback) {
            return $shiva.get('/artists', callback);
        },

        'getTracksByArtist': function(artistId, callback) {
            return $shiva.get('/tracks?artist_id=' + artistId, callback);
        }
    };

    window.Shiva = $shiva;
})();