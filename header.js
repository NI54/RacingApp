/*
$('#testList').append('<div id="header" data-role="header"  style="position:fixed;width:100%;z-index:10;">'+'<div data-role="controlgroup" data-type="horizontal" class="ui-btn-left" style="width:20%;left:33%;top:65%;">'+'<a href="#" class="ui-btn ui-btn-twitter" style="padding:0; background-color:transparent;"><img src="images/Twitter.png" style="width:10em;"></a>'+'<a href="#" class="ui-btn ui-btn-twitter" style="padding:0; background-color:transparent;"><img src="images/Facebook.png" style="width:10em;"></a>'+'<a href="#" class="ui-btn ui-btn-twitter" style="padding:0; background-color:transparent;"><img src="images/Blog.png" style="width:10em;"></a>'+'<a href="#" class="ui-btn ui-btn-twitter" style="padding:0; background-color:transparent;"><img src="images/Mail.png" style="width:10em;"></a>'+'</div>'+'<img src="images/Header.png" style="width:70%;">'+'</div>');*/

$.mobile.orientationChangeEnabled = false;

function InitializeHead(body){ 
$(body).append('<div id="header" data-role="header"  style="position:fixed;width:100%;z-index:10;">'+'<div data-role="controlgroup" data-type="horizontal" class="ui-btn-left" style="width:20%;left:33%;top:65%;">'+'<a href="#" class="ui-btn ui-btn-twitter" style="padding:0; background-color:transparent;"><img src="images/Twitter.png" style="width:10em;"></a>'+'<a href="#" class="ui-btn ui-btn-twitter" style="padding:0;padding-left: 0.5em; background-color:transparent;"><img src="images/Facebook.png" style="width:10em;"></a>'+'<a href="#" class="ui-btn ui-btn-twitter" style="padding:0; padding-left: 0.5em; background-color:transparent;"><img src="images/Blog.png" style="width:10em;"></a>'+'<a href="#" class="ui-btn ui-btn-twitter" style="padding:0;padding-left: 0.5em; background-color:transparent;"><img src="images/Mail.png" style="width:10em;"></a>'+'</div>'+'<img src="images/Header.png" class="imgHeader" style="width:25em;height:auto;">'+'</div>');
}

$(window).on("orientationchange",function(){
  if(window.orientation == 0) // Portrait
  {
    $( "imgHeader" ).attr( "style", "width:25em;height:auto;" );
  }
  else // Landscape
  {
    $( "imgHeader" ).attr( "style", "width:15em;height:auto;" );
  }
});


//$(document).on("pageinit", "#testList", function () {
/*$( "#testList" ).on( "pagebeforecreate", function( event ) {
$( "#header" ).load('header.html #header', function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    //$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
	console.log("errrooooooorrrrr");
  }
})//;
});*/
