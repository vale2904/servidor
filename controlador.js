

function calcularDistancia(coordenadax,coordenaday,coordenadaorigenx,coordenadaorigeny){

    return(Math.sqrt(Math.pow(coordenadax-coordenadaorigenx,2)+Math.pow(coordenaday-coordenadaorigeny,2)));
}

console.log(calcularDistancia(70,-50,0,0));