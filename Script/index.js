
const billetera = [];

const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};



class ingresoDinero{
    constructor(fecha, dinero, descripcion){
        this.fecha = fecha;
        this.ingresoDinero = dinero;
        this.descripcion = descripcion;

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



$('#ingresar').on('click',()=>{
    $("#formulario").remove();
    $("h2").remove();
    $('#formularioDiv').append(`<form id="formulario">
      <input type="date" id="fecha" class="form-control formul">
      <input type="number" id="dinero" class="form-control formul">
      <input type="text" id="descripcion" class="form-control formul">
    <input type="submit" id="botonEnviar" class="btn btn-primary" value="Enviar">            
</form>`);


  $("#formulario").submit(function(e){
    e.preventDefault();
    let hijos = $(e.target).children();
    billetera.push(new ingresoDinero(hijos[0].value,hijos[1].value,hijos[2].value));
    $("form").replaceWith(`<h2>dinero Cargado </h2>`);
  
  
});
});




$('#botonGuardar').on('click',()=>{


    
    
        guardarLocal("movimientoDiario",JSON.stringify(billetera));
        $("#botonGuardar").replaceWith(`<h2>Los datos fueron guardados con exito </h2>`);
});

$('#borrar').on('click',()=>{
    localStorage.clear();
});
