/* 
06:00am  se despierta 
Error (Nosuena el despertador) 
07:00am  se alista y sale a coger Transmilenio 
Error (paro en el portal y no puede coger transporte) 
08:15  am entra a estudiar 
Error (llega tarde y no puede entrar a clases) 
12:00  sale del estudio y almuerza 
Error (no puede almorzar porque le sale un pelo en la sopa) 
01:00pm va a trabajar en Bellatrix 
Error (Se olvida del carnet y no lo dejan ingresar) 
08:00pm sale del trabajo a relajarse con sus compañeros de trabajo 
Error (Lo roban) 
11:00pm vuelve a casa  
Error (Ha perdido las llaves de su casa y le toca dormir en el parque) 
01:00am  se acuesta para ver Netflix. 
Error (Olvido pagar la mensualidad de Netflix... se desbarata la cama y no tiene donde dormir)  */
time = 0;
condicion = true;
fallo = Math.floor((Math.random() * 8) + 1);
console.log('Fallara en la actividad No: ' + fallo);

new Promise((resolve, reject) => {
    if (fallo == 1) { condicion = false; }
    return (condicion) ? resolve('6:00AM Se despierta') : reject(new Error('6:00AM No suena el despertador'));
}).then((respuesta) => {
    setTimeout(()=>{console.log(respuesta);}, time+=2000)     
    if (fallo == 2) { condicion = false; }
    return new Promise((resolve, reject) => {
        return (condicion) ? resolve('7:00AM Se alista y sale a coger el transmilenio') :
            reject(new Error('7:00AM Hay paro en en portal y no pudo coger el transmilenio'));
    })
}).then((respuesta) => {
    setTimeout(()=>{console.log(respuesta);}, time+=2000)   
    if (fallo == 3) { condicion = false; }
    return new Promise((resolve, reject) => {
        return (condicion) ? resolve('8:15AM entra a estudiar') :
            reject(new Error('8:15AM llega tarde y no puede entrar a clase'));
    })
}).then((respuesta) => {
    setTimeout(()=>{console.log(respuesta);}, time+=2000)   
    if (fallo == 4) { condicion = false; }
    return new Promise((resolve, reject) => {
        return (condicion) ? resolve('12:00PM sale a almorzar') :
            reject(new Error('12:00PM no puede almorzar por que le salio un cabello en la sopa'));
    })
}).then((respuesta) => {
    setTimeout(()=>{console.log(respuesta);}, time+=2000)   
    if (fallo == 5) { condicion = false; }
    return new Promise((resolve, reject) => {
        return (condicion) ? resolve('1:00PM va a trabajar en Bellatrix') :
            reject(new Error('1:00PM Se le olvida el carnet y no lo dejan ingresar a Bellatrix'));
    })
}).then((respuesta) => {
    setTimeout(()=>{console.log(respuesta);}, time+=2000)   
    if (fallo == 6) { condicion = false; }
    return new Promise((resolve, reject) => {
        return (condicion) ? resolve('8:00PM sale de trabajar y se reune con sus amigos') :
            reject(new Error('8:00PM Lo roban'));
    })
}).then((respuesta) => {
    setTimeout(()=>{console.log(respuesta);}, time+=2000)   
    if (fallo == 7) { condicion = false; }
    return new Promise((resolve, reject) => {
        return (condicion) ? resolve('11:00PM Vuelve a casa') :
            reject(new Error('11:00PM ha perdido las llaves y le toca dormir en el parque'));
    })
}).then((respuesta) => {
    setTimeout(()=>{console.log(respuesta);}, time+=2000)   
    if (fallo == 8) { condicion = false; }
    return new Promise((resolve, reject) => {
        return (condicion) ? resolve('1:00AM Se acuesta para ver Netflix') :
            reject(new Error('1:00AM Se le olvido pargar la suscripcion de Netflix.. Se desbarata la cama'));
    })
}).catch((err) => {
    setTimeout(()=>{console.log(err.message);}, time+=2000) 
})
