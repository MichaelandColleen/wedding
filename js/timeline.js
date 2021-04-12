

$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

$(".circle").click(function(event) {
  const circleNumber = $(event.target).data('circle')
  $('.popupSpan'+ circleNumber).toggle()
});
//
// function selectDate(selector) {
//   $selector = "#" + selector;
//   $spanSelector = $selector.replace("circle", "span");
//   var current = $selector.replace("circle", "");
//
//   $(".active").removeClass("active");
//   $($selector).addClass("active");
//
//   if ($($spanSelector).hasClass("right")) {
//     $(".center").removeClass("center").addClass("left")
//     $($spanSelector).addClass("center");
//     $($spanSelector).removeClass("right")
//   } else if ($($spanSelector).hasClass("left")) {
//     $(".center").removeClass("center").addClass("right");
//     $($spanSelector).addClass("center");
//     $($spanSelector).removeClass("left");
//   };
// };

// console.log()
