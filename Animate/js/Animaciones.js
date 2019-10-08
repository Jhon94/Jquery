(function(){

var $cajaRoja = $(".cajaRoja");

function mover( dir ){
    switch( dir ){
    
        case "arr" : 
        $cajaRoja.animate({
            top:"-=50px"
        });
        break;
        case "aba": 
        $cajaRoja.animate({
            top:"+=50px"
        });
        break;
        case "izq": 
        $cajaRoja.animate({
            left:"-=50px"
        },200);
        break;
        case "der": 
        $cajaRoja.animate({
            left:"+=50px"
        }),200;
        break;
        case "res": 
        $cajaRoja.animate({
           top: "0px",
           left: "0px"
        });
        break;
    }
}
    
$(document).on("keypress", function(e){

var keyCode = e.keyCode;
console.log(keyCode);

switch( keyCode ){
    
    case 119: 
    $cajaRoja.animate({
        top:"-=50px"
    },100);
    break;
    case 115: 
    $cajaRoja.animate({
        top:"+=50px"
    },100);
    break;
    case 97: 
    $cajaRoja.animate({
        left:"-=50px"
    },100);
    break;
    case 100: 
    $cajaRoja.animate({
        left:"+=50px"
    },100);
    break;
    case 32: 
    $cajaRoja.animate({
       top: "0px",
       left: "0px"
    },400);
    break;
}

});


$("button").on("click", function(){
    var dir = $(this).data("dir");
    mover( dir );
});

})();
    

