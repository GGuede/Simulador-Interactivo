let usuario = prompt("Ingrese su nombre de usuario").toLowerCase()
let contraseña = Number( prompt ("Ingrese su contraseña"))
let contador = 0


while(usuario !== "pepe" || contraseña !== 1234){
    alert("Nombre o Contraseña incorrecto")
    contador++
    usuario = prompt("Ingrese su nombre de usuario").toLowerCase()
    contraseña = Number( prompt ("Ingrese su contraseña"))
    if(contador === 3){
        alert("Limite de intentos fallidos")
        break
    }else{}
   }
   
if(contador >= 3){
    contador++
    while(usuario !== "pepe"){
        alert("Fin del programa")
    }
}else {alert("Bienvenido a su banco" + " " + usuario)}

let beneficios = prompt("Si quiere obtener beneficios en su banco ingrese su numero secreto")

if(beneficios !== "123" ){
alert("Ese no es, lo siento solo tenia una oportunidad")
}else{
alert("Disfrute sus beneficios" + " " + usuario)
}

const dividir = (num1, num2) =>num1 / num2
const iva = (x) => x * 1.21

function calculoDePrestamo(){
const monto = (prompt("Ingrese el monto a solicitar"))
const cuotas = Number(prompt("Cuantas Cuotas van a ser"))

const resultado = dividir(iva(monto) , cuotas)

if(monto > 0 && cuotas > 0){
return ("Tienes que devolver" + " " + cuotas + " " + "cuotas de" + " " + resultado)
}else{ 
alert("No ingreso un numero valido")
return (calculoDePrestamo())}

}

alert (calculoDePrestamo())
    







