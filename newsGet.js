//var urlArt='http://localhost/server/article/art';
//var urlPhp='http://localhost/server/getArticlesR.php?cu=';


var urlArt='http://nuevosociales.com.ar/app/article/art';
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
		
		
		$.get("http://nuevosociales.com.ar/app/proxy.php?url=article/art"+articleNumber+'.txt', function( data ) {
		//$.get( urlArt+articleNumber+'.txt', function( data ) {
			//console.log(title);
			//console.log(data);
			//$( '#nota' ).append( data);
			
			
			
			var titleRep= title.replace(/replaceComillasDobles/g,'"');
			titleRep= titleRep.replace(/replaceComillasSimples/g,"'");
			
			$( '#nota' ).html("");
			$( '#nota' ).append('<div class="divImage"><img src="'+urlImagenes+imagen+'" class="imageNota"></div>');
			$( '#nota' ).append("<div class='divTitulo'><p class='tituloNota' align='center'>"+ titleRep +"</p><p>"+ date +"</p></div>");
			//$( '#nota' ).append("<h8 style='display:block'>"+ date +"</h8></div>");
			$( '#nota' ).append('<p></p>');
			$( '#nota' ).append(data);
			
			
			
		 });
	}