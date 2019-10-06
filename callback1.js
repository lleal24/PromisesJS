/* function multiplicaPorSiMismo(valor, ejecuta) {
    console.log(`Inicia ejecución: el Valor es = ${valor} `)
    setTimeout(function () {
        ejecuta(valor, valor * valor);
        //ejecuta(2,2*2) 
    }, 1000)
} multiplicaPorSiMismo(2, function (valor, resultado) { 
    console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado} `) }) 
    console.log('Procesando') */

var numero = 2; //variable que contiene el numero a multiplicar por si mismo
var operacion = numero * numero; //variable operacion que guarda el resultado

new Promise((resolve, reject) => { //creacion de la promesa con sus dos parametros
    console.log('Inicia ejecucion: el valor es = ' + numero); //primera linea que imprime un texto + el numero
    resolve(`Finaliza con el valor = ${numero} y el resultado = ${operacion}`);  //parte resolve imprime el numero y el resultado
    reject(new Error('Lo siento algo ha salido Mal!! :(')); //parte reject en caso de no poder ejecutar correctamente
}).then((resultado) => { //then toma como parametro el resultado de la promesa 
    setTimeout(() => { console.log(resultado); }, 3000) //imprime el resultado exitoso en consola
}).catch((err) => { //cath manejo de errores
    setTimeout(() => { console.log(err.message); }, 3000) //imprime mensaje error en caso de falla en la ejecucion
})
setTimeout(() => { console.log('Procesando....'); }, 1000) //mensaje de procesando


//se utiliza la funcion setTimeOut para simular un proceso sincrono con la variacion de los tiempo se
//indica o se simula el orden en que se deben mostrar 