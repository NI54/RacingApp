//var urlArt='http://localhost/server/article/art';
//var urlPhp='http://localhost/server/getArticlesR.php?cu=';


var urlArt='http://www.ni54.com/Racing/article/art';
//var urlPhp='http://www.ni54.com/Racing/getArticlesR.php?cu=';
var urlPhp='http://nuevosociales.com.ar/app/getArticlesR.php?cu=';
var urlImagenes= 'http://nuevosociales.com.ar/app/';


function GetNews(cuantity,category,index){
$( "#noticias" ).load(urlPhp+cuantity+'&ca='+category+'&ix='+index, function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    //$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
	console.log("errrooooooorrrrr");
  }
});
}

var cuantity= 10;
var filter= "all";
var index= 10000;


$( "#testList" ).on( "pagebeforecreate",function(){
			//filter= $( "#noticias" ).attr( "filter" );
			//GetNews(cuantity,filter,index); 	
});

//var urlVersion="http://localhost/server/version.php";
	//var urlGetNews='http://localhost/server/getArticles.php';
	//var urlArt="http://localhost/server/article/art";
	
	
	function Clikeado(title,date,imagen,articleNumber){
		//console.log(articleNumber);
		
		
		$.get("http://nuevosociales.com.ar/app/"+urlArt+articleNumber+'.txt', function( data ) {
		//$.get( urlArt+articleNumber+'.txt', function( data ) {
			//console.log(title);
			console.log(data);
			//$( '#nota' ).append( data);
			
			
			
			var titleRep= title.replace(/replaceComillasDobles/g,'"');
			titleRep= titleRep.replace(/replaceComillasSimples/g,"'");
			
			$( '#nota' ).html("");
			$( '#nota' ).append('<div style="width:30%;height:12em;float:left;" ><img src="'+urlImagenes++imagen+'" style="width:100%;height:auto;border:1px solid black;top:0;border-radius:10px;"></div>');
			$( '#nota' ).append("<div style= 'width:68%;height:12em;display:inline-block;position:relative;float:left;top:-2em;padding-left:2%;'><p style='font-size:2em;'>"+ titleRep +"</p><p>"+ date +"</p></div>");
			//$( '#nota' ).append("<h8 style='display:block'>"+ date +"</h8></div>");
			$( '#nota' ).append('<p></p>');
			$( '#nota' ).append(data);
			
			
			
		 });
	}