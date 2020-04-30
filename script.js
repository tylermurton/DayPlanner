$(document).ready(function() {
  
  var currentDay = moment().format('MMMM Do YYYY');
  var $dateHeading = $('#navbar-subtitle');
  $dateHeading.text(currentDay);

  var nowHour24 = moment().format('H');
  var nowHour12 = moment().format('h');

  console.log(nowHour12);
  console.log(nowHour24);


  var $hourRow = $('#activity');
  

  

   // build calendar by row for fix set of hours
   for (var hour = 9; hour <= 17; hour++) {
    // index for array use offset from hour
    var index = hour - 9;


   }

   function updateRowColor ($hourRow) {
     if (hour < nowHour24) {
       $hourRow.css("background-color", "lightgrey")
     }
   }

});
