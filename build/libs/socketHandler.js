var socket = io();



socket.on('nuevo_pedido', function(tipo,msn){
  
      try {
          if(GlobalSelectedForm=='SUPERVISOR'){
              funciones.Aviso(`Nuevo pedido: Vendedor: ${tipo} ${msn}`);
          }
          
      } catch (error) {
        console.log('Previo: ' +  error);
      }
      
});


socket.on('nueva_cotizacion', function(tipo,msn){
  
  try {
      if(GlobalSelectedForm=='SUPERVISOR'){
        funciones.Aviso(`Nueva Cotización: Vendedor: ${tipo} ${msn}`);
      }
  } catch (error) {
    console.log('Previo: ' +  error);
  }
  
});


socket.on('nuevo_despacho', (empnit,coddoc,correlativo)=>{

  
    console.log(`Nuevo despacho ${empnit} - ${coddoc} - ${correlativo}`);
    try {
      //document.getElementById('lbResult').innerText = `Nuevo despacho ${empnit} - ${coddoc} - ${correlativo}`
      //recarga la lista en despachos pendientes
      funciones.hablar('Nuevo despacho');
      funciones.showToast(`Nuevo despacho ${coddoc}-${correlativo}`)
      get_listado();
      
    } catch (error) {
      
    }

});

socket.on('fin_despacho', (empnit,coddoc,correlativo)=>{

  
    console.log(`Fin despacho ${empnit} - ${coddoc} - ${correlativo}`);
    try {
      //document.getElementById('lbResult').innerText = `Nuevo despacho ${empnit} - ${coddoc} - ${correlativo}`
      //recarga la lista en despachos pendientes
      //get_listado();
      
    } catch (error) {
      
    }


});
