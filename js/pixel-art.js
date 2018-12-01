var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


let colorPersonalizado = document.getElementById('color-personalizado');
let paleta = document.getElementById("paleta");
let grillaPixeles = document.getElementById("grilla-pixeles");
let indicador = document.getElementById("indicador-de-color");
let mouseApretado = false;
let borrador = document.getElementById("borrar");


/*-------------------------------------------------------------------------------------------------------------*/

// RUEDA DE COLORES

colorPersonalizado.addEventListener('change', 
  (function(e) {
    let colorActual = e.target.style.backgroundColor; 
    colorActual = colorPersonalizado.value; // QUE HACE EL VALUE EN LA VARIABLE O A QUE SE REFIERE ? 
    indicador.style.backgroundColor = colorActual;    // Completar para que cambie el indicador-de-color al colorActual
  })
)

/*-------------------------------------------------------------------------------------------------------------*/

// Funcion para crear la paleta y cargar los colores.

function recorrerColores (){  
  for (let i=0 ; i <= nombreColores.length; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor  = nombreColores[i]; 
    div.className = "color-paleta"; 
    paleta.appendChild(div);
  }
  return
}


// Funcion para crear la grilla de pixeles, es decir cada div.

function grillaDePixeles (){
  let padreDivGrilla= document.getElementById("grilla-pixeles")
  for (let i = 0; i < 1750; i++) {
    divGrilla = document.createElement("div");
    padreDivGrilla.appendChild(divGrilla);
  }
  return
}

/*-------------------------------------------------------------------------------------------------------------*/

//Funcionalidad que seleccioná un color de la paleta y lo muestra en el indicador de color

paleta.addEventListener("click",cargaDeColor)

function cargaDeColor(e){
  let colorSeleccionado = e.target.style.backgroundColor;
  indicador.style.backgroundColor = colorSeleccionado;
}

// Funcionalidad para pintar pixeles en la grilla

grillaPixeles.addEventListener("click",pintar )

function pintar(e){
  e.target.style.backgroundColor = indicador.style.backgroundColor;
} 


/*-------------------------------------------------------------------------------------------------------------*/

// funcion para ver si el mouse esta apretado

function estadoMouse (e) {
  
  if (e.type === "mousedown" ) {
    mouseApretado = true
    pintar(e)
  }

  if (e.type === "mouseup") {
    mouseApretado = false
  }
}

/*-------------------------------------------------------------------------------------------------------------*/

//Funcionalidad para pintar en movimiento

grillaPixeles.addEventListener("mousedown" , estadoMouse)
grillaPixeles.addEventListener("mouseup",estadoMouse)
grillaPixeles.addEventListener("mouseover", movimiento)

function movimiento (e){
  if (mouseApretado){
    pintar(e);
  }
};

/*------------------------------------------------------------------------------------------------------*/

// Funcionalidad de borrar cualquier imagen o color mediante animacion. 

borrador.addEventListener("click",borrar) 

function borrar(e){ 
  let divGrilla = document.getElementById("grilla-pixeles").children;
  $(divGrilla).animate({"backgroundColor" : "white"}, 2000);
}

/*------------------------------------------------------------------------------------------------------*/

// Funcionalidad para cargar el Superhero :P

$('#batman').click(function(){
  cargarSuperheroe(batman);
});

$('#wonder').click(function(){
  cargarSuperheroe(wonder);
});

$('#flash').click(function(){
  cargarSuperheroe(flash);
});

$('#invisible').click(function(){
  cargarSuperheroe(invisible);
});

/*------------------------------------------------------------------------------------------------------*/

// Funcionalidad para guardar el el dibujo realizado

/*let guardar = document.getElementById("guardar")
guardar.addEventListener("click",guardarPixelArt)
*/

$('#guardar').click(function(){
  guardarPixelArt();
});


recorrerColores();
grillaDePixeles();
