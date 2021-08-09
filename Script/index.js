class Billetera{
    constructor(montoInicial){
        this.monto = montoInicial;
    }

    ingreso(dinero){
        this.monto += dinero;
    }

    gastos(dinero){
        this.monto -= dinero;
    }

    mostrarReca(){
        alert("La recaudacion es: " + this.monto);
    }

    saludar(){
        alert("hasta luego");
    }

}


function ingresoDatos(){

    const billetera1 = new Billetera(parseInt(prompt("Monto Inicial")));
    let i = 0;
    do{
        let opcion = prompt("1 : Ingreso \n 2 : Gastos \n 3 : Mostrar Recaudacion Libre \n 4 : Salir");

    switch(opcion){
        case "1": 
            billetera1.ingreso(parseInt(prompt("Ingreso")));
            break;
        case "2": 
            billetera1.gastos(parseInt(prompt("Gastos")));
            break;
        case "3": 
            billetera1.mostrarReca();
            break;
        case "4":
            billetera1.saludar();
            i = 1;
            break;
        default: 
        alert("Opcion invalida"); 
        break;
    }
}while(i == "0");
    
}
