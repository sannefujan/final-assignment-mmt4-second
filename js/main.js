function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}




$(document).ready(function(){
  $('.btn').click( function(event){
    event.preventDefault();
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
 
  if ( $(this).hasClass('active')){
    $(this).removeClass('active');
    console.log("UIT");
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#myModal").on('hide.bs.modal', function(){
      $("#cartoonVideo").attr('src', '');
  });  
} else {
$(this).addClass('active');
console.log("AAN");
player.play();
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#myModal").on('show.bs.modal', function(){
      $("#cartoonVideo").attr('src', url);
  });
};
});
  

//$( ".btn-left" ).each(function(index) {
var player = videojs('#vid1');
player.ready(function(){
$('#forward').click( function(event){
      event.preventDefault();
      player.currentTime(10);
      // should be 10 seconds less than duration
      console.log(player.remainingTime());
});
});
//});  


var player1 = videojs('#video2');
player1.ready(function() {
$('#vid2').click( function(event){
event.preventDefault();
if ( $(this).hasClass('active')){
$(this).removeClass('active');
console.log("UIT");
player.pause();
} else {
$(this).addClass('active');
console.log("AAN");
player.play();
}
});
});  

var player1 = videojs('#video2');
player1.ready(function(){
  $('#vid2').click( function(event){
    event.preventDefault();
    $( this ).css('z-index', '99999');
    $( "#video2" ).css('z-index', '999999');
});
});

var player1 = videojs('#video3');
player1.ready(function(){
  $('#vid3').click( function(event){
    event.preventDefault();
    $( this ).css('z-index', '99999');
    $( "#video3" ).css('z-index', '999999');
});
});

var player1 = videojs('#video1');
player1.ready(function(){
  $('#vid1').click( function(event){
    event.preventDefault();
    $( this ).css('z-index', '99999');
    $( "#video1" ).css('z-index', '999999');
});
});
});