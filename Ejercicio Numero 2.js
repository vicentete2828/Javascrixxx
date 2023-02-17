let interesalAño = 1.15;
let ingresodelMes = 12 * 250;

let montoinicial = parseInt(prompt("Por favor Ingrese el monto inicial: "));

if (montoinicial>=0) {
    
    let montoalAño = ingresodelMes + montoinicial;
    
    let valorFinal = montoA * interesalAño;
    
    let interesFinal = valorFinal - montoalAño;
    
    document.write("El saldo en la cuenta de ahorros es de: "+valorFinal.toFixed(2)+"</br>")
    document.write("El saldo generado mediante interes fue de: "+interesFinal.toFixed(2))
}
else{
    document.write(" ingrese un numero positivo: ")
}