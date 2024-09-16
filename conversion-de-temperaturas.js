// Linea para poder poner inputs.
const prompt = require('prompt-sync')();

// Ciclo while para verificar identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.

while (true){
    // Pedimos al usuario que ingrese cuantos numeros quiere ingresar.
    let c = parseFloat(prompt('Ingrese la temperatura en grados Celsius: '))

    // Verificamos si lo que ingresa el usuario es number para hacer el calculo.
    if(typeof c === 'number'){
        // Convertir la temperatura a Fahrenheit y Kelvin.
        // Formula para Celsius a Fahrenheit. F = (9/5*C) + 32
        let f = (1.8*c) + 32
        // Formula para Celsius a Kelvin. K=C+273.15
        let k = (c + 273.15)
        // Debe imprimir ambos resultados por consola.
        console.log(`Grados Kelvin: ${k}`)
        console.log(`Grados Fahrenheit: ${f}`)
        // Rompermos el ciclo una vez se calcula el resultado.
        break
    }
    else {
        console.log('Debe ingresar un numero valido...')
    }
    

}





