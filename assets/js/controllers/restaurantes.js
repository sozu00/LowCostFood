'use strict';

var miapp = angular.module('iissApp', ['ngMap']);
miapp.controller('RestaurantesApp',['$scope',function($scope){
     
    $scope.resultadosT = 0; //Almacena el numeros de restaurantes encontrados despues de aplicar los filtros
    $scope.estrellas = 1;   //Almacena el numero total de puntos de valoracion que a indicado el usuario en el filtro
    $scope.precioG = 1;     //Almacena el numero total de puntos en el precio que a indicado el usuario en el filtro
    $scope.estrellaIMG = "assets/img/1stars.png"; //Imagen por defecto del filtro Valoración
    $scope.precioIMG="assets/img/1stars.png"; // Imagen por defecto del filtro Precio
	$scope.latitud = 36.537999;         //Almacena el latitud de las coordenadas que se introducen en el mapa para localizar el restaurante
    $scope.longitud = -6.202169;        //Almacena el longitud de las coordenadas que se introducen en el mapa para localizar el restaurante
    $scope.nombreMapa = ""; //Almacena el nombre del restaurante y la ciudad en la que se encuentra para mostrarla arriba del mapa

    /*Esta función actualiza el valor de resultadosT cada vez que se realice una nueva busqueda*/
    $scope.Resultado = function(r) {   
        $scope.resultadosT = r;
    };
    
    /*Esta función modifica las coordenadas del mapa cuando se selecciona un restaurante y su nombre */
    $scope.mapa = function(lat, lon, nom) {
        
        $scope.latitud = lat;
        $scope.longitud = lon;
        $scope.nombreMapa = nom;
    };

    /*LAS 4 FUNCIONES SIGUIENTES SE UTILIZAN PARA CAMBIAR EL VALOR DE LOS FILTROS VALORACION Y PRECIO*/
    /*Aumenta en 1 los puntos de Valoracion y modifica la imagen del filtrado*/
    $scope.sumEstrella = function(){
        switch($scope.estrellas){
            case 1: $scope.estrellaIMG= "assets/img/2stars.png";break;
            case 2: $scope.estrellaIMG= "assets/img/3stars.png";break;
            case 3: $scope.estrellaIMG= "assets/img/4stars.png";break;
            case 4: $scope.estrellaIMG= "assets/img/5stars.png";break;
        };
        if($scope.estrellas !== 5)
            $scope.estrellas += 1;
        
    };
    
    /*Disminuye en 1 los puntos de Valoracion y modifica la imagen del filtrado*/
    $scope.resEstrella = function(){
        switch($scope.estrellas){
            case 2: $scope.estrellaIMG= "assets/img/1stars.png";break;
            case 3: $scope.estrellaIMG= "assets/img/2stars.png";break;
            case 4: $scope.estrellaIMG= "assets/img/3stars.png";break;
            case 5: $scope.estrellaIMG= "assets/img/4stars.png";break;
        };
        if($scope.estrellas !== 1)
            $scope.estrellas -= 1;
        
    };
    
    /*Aumenta en 1 los puntos de Precio y modifica la imagen del filtrado*/
    $scope.sumPrecio = function(){
        switch($scope.precioG){
            case 1: $scope.precioIMG= "assets/img/2stars.png";break;
            case 2: $scope.precioIMG= "assets/img/3stars.png";break;
            case 3: $scope.precioIMG= "assets/img/4stars.png";break;
            case 4: $scope.precioIMG= "assets/img/5stars.png";break;
        };
        if($scope.precioG !== 5)
            $scope.precioG += 1;
    };
    
    /*Disminuye en 1 los puntos de Valoracion y modifica la imagen del filtrado*/
    $scope.resPrecio = function(){
        switch($scope.precioG){
            case 2: $scope.precioIMG= "assets/img/1stars.png";break;
            case 3: $scope.precioIMG= "assets/img/2stars.png";break;
            case 4: $scope.precioIMG= "assets/img/3stars.png";break;
            case 5: $scope.precioIMG= "assets/img/4stars.png";break;
        };
        if($scope.precioG !== 1)
            $scope.precioG -= 1;
    };
    
    /*Esta función comprueba para una ciudad si el numero de estrellas del filtro Valoracion indicado por el usuario es 
      menor o igual al de la ciudad que se esta comprobando*/
    $scope.filtroEstrellas = function(valor,expected){
        
        if($scope.estrellas <= valor)
            return true;
        else
            return false;
    };
    
    /*Esta función comprueba para una ciudad si el numero de estrellas del filtro Precio indicado por el usuario es 
      mayor o igual al de la ciudad que se esta comprobando*/
    $scope.filtroPrecio = function(valor,expected){
        
        if($scope.precioG <= valor)
            return true;
        else
            return false;
    };

    /*Aquí se recogen todas las ciudades donde se encuentran los restaurantes*/
     $scope.lugares=[
        "Cadiz",
        "Jerez",
        "El Puerto de Santa Maria",
        "Puerto Real",
        "San Fernando" 
     ]; 
        
    /*Aquí estan almacenados la información de todos los restaurantes: Ciudad en la que se encuentra,
      su nombre, sus coordenadas, una descripción del lugar, valoración y precio*/
     $scope.Restaurantes=[ 
         {
             ciudad:"Cadiz",
			 lg:-6.2969,
			 lat:36.53588,
             nombre:"MESON CUMBRES MAYORES",
             descripcion:"Barato y términas satisfecho con la variedad de tapas a elegir",
             valoracion:3,
             precio:4
         }
         ,
         {
             ciudad:"Cadiz",
			 lg:-6.30481,
			 lat:36.53307,
             nombre:"BAR NONO",
             descripcion:"Buena comida , buen servicio , gente agradable y muy limpio",
             valoracion:2,
             precio:3.5
         }
         ,
         {
             ciudad:"Cadiz",
			 lg:-6.30395,
			 lat:36.52892,
             nombre:"LA ISLETA DE LA VIÑA",
             descripcion:"Excelente precio y buena calidad de tapas.",
             valoracion:1,
             precio:4
         }
         ,
         {
             ciudad:"Cadiz",
			 lg:-6.27315,
			 lat:36.5078,
             nombre:"BAR LA MEZQUITA",
             descripcion:"Abierto desde el año 1987 con buena cocina, calidad, servicio y precio",
             valoracion:4,
             precio:2.5
         }
         ,
         {
             ciudad:"Cadiz",
			 lg:-6.294795,
			 lat:36.533546, 
             nombre:"LA GORDA TE DA DE COMER",
             descripcion:"Bar de tapas de muy buena calidad a muy buen precio, ideal para cenar en compañia",
             valoracion:2,
             precio:2
         }
         ,
         {
             ciudad:"Cadiz",
			 lg:-6.303773,
			 lat:36.528709,  
             nombre:"EL FARO",
             descripcion:"Una visita recomendada en su paso por esta ciudad milenaria, ubicado en el famoso barrio de la Viña con cerca de medio siglo de tradición Gastronómica en la provincia, casa madre y buque insignia del Grupo, fundado por Gonzalo Córdoba y actualmente dirigido por su hija Mayte.",
             valoracion:5,
             precio:3
         }
         ,
         {
             ciudad:"Cadiz",
			 lg:-6.291047,
			 lat:36.537713, 
             nombre:"LA PUNTA DE SAN FELIPE",
             descripcion:"Bar de tapas a buen precio y una gran variedad de montaditos, recomendada la tapa de papas aliñadas. Buen ambiente y buenas copas",
             valoracion:4,
             precio:2
         }
         ,
         {
             ciudad:"Jerez",
			 lg:-6.13845,
			 lat:36.68213,
             nombre:"BAR JUANITO",
             descripcion:"Muy buenas las patatas y el atún. Buen trato y precios decentes",
             valoracion:2,
             precio:3
         }
         ,
         {
             ciudad:"Jerez",
			 lg:-6.11974,
			 lat:36.70936,
             nombre:"RESTAURANTE BAR MAYPA",
             descripcion:"Su especialidad es la tortilla de patatas enorme y buenísima, pero también es idóneo para ir a desayunar un mollete con jamón o para ir a comer, la calidad/precio le hacen uno de los mejores sitios de Jerez.",
             valoracion:4,
             precio:2
         }
         ,
         {
             ciudad:"Jerez",
			 lg:-6.13534,
			 lat:36.67904,
             nombre:"ABACERIA CRUZ VIEJA",
             descripcion:"Mucha Calidad en las tapas (  comida ) de todo tipo , Económico.",
             valoracion:1,
             precio:4
         }
         ,
         {
             ciudad:"Jerez",
			 lg:-6.15083,
			 lat:36.68203,
             nombre:"BAR ARTURO",
             descripcion:"Magnífico para tomar pescaito frito con una ensalada de tomates con vinagre de Jerez.",
             valoracion:3,
             precio:3.5
         }
         ,
         {
             ciudad:"Jerez",
			 lg:-6.132911,
			 lat:36.682122,
             nombre:"LA GRAN MURALLA",
             descripcion:"Descubre las especialidades de cocina china que te ofrece el restaurante Gran Muralla Jerez. Si le echas un vistazo a su carta encontrarás diversos platos que harán las delicias de tu paladar: sopas, tallarines, arroz, ternera, cerdo, pollo, gambas, sushi, especialidades de la casa y un sin fin de platos más",
             valoracion:4,
             precio:4
         }
         ,
         {
             ciudad:"Jerez",
			 lg:-6.128109,
			 lat:36.692242, 
             nombre:"TABITA JEREZ",
             descripcion:"Pizzeria concia en toda la Bahia de Cádiz a muy buen precio, ofertas 2x1 en pizza",
             valoracion:4,
             precio:1
         }
         ,
         {
             ciudad:"Jerez",
			 lg:-6.113012,
			 lat:36.704417, 
             nombre:"LA NUEVA TAPITA",
             descripcion:"Comparte con familia y amigos, todo un abanico de posibilidades para disfrutar de una comida casera y de calidad.",
             valoracion:3,
             precio:2
         }
         ,
         {
             ciudad:"El Puerto de Santa Maria",
			 lg:-6.23424,
			 lat:36.59176,
             nombre:"BAR PEPITO",
             descripcion:"Buenas tapas y muy variadas y muy buenos precios",
             valoracion:4,
             precio:4.5
         }
         ,
         {
             ciudad:"El Puerto de Santa Maria",
			 lg:-6.22684,
			 lat:36.59425,
             nombre:"BAR LA DORADA",
             descripcion:"Buen pescado, buen marisco, buena cocina en general y un trato exquisito del personal.",
             valoracion:1,
             precio:2
         }
         ,
         {
             ciudad:"El Puerto de Santa Maria",
			 lg:-6.22464,
			 lat:36.59867,
             nombre:"LA BODEGUILLA DEL BAR JAMON",
             descripcion:"Buena calidad de las tapas y raciones, con algunas muy originales. Precio medio",
             valoracion:3,
             precio:1.5
         }
         ,
         {
             ciudad:"El Puerto de Santa Maria",
			 lg:-6.22428,
			 lat:36.59707,
             nombre:"ANTOJITO TAPAS",
             descripcion:"Buena presentación, pero falla en la carta, no se entiende nada, hay que preguntar que es cada cosa.",
             valoracion:2,
             precio:1
         }
         ,
         {
             ciudad:"El Puerto de Santa Maria",
			 lg:-6.248232,
			 lat:36.612352,
             nombre:"VENTA MANOLO",
             descripcion:"Restaurante acogedor y familiar, buen precio y buena comida.",
             valoracion:3,
             precio:3
         }
         ,
         {
             ciudad:"Puerto Real",
			 lg:-6.18984,
			 lat:36.53052,
             nombre:"RESTAURANTE JARDIN DE CANALEJAS",
             descripcion:"Lugar espectacular, si hace buen tiempo se puede comer en un patio interior bajo unos naranjos. Buena comida y buena relación calidad/precio",
             valoracion:4,
             precio:2.5
         }
         ,
         {
             ciudad:"Puerto Real",
			 lg:-6.1914,
			 lat:36.52681,
             nombre:"RESTAURANTE EL YAKI",
             descripcion:"Comida de calidad, platos portugueses, y postres realmente geniales, sitio muy tranquilo y poco ruido",
             valoracion:3,
             precio:2.7
         }
         ,
         {
             ciudad:"Puerto Real",
			 lg:-6.18963,
			 lat:36.52656,
             nombre:"EL FOGON DEL GUANCHE",
             descripcion:"Muy buena comida y buen servicio a un precio razonable.",
             valoracion:2,
             precio:2.1
         }
         ,
         {
             ciudad:"Puerto Real",
			 lg:-6.19282,
			 lat:36.52707,
             nombre:"LA TABERNA DEL PUERTO",
             descripcion:"El mejor pescado de la Bahia de Cadiz.",
             valoracion:2,
             precio:1.9
         }
         ,
         {
             ciudad:"San Fernando",
			 lg:-6.20833,
			 lat:36.45619,
             nombre:"LA MAR DE FRESQUITA",
             descripcion:"Fabulosa marisqueria. Calidad y precio. De lo mejor de San Fernando",
             valoracion:3,
             precio:4.7
         }
         ,
         {
             ciudad:"San Fernando",
			 lg:-6.19526,
			 lat:36.46647,
             nombre:"BAR LOS GALLEGOS",
             descripcion:"Agradable en el trato trato y la comida sencilla pero plena de sabor",
             valoracion:3,
             precio:1.2
         }
         ,
         {
             ciudad:"San Fernando",
			 lg:-6.19801,
			 lat:36.46348,
             nombre:"EL SOTANILLO",
             descripcion:"Buenos bocadillos de torilla aunque un poco cutre",
             valoracion:4,
             precio:2.3
         }
         ,
         {
             ciudad:"San Fernando",
			 lg:-6.196113,
			 lat:36.459907, 
             nombre:"TABITA SAN FERNANDO",
             descripcion:"Pizzeria concia en toda la Bahia de Cádiz a muy buen precio, ofertas 2x1 en pizza",
             valoracion:4,
             precio:1
         }
         ,
         {
             ciudad:"San Fernando",
			 lg:-6.20318,
			 lat:36.46468,
             nombre:"BAR BARBACOA BARRERO",
             descripcion:"Lugar para pasarlo bien y se come de categoría ",
             valoracion:1,
             precio:3.6
         }
     ];
        
    }]);