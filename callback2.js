//Lorena leal Garcia
// ---------------- EJERCICIO EN FORMA DE CALLBACKS -------------------------------------------------------
/* function asincrono(valor, ejecucion) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function () {
        ejecucion(valor, valor * valor)
    }, 0 | Math.random() * 100)
}
var max = 10;
var cnt = 0;
for (var i = 0; i < max; i++) {
    asincrono(i, function (valor, resultado) {
        console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado} `)
        if (++cnt === max) {
            console.log('Éxito')
        }
    });
}  */

//---------------------------- SOLUCION CON PROMESAS --------------------------------------------
var max = 10;
var cnt = 0;
var time = 1000;
//-------------- SE ENVUELVEN LAS PROMESAS DENTRO DEL CICLO FOR PARA QUE REALICE LAS 10 ITERACIONES -----------
for (let i = 0; i < max; i++) {
    let numero = i;
    let multiplica = numero * numero;
//--------------- PRIMERA PROMESA RETORNA LA SECUENCIA DE NUMEROS -------------------------------------------
      new Promise((resolve, reject) => {
        resolve(`Inicia ejecicion: el valor es  = ${numero}`); 
        reject(new Error('Lo siento algo salio Mal en la generacion de secuencia! :('));
//-----------  SEGUNDA PROMESA RECIVE LA RESPUESTA DE LA PRIMERA IMPRIME Y SE ENCARGA DE LA MULTIPLICACION-------
    }).then((respuesta) => {
        console.log(respuesta);
        return new Promise((resolve, reject) => {
            resolve(`Finaliza con el valor ${numero} y el resultado = ${multiplica}`); 
            reject(new Error('Lo siento algo en la multiplicacion salio mal'));
        })
//--------- TERCER PROMESA RECIVE LA RESPUESTA DE LA SEGUNDA Y VALIDA SOLO SE TOMA LA PARTE DE RESOLVE ----------
    }).then((respuesta) => {
        cnt++;
        setTimeout(() => { console.log(respuesta) }, (time * Math.random()));
        return new Promise((resolve) => {
            if (cnt == max) { resolve('Exito');}
        })
//---------CUARTA PROMESA TOMA EL RESOLVE DE LA ULTIMA PROMESA Y LO IMPRIME--------------------------------------
    }).then((respuesta) => {
        setTimeout(() => { console.log(respuesta) }, time * 2);
//---------CATCH MANEJO DE EXEPCIONES (ERRORES) IMPRIME EL REJECT EN CASO DE QUE FALLE LA PROMESA----------------
    }).catch((err) => {
        setTimeout(() => { console.log(err.message);}, time*2)
    })
}


