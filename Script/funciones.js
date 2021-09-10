//------------------------------Ingresar Dinero----------------------------------

$('#ingresar').on('click',()=>{
    $("#formulario").remove();
    $("h2").remove();
    $('#formularioDiv').append(`
    <h2> Ingreso de Dinero </h2>
    <form id="formulario">
      <input type="date" id="fecha" class="form-control formul">
      <input type="number" id="dinero" class="form-control formul" placeholder="Monto">
      <input type="text" id="descripcion" class="form-control formul" placeholder="Descripcion">
    <input type="submit" id="botonEnviar" class="btn btn-primary" value="Enviar">            
</form>`);


  $("#formulario").submit(function(e){
    e.preventDefault();
    let hijos = $(e.target).children();
    billetera.push(new ingresoDinero(hijos[0].value,hijos[1].value,hijos[2].value));
    $('#miTabla').append('<tr><td>' + "Ingreso" + '</td><td>' + hijos[0].value + '</td><td>' + hijos[1].value + '</td><td>' + hijos[2].value + '</td></tr>');
    //$("form").replaceWith(`<h2>dinero Cargado </h2>`);
});
});


//------------------------ Ingresar Gasto ----------------------------------
$('#gastar').on('click',()=>{
    $("#formulario").remove();
    $("h2").remove();
    $('#formularioDiv').append(`
    <h2> Ingreso de Gastos </h2>
    <form id="formulario">
      <input type="date" id="fecha" class="form-control formul">
      <input type="number" id="dinero" class="form-control formul" placeholder="Monto">
      <input type="text" id="descripcion" class="form-control formul" placeholder="Descripcion">
    <input type="submit" id="botonEnviar" class="btn btn-primary" value="Enviar">            
</form>`);


  $("#formulario").submit(function(e){
    e.preventDefault();
    
    let hijos = $(e.target).children();
    gastos.push(new ingresoGasto(hijos[0].value,hijos[1].value,hijos[2].value));
    $('#miTabla').append('<tr><td>' + "Gasto" + '</td><td>' + hijos[0].value + '</td><td>' + hijos[1].value + '</td><td>' + hijos[2].value + '</td></tr>');
});
})                                                                                    

//----------------------Guardar en LocalStorage--------------------------------
$('#guardar').on('click',()=>{

        guardarLocal("Ingresos",JSON.stringify(billetera));
        guardarLocal("Gastos",JSON.stringify(gastos));
        //$("#botonGuardar").replaceWith(`<h2>Los datos fueron guardados con exito </h2>`);

    $("table").replaceWith(`<table class="table" id="miTabla">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Movimiento</th>
        <th scope="col">Fecha</th>
        <th scope="col">Monto</th>
        <th scope="col">Descripcion</th>
      </tr>
    </thead>
    <tbody id="celdas">
      
    </tbody>
  </table>`);

});

//--------------------------------------Borrar array de Objetos---------------------
$('#borrar').on('click',()=>{
    billetera = [];
    gastos = [];

    $("table").replaceWith(`<table class="table" id="miTabla">
    <thead class="thead-dark">
      <tr>
        
        <th scope="col">Movimiento</th>
        <th scope="col">Fecha</th>
        <th scope="col">Monto</th>
        <th scope="col">Descripcion</th>
      </tr>
    </thead>
    <tbody id="celdas">
      
    </tbody>
  </table>`);
});

//---------------------------- cargar tablas en seccion mobimiento -------------------------

function cargarTablas(){
  const almacenadoIng = JSON.parse(localStorage.getItem(Ingresos));
  const almacenadogasto = JSON.parse(localStorage.getItem(Gastos));

  const arrayIngreso = [];
  const arrayGasto = [];

  for(const objeto of almacenadoIng){
    arrayIngreso.push(new Dinero(objeto));
  }


for(const objeto of almacenadogasto){
  arrayGasto.push(new Gasto(objeto));
}

for(const dinero of arrayIngreso){
  $('#miTablaIn').append('<tr><td>' + dinero.fecha + '</td><td>' + dinero.monto + '</td><td>' + dinero.decripcion + '</td></tr>');

}

for(const gasto of arrayGasto){
  $('#miTablaGas').append('<tr><td>' + gasto.fecha + '</td><td>' + gasto.monto + '</td><td>' + gasto.decripcion + '</td></tr>');

}
}
