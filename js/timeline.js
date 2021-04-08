// //Sample dates
var dates = ["08/15/1986", "10/20/1990", "9/24/2022"];
//For the purpose of stringifying MM/DD/YYYY date format
var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// //Main function. Draw your circles.
// function makeCircles() {
//   //Forget the timeline if there's only one date. Who needs it!?
//   if (dates.length < 2) {
//     $("#line").hide();
//     $("#span").show().text(dateSpan(dates[0]));
//     //This is what you really want.
//   } else if (dates.length >= 2) {
//     //Set day, month and year variables for the math
//     var first = dates[0];
//     var last = dates[dates.length - 1];
//
//     var firstMonth = parseInt(first.split('/')[0]);
//     var firstDay = parseInt(first.split('/')[1]);
//
//     var lastMonth = parseInt(last.split('/')[0]);
//     var lastDay = parseInt(last.split('/')[1]);
//
//     //Integer representation of the last day. The first day is represnted as 0
//     var lastInt = ((lastMonth - firstMonth) * 30) + (lastDay - firstDay);
//
//     //Draw first date circle
//     $("#line").append('<div class="circle" id="circle0" style="left: ' + 0 + '%;"><div class="popupSpan">' + dateSpan(dates[0]) + '</div></div>');
//
//     $("#mainCont").append('<span id="span0" class="center">' + dateSpan(dates[0]) + '</span>');
//
//     //Loop through middle dates
//     for (i = 1; i < dates.length - 1; i++) {
//       var thisMonth = parseInt(dates[i].split('/')[0]);
//       var thisDay = parseInt(dates[i].split('/')[1]);
//
//       //Integer representation of the date
//       var thisInt = ((thisMonth - firstMonth) * 30) + (thisDay - firstDay);
//
//       //Integer relative to the first and last dates
//       var relativeInt = thisInt / lastInt;
//
//       //Draw the date circle
//       $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + relativeInt * 100 + '%;"><div class="popupSpan">' + dateSpan(dates[i]) + '</div></div>');
//
//       $("#mainCont").append('<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + '</span>');
//     }
//
//     //Draw the last date circle
//     $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + 99 + '%;"><div class="popupSpan">' + dateSpan(dates[dates.length - 1]) + '</div></div>');
//
//     $("#mainCont").append('<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + '</span>');
//   }
//
//   $(".circle:first").addClass("active");
// }
//
// makeCircles();
//
$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

$(".circle").click(function(event) {
  const circleNumber = $(event.target).data('circle')
  $('.popupSpan'+circleNumber).html('hi')
});

function selectDate(selector) {
  $selector = "#" + selector;
  $spanSelector = $selector.replace("circle", "span");
  var current = $selector.replace("circle", "");

  $(".active").removeClass("active");
  $($selector).addClass("active");

  if ($($spanSelector).hasClass("right")) {
    $(".center").removeClass("center").addClass("left")
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("right")
  } else if ($($spanSelector).hasClass("left")) {
    $(".center").removeClass("center").addClass("right");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("left");
  };
};

// console.log()
