$(document).ready(function() {
  // MODEL
  var started = false;
  var iSitStrict = false;
  var btn = ["red", "blue", "green", "yellow"];
  var firstArr = [0];
  var secondArr = [];
  $(".strict").click(function() {
    iSitStrict = true;
  });

  var reset = function() {
    firstArr = [Math.floor(Math.random() * 4)];
    secondArr = [];
  };

  var sound = function(id) {
    var element = document.getElementById(id);
    element.autoplay = true;
    element.load();
  };

  var makeItLonger = function(arr) {
    var next = Math.floor(Math.random() * 4);
    arr.push(next);
    return arr;
  };

  var checksPlay = function(arr1, arr2) {
    for (var k = 0; k < arr2.length; k++) {
      if (arr1[k] !== arr2[k]) {
        console.log("returning false");
        return false;
      }
    }
    return true;
  };

  var checkStatus = function() {
    var arr1Length = firstArr.length,
      arr2Length = secondArr.length;

    if (!checksPlay(firstArr, secondArr)) {
      console.log("yes");
      $(".count").text("NO !!!");
      secondArr = [];
      if (iSitStrict === true) {
        reset();
      }
      return lightAndSound(firstArr);
    } else if (
      arr1Length == arr2Length &&
      firstArr.every(function(v, i) {
        return v === secondArr[i];
      })
    ) {
      console.log("no");
      secondArr = [];
      if (arr1Length === 21) {
        alert("you win");
        reset();
        return lightAndSound(firstArr);
      }

      return lightAndSound(makeItLonger(firstArr));
    }
  };

  // Handler
  var lightAndSound = function(arr) {
    var interval = 1000;
    arr.forEach(function(v) {
      switch (v) {
        case 0:
          interval += 1000;
          timeoutRegulator1 = setTimeout(function() {
            $(".left").toggleClass("left2");
            sound("red");
          }, interval);
          timeoutRegulator2 = setTimeout(function() {
            $(".left").toggleClass("left2");
          }, interval + 700);

          break;
        case 1:
          interval += 1000;
          timeoutRegulator1 = setTimeout(function() {
            $(".right").toggleClass("right2");
            sound("blue");
          }, interval);
          setTimeout(function() {
            $(".right").toggleClass("right2");
          }, interval + 700);

          break;
        case 2:
          interval += 1000;
          timeoutRegulator1 = setTimeout(function() {
            $(".bottom").toggleClass("bottom2");
            sound("yellow");
          }, interval);
          timeoutRegulator2 = setTimeout(function() {
            $(".bottom").toggleClass("bottom2");
          }, interval + 700);

          break;
        case 3:
          interval += 1000;
          timeoutRegulator3 = setTimeout(function() {
            $(".bottom-right").toggleClass("bottom-right2");
            sound("green");
          }, interval);
          timeoutRegulator2 = setTimeout(function() {
            $(".bottom-right").toggleClass("bottom-right2");
          }, interval + 700);

          break;
      }
    });
  };

  $(".start").click(function() {
    reset();
    lightAndSound(firstArr);
  });
  var recordKey = function() {
    $(".left").on("click", function() {
      sound("red");
      secondArr.push(0); ///
      $(".left").toggleClass("left2");
      setTimeout(function() {
        $(".left").toggleClass("left2");
      }, 500);
      console.log(firstArr, secondArr);
      console.log(firstArr, secondArr);
    });
    $(".right").click(function() {
      sound("blue");
      secondArr.push(1);
      $(".right").toggleClass("right2");
      setTimeout(function() {
        $(".right").toggleClass("right2");
      }, 500);
      console.log(firstArr, secondArr);
      console.log(firstArr, secondArr);
    });
    $(".bottom").click(function() {
      sound("yellow");
      secondArr.push(2);
      $(".bottom").toggleClass("bottom2");
      setTimeout(function() {
        $(".bottom").toggleClass("bottom2");
      }, 500);
      console.log(firstArr, secondArr);
      console.log(firstArr, secondArr);
    });
    $(".bottom-right").click(function() {
      secondArr.push(3);
      sound("green");
      $(".bottom-right").toggleClass("bottom-right2");
      setTimeout(function() {
        $(".bottom-right").toggleClass("bottom-right2");
      }, 500);
      console.log(firstArr, secondArr);
      console.log(firstArr, secondArr);
    });
  };

  //CONTROLLER
  recordKey();
  $(".on").click(function() {
    $(".on").css("background-color","#B8860B")
    lightAndSound(firstArr);
  });

  var intervalRegulator = setInterval(function() {
    $(".count").text(firstArr.length - 1);
    checkStatus(firstArr, secondArr);
  }, 500);
});
