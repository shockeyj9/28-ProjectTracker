$(document).ready(function(){
  var currentDate = dayjs().format('MMMM D, YYYY');
  var currentTime = dayjs().format('hh:mm')
  $('#current-time').text(currentDate + ' at ' + currentTime);
  console.log(currentTime);
})
