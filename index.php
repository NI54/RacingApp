<?php
	//include "slideMenu.php";
	//include "haed.php";
	//if($_GET['filter'])==null){
	/*$aux= $_GET['filter'];
	if($aux==null||$aux==""){
		$_SESSION['filter']= "Noticias";
		
		}else{
		$_SESSION['filter']=$aux;
		}
	//}else{
		//$_SESSION['myusername']= $_GET['filter'];
	//}*/
?>

<html>

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="Racing.css"/>
<link rel="stylesheet" href="jquery.mobile.custom.structure.css" />

<script src="jquery-1.9.1.min.js"></script> 
<script src="jquery.mobile-1.4.2.js"></script> 
<script src="newsGet.js"></script>
<script src="header.js"></script> 
<script src="footer.js"></script>

</head>


<body>
		
	
		<div id="testList" data-role="page" >
		
		
		
		<script>
		InitializeHead("#testList");
		
		
		</script>
		
		<div role="main" class="ui-content" id="asd">
			<div><img src="images/Header.png" style="width:70%;visibility:hidden;"> </div>
			<!--<img src="images/Bkg.png"  style="position:fixed;left:30%;width:20em;top:10em"> !-->
			<img src="images/Menu.png" style="position:fixed;width:1.5em;top:10em;left:-0.1%">
			
			
			<div id="noticias" style="position:relative;left:25%;padding-bottom:1em" filter="Noticias" ></div>
			
			
			<!--<div id="noticias" style="position:relative;left:30%;padding-bottom:20%" filter=<?php //echo "'".$_SESSION['filter']."'"; ?> ></div>!-->
			
			
			<script>
			
			</script>
			
		</div>
		
		<script src="sliderMenu.js"></script> 
		
		
		<script>
			
			$( "#testList" ).on( "pagebeforecreate",function(){
				GetNews(10,"Noticias",10000);
				InitializeFoot("#testList");
				//GetNews(10,"Noticias",10000);
				
				//agregar inicializacion de header y footer tmb
			});
			
		</script>
		</div>
		
		
		
		
		<div id="noticia" data-role="page" >
		
		<script>
		InitializeHead("#noticia");
		
		
		</script>
		
		<div role="contentNoticias" class="ui-content" id="asd">
			<div style="padding-bottom:10em"></div>
			
			<img src="images/Menu.png" style="position:fixed;width:1.5em;top:10em;left:-0.1%">
			
			
			<div id="nota" style="position:relative;left:20%;padding-bottom:1em;width:60%;"></div>
			
			<script>
			//acceder a las variables de noticias
			
			
			</script>
			
			
		</div>
		
		<script>
			
			$( "#noticia" ).on( "pagebeforecreate",function(){
				
				InitializeFoot("#noticia");
				//GetNews(10,"Noticias",10000);
				
				//agregar inicializacion de header y footer tmb
			});
		</script>
		
		<script src="sliderMenu.js"></script> 
		
	

</body>


</html>

