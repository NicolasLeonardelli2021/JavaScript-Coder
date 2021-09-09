



class ingresoDinero{
    constructor(fecha, dinero, descripcion){
        this.fecha = fecha;
        this.ingresoDinero = dinero;
        this.descripcion = descripcion;

    }
}

class ingresoGasto{
    constructor(fecha,dinero, descripcion){
        this.fecha = fecha;
        this.denero = dinero;
        this.descripcion = descripcion
    }
}

class movimientos{
    constructor(){
        this.ingreso = [];
        this.gastos = [];
    }

    ingresarDinero(ingresoDinero){
        this.ingreso.push(ingresoDinero);
    }

    egresoDinero(egresoDinero){
        this.gastos.push(egresoDinero);
    }

    mostrarIngresos(){
        let sumador = 0;
        for(let ingresos of ingreso){
            sumador += ingresos.dinero;
        }
        alert(this.ingreso.join("\n")+ "\n TOTAL DE INGRESOS: " + sumador);
    }

}



