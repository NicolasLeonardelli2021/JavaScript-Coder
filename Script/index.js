class Billetera{
    
    constructor(montoInicial){
        this.monto = montoInicial;
        this.vectorIngreso = [];
        this.vectorGastos = [];
    }

    ingreso(dinero){
        this.monto += dinero;
       this.vectorIngreso.push(dinero);
    }

    gastos(dinero){
        this.monto -= dinero;
        this.vectorGastos.push(dinero);
    }
    mostrarIngresos(){
        let sumador = 0;
        for(let ingresos of this.vectorIngreso){
            sumador += ingresos;
        }
        alert(this.vectorIngreso.join("\n")+ "\n TOTAL DE INGRESOS: " + sumador);
    }
    mostrarGastos(){
        let sumador = 0;
        for(let gastos of this.vectorGastos){
            sumador += gastos;
        }
        alert(this.vectorGastos.join("\n")+ "\n TOTAL DE GASTOS: " + sumador);
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
        let opcion = prompt("1 : Ingreso \n 2 : Gastos \n 3 : Mostrar dinero Ingresado \n  4 : Mostrar Gastos \n 5: Mostrar Recaudacion Libre \n  6: Salir" );

    switch(opcion){
        case "1": 
            billetera1.ingreso(parseInt(prompt("Ingreso")));
            break;
        case "2": 
            billetera1.gastos(parseInt(prompt("Gastos")));
            break;
        case "3":
            billetera1.mostrarIngresos();
            break;
        case "4":
            billetera1.mostrarGastos();
            break;
        case "5": 
            billetera1.mostrarReca();
            break;
        case "6":
            billetera1.saludar();
            i = 1;
            break;
        default: 
        alert("Opcion invalida"); 
        break;
    }
}while(i == "0");
    
}
