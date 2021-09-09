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
    $('#miTabla').append('<tr><td>' + "Ingreso" + '</td><td>' + hijos[0].value + '</td><td>' + hijos[1].value + '</td><td>' + hijos[2].value + '</td></tr>');
    //$("form").replaceWith(`<h2>dinero Cargado </h2>`);
        
            
        
  
});
});

$('#gastar').on('click',()=>{
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
    gastos.push(new ingresoGasto(hijos[0].value,hijos[1].value,hijos[2].value));
    $('#miTabla').append('<tr><td>' + "Gasto" + '</td><td>' + hijos[0].value + '</td><td>' + hijos[1].value + '</td><td>' + hijos[2].value + '</td></tr>');
    
    
  
});
})                                                                                    



$('#guardar').on('click',()=>{

        guardarLocal("movimientoDiario",JSON.stringify(billetera));
        $("#botonGuardar").replaceWith(`<h2>Los datos fueron guardados con exito </h2>`);
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

$('#borrar').on('click',()=>{
    localStorage.clear();

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
