/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        $("#info1").html(device.model);
        $("#info2").html(device.platform);
        $("#info3").html(device.version);


        function onSuccess(acceleration) {
            $("#xpos").html(Math.round(acceleration.x,2));
            $("#ypos").html(Math.round(acceleration.y,2));
            $("#zpos").html(Math.round(acceleration.z,2));
        }

        function onError() {
            alert('onError!');
        }

        var options = { frequency: 50 };  // Update every 50 milliseconds

        var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function slideLeft() {
    var options = {
      "direction" : "left",
      "href" : "eigth.html",
      "duration"         :  300, // in milliseconds (ms), default 400
      "slowdownfactor"   :   -1, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
      "slidePixels"      :   50 // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page.  
    };
    window.plugins.nativepagetransitions.slide(
      options,
      //function (msg) {alert("SUCCESS: " + JSON.stringify(msg))},
      //function (msg) {alert("ERROR: "   + JSON.stringify(msg))}
        function () {
          console.log('transition finished');
        },
        function (msg) {
          console.log('error: ' + msg);
        });
}

function slideRight() {
    var options = {
      "direction" : "right",
      "href" : "index.html",
      "duration" :  300
    };
    window.plugins.nativepagetransitions.slide(
      options,
      //function (msg) {alert("SUCCESS: " + JSON.stringify(msg))},
      //function (msg) {alert("ERROR: "   + JSON.stringify(msg))}
        function () {
          console.log('transition finished');
        },
        function (msg) {
          console.log('error: ' + msg);
        });
}

/*function flip(direction, color, href) {
setTimeout(function () {
  // update the page inside this timeout
  document.querySelector("#title").innerHTML = direction;
  document.querySelector("html").style.background = color;
}, 10);
window.plugins.nativepagetransitions.flip({
      'backgroundColor' : "#BBBBBB",
      'direction': direction,
      'duration': 7000,
      'iosdelay': 20,
      'href': href
    },
    function () {
      console.log('------------------- flip transition finished');
    },
    function (msg) {
      alert('error: ' + msg);
    });
}
// demo for hooking the Android backbutton to the slide 'right'
document.addEventListener('backbutton', function() {
slide('right', 'purple');
}, false);
function slide(direction, color, slowdownfactor, hrf) {
if (!hrf) {
  setTimeout(function () {
    // update the page inside this timeout
    document.querySelector("#title").innerHTML = direction;
    document.querySelector("html").style.background = color;
  }, 20);
}
// not passing in options makes the plugin fall back to the defaults defined in the JS API
var theOptions = {
  'direction': direction,
  'duration': 2000,
  'slowdownfactor' : slowdownfactor,
  'href': hrf,
  'fixedPixelsTop' : 40, // optional, the number of pixels of your fixed header, default 0 (iOS and Android)
  'fixedPixelsBottom': 0  // optional, the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
};
window.plugins.nativepagetransitions.slide(
    theOptions,
    function () {
      console.log('------------------- slide transition finished');
    },
    function (msg) {
      alert('error: ' + msg);
    });
}
function drawer(action, origin, color, href) {
// not passing in options makes the plugin fall back to the defaults defined in the JS API
window.plugins.nativepagetransitions.drawer({
      'action': action,
      'origin': origin,
      'duration': 350,
      'href': href
    },
    function () {
      console.log('------------------- drawer transition finished');
    },
    function (msg) {
      alert('error: ' + msg);
    });
}
function loadJqmDemo() {
document.location = 'jqmdemo.html';
}*/



/*  GOOGLE PLUS LOGIN START*/
  function isAvailable() {
    window.plugins.googleplus.isAvailable(function(avail) {alert(avail)});
  }
  function login() {
    window.plugins.googleplus.login(
        {},
        function (obj) {
          document.querySelector("#image").src = obj.imageUrl;
          document.querySelector("#image").style.visibility = 'visible';
          document.querySelector("#feedback").innerHTML = "Hi, " + obj.displayName + ", " + obj.email;
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = "error: " + msg;
        }
    );
  }
  function trySilentLogin() {
    window.plugins.googleplus.trySilentLogin(
        {},
        function (obj) {
          document.querySelector("#image").src = obj.imageUrl;
          document.querySelector("#image").style.visibility = 'visible';
          document.querySelector("#feedback").innerHTML = "Silent hi, " + obj.displayName + ", " + obj.email;
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = "error: " + msg;
        }
    );
  }
  function logout() {
    window.plugins.googleplus.logout(
        function (msg) {
          document.querySelector("#image").style.visibility = 'hidden';
          document.querySelector("#feedback").innerHTML = msg;
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = msg;
        }
    );
  }
  function disconnect() {
    window.plugins.googleplus.disconnect(
        function (msg) {
          document.querySelector("#image").style.visibility = 'hidden';
          document.querySelector("#feedback").innerHTML = msg;
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = msg;
        }
    );
  }
  window.onerror = function(what, line, file) {
    alert(what + '; ' + line + '; ' + file);
  };
  function handleOpenURL (url) {
    document.querySelector("#feedback").innerHTML = "App was opened by URL: " + url;
  }
/*  GOOGLE PLUS LOGIN END*/