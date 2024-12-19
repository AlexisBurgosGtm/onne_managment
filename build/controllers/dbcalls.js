

//CREDENCIALES
function deleteDateDownload(){
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "credenciales"
        });
        if(rowsDeleted>0){
            resolve();
        }else{
            resolve();
        }
    })            
};

function updateDateDownload() {
    let f = new Date();
    return new Promise((resolve,reject)=>{
        connection.insert({
            into: "credenciales",
            values: [{  DAYUPDATED:Number(f.getDate()),
                        USUARIO:GlobalUsuario,
                        CODSUCURSAL:GlobalCodSucursal
                    }] 
        })
        .then(()=>{
            GlobalSelectedDiaUpdated=Number(f.getDate());
            resolve();
        })
        .catch(()=>{
            GlobalSelectedDiaUpdated=0;
            reject();
        })
    }) 
};

function selectDateDownload() {

    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "credenciales",
            limit: 1,
           
        });
        response.map((r)=>{
            GlobalSelectedDiaUpdated = Number(r.DAYUPDATED);
            GlobalCodSucursal = r.CODSUCURSAL;
        })
        resolve(GlobalSelectedDiaUpdated)
    });
};


function downloadProductos (){

    return new Promise((resolve,reject)=>{

        axios.post('/ventas/buscarproductotodos', {sucursal:GlobalCodSucursal})  
        .then(async(response) => {
           
            const data = response.data;
            if(data.rowsAffected[0]==0){
                reject();
            }else{
                deleteDateDownload().then(()=>{updateDateDownload()})  
                resolve(data);                         
            }
        }, (error) => {
           reject();
        });

        
    })
  
 
   
};

function deleteProductos(){
    return new Promise((resolve,reject)=>{
        setLog(`<label class="text-danger">Eliminando productos...</label>`,'rootWait');
        let del = connection.clear('productos');
        if(del){
            resolve();
        }else{
            reject();
        }
    })            
};

function selectProducto(filtro) {

    return new Promise(async(resolve,reject)=>{
        let f = new Date();
        if(GlobalSelectedDiaUpdated.toString()==f.getDate().toString()){
            var response = await connection.select({
                from: "productos",
                limit: 50,
                where: {
                    CODPROD: filtro,
                    or: {
                        DESPROD: {
                            like: '%' + filtro + '%'
                        }   
                    }
                }
               
            });
            resolve(response)
        }else{
            reject('Debe actualizar su catálogo de productos...');
        }
        
    });
};

function downloadClientes (){
    return new Promise((resolve,reject)=>{

        axios.post('/clientes/listavendedortodos', {
            sucursal: GlobalCodSucursal,
            codven:GlobalCodUsuario
        })  
        .then(async(response) => {
            const data = response.data;
            if(data.rowsAffected[0]==0){
                reject();
            }else{  
                resolve(data);
            }
        }, (error) => {
           reject();
        });

    })   
 
   
};

function deleteClientes(){
    return new Promise((resolve,reject)=>{
        setLog(`<label class="text-danger">Eliminando Clientes...</label>`,'rootWait');
        let del = connection.clear('clientes');
        if(del){
            resolve();
        }else{
            reject();
        }
    })            
};

function selectCliente(dia) {

    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "clientes",
            limit: 2000,
            where: {
                VISITA: dia
                }
           
        });
        resolve(response)
    });
};

async function updateSaleCliente(codigo) {

    var noOfRowsUpdated = await connection.update({ 
            in: "clientes",
          set: {
              LASTSALE:funciones.getFecha()
          },
          where: {
              CODIGO:codigo.toString()
          }
    });
    console.log('Cliente actualizado, rows: ' + noOfRowsUpdated.toString())

};

function insertTempVentas(datos){
    return new Promise((resolve,reject)=>{
        connection.insert({
            into: "tempventa",
            values: [datos], //you can insert multiple values at a time
        })
        .then(()=>{
            resolve();
        })
        .catch(()=>{
            reject();
        })
    }) 

};

function deleteItemVenta(id){
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "tempventa",
            where: {
                ID: id
            }
        });
        if(rowsDeleted>0){resolve()}else{reject()}
    })            
};



function selectTempventas(usuario) {

    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "tempventa",
            where: {
                    USUARIO: usuario
                },
            order: { by: 'ID', type: 'asc' }
        });
        resolve(response)
    });
};

function selectDataRowVenta(id,nuevacantidad,precio)
 {
    let costo = 0; 
    //let precio = 0; 
    let equivale =0; let exento=0; let cantidad= nuevacantidad;
    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "tempventa",
            where: {
                    ID: id
                }
        });
        response.map((rows)=>{
            costo = rows.COSTO;
            //precio = rows.PRECIO;
            equivale = rows.EQUIVALE;
            exento = rows.EXENTO;
        });
        let totalcosto = Number(costo) * Number(cantidad);
        let totalprecio = Number(precio) * Number(cantidad);
        let totalexento = Number(exento) * Number(cantidad);
        let totalunidades = Number(equivale) * Number(cantidad);
        //actualiza la fila
        let updatedrow = await connection.update({
            in: "tempventa",
            set: {
                CANTIDAD:Number(nuevacantidad),
                PRECIO:Number(precio),
                TOTALUNIDADES:totalunidades,
                TOTALCOSTO:totalcosto,
                TOTALPRECIO:totalprecio,
                EXENTO:totalexento
            },
            where: {
                ID: id
            }
        })
        if(updatedrow>0){
            resolve();
        }else{
            reject();
        }

    });
};


function gettempDocproductos(usuario){
    
    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "tempventa",
            where: {
                    USUARIO: usuario
                },
            order: { by: 'ID', type: 'asc' }
        })
        if(Number(response.length)>0){
            resolve(response);
        }else{
            reject('No hay productos agregados');
        }
    })
    
};

function gettempDocproductos_pos(usuario){
    
    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "temp_pos",
            order: { by: 'ID', type: 'asc' }
        })
        if(Number(response.length)>0){
            resolve(response);
        }else{
            reject('No hay productos agregados');
        }
    })
    
};

function deleteTempVenta(usuario){
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "tempventa",
            where: {
                USUARIO: usuario
            }
        });
        if(rowsDeleted>0){resolve()}else{resolve()}
    })            
};

function deleteTempVenta_pos(usuario){
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "temp_pos"
        });
        if(rowsDeleted>0){resolve()}else{resolve()}
    })            
};

function db_delete_temp(){
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "tempventa"
        });
        if(rowsDeleted>0){resolve()}else{resolve()}
    })            
};


//PEDIDOS GUARDADOS EN EL CEL

//INSERTA LOCALMENTE UN PEDIDO
function insertVenta(datos){
    console.log('intentando ingresar en tabla documentos')
    return new Promise(async(resolve,reject)=>{
        var response = await connection.insert({
            into: "documentos",
            values: [datos], //you can insert multiple values at a time
        })
        if(response>0){resolve()}else{resolve()}
        
    }) 

};


//carga el json con la lista de pedidos pendientes
function selectVentasPendientes(usuario) {
    
    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({

            from: "documentos",
            where: {
                    USUARIO: usuario
                },
            order: { by: 'ID', type: 'asc' }
        });
        resolve(response)
    });
};

//carga la lista de pedidos
function dbCargarPedidosPendientes(){
    
    selectVentasPendientes(GlobalUsuario)
    .then((response)=>{
        let container = document.getElementById('tblPedidosPendientes');
        container.innerHTML = GlobalLoader;

        let containerTotal = document.getElementById('lbTotalVentaPendiente');
        containerTotal.innerHTML = '--.--';

        let containerPeds = document.getElementById('lbTotalVentaPendientePeds');
        containerPeds.innerHTML = '--'
        
        let str = '';
        let contador = 0;
        let totalventa = 0;

        response.map((rs)=>{
            contador = contador + 1;
            totalventa += Number(rs.TOTALPRECIO);
            str = str + `

                        <div class="card card-rounded shadow">
                            <div class="card-body">
                                <div class="form-group">
                                    <button class="btn btn-sm btn-danger shadow hand" onclick="dbDeletePedido('${rs.ID}');">
                                        <i class="fal fa-trash"></i>
                                    </button>
                                    <label class="negrita text-info">${rs.NOMCLIE}</label>
                                    <br>
                                    <small>${rs.DIRCLIE}</small>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Fecha</label>
                                            <br>
                                            ${rs.FECHA}
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Importe</label>
                                            <br>
                                            <label class="negrita text-danger">${funciones.setMoneda(rs.TOTALPRECIO,'Q')}</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-info btn-sm" onclick="getDbDetallePedido(${rs.ID},'${rs.NOMCLIE}');">
                                            <i class="fal fa-search"></i>Detalles
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-success btn-sm" onclick="dbSendPedido(${rs.ID});">
                                            <i class="fal fa-paper-plane"></i>Enviar
                                        </button>
                                    </div>
                                </div>
                                <small>Gps:${rs.LAT},${rs.LONG}</small>
                            </div>
                        </div>
                        <hr class="solid">

                        `    
        })
        container.innerHTML = str;
        containerTotal.innerText = funciones.setMoneda(totalventa,'');
        containerPeds.innerHTML = contador;
        
        if(Number(contador)>0){
            btnPedidosPend.className = 'btn btn-danger btn-lg btn-icon rounded-circle shadow';
        }else{
            btnPedidosPend.className = 'btn btn-outline-secondary btn-lg btn-icon rounded-circle shadow';
        }
        
        btnPedidosPend.innerHTML = `<i class="fal fa-bell"></i>${contador}`;
        

    });
};



function getDbDetallePedido(id, cliente){
 
    $('#ModalPendientesDetalle').modal('show');

    document.getElementById('lbPPenCliente').innerText = funciones.limpiarTexto(cliente);

    getPedidoEnviar(id)
    .then((response)=>{
                
        let container = document.getElementById('tblPPenDetalle');
        container.innerHTML = GlobalLoader;

        let containerTotal = document.getElementById('lbTotalPPend');
        containerTotal.innerHTML = '--.--';

        
        
        let str = '';
        let contador = 0;
        let totalventa = 0;

        let data = JSON.parse(response[0].JSONPRODUCTOS);
      
        
        data.map((rs)=>{
            contador = contador + 1;
            totalventa += Number(rs.TOTALPRECIO);
            str = str + `<tr class="border-bottom">
                            <td>${rs.DESPROD}
                                <br>
                                <small class="negrita">Cod: ${rs.CODPROD}</small>
                                
                            </td>
                            <td>${rs.CANTIDAD}
                                <br>
                                <small>${rs.CODMEDIDA}</small>
                            </td>
                            <td>${funciones.setMoneda(rs.TOTALPRECIO,'Q')}
                            </td>
                           
                        </tr>`    
        })
        container.innerHTML = str;
        containerTotal.innerText = funciones.setMoneda(totalventa,'');


    });
    
};

function dbDeletePedido(id){
    funciones.Confirmacion('¿Está seguro que desea Eliminar este Pedido?')
    .then((value)=>{
        if(value==true){
            
            $('#ModalPendientes').modal('hide');

            funciones.solicitarClave()
                .then((clave)=>{
                    if(clave==GlobalPassUsuario){

                        deletePedidoEnviado(id)
                        .then(()=>{
                            dbCargarPedidosPendientes();
                        })

                    }else{
                        funciones.AvisoError('Clave incorrecta')
                    }
                }
            )        
        }
    });

}

function deletePedidoEnviado(id){
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "documentos",
            where: {
                ID: Number(id)
            }
        });
        if(rowsDeleted>0){resolve()}else{resolve()}
    })            
};

function getPedidoEnviar(id){

    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            
            from: "documentos",
            where: {
                    ID: Number(id)
                }
        });
        resolve(response)
    });
}

function dbSendPedido(id){
   
        funciones.Confirmacion('¿Está seguro que desea Enviar este Pedido')
        .then((value)=>{
            if(value==true){
                
                setLog(`<label class="text-danger">Intentando obtener el correlativo de documentos...</label>`,'rootWait');
                $('#modalWait').modal('show');

                classTipoDocumentos.getCorrelativoDocumento('PED',GlobalCoddoc)
                .then((correlativo)=>{
                    //lee el documento de la base de datos local y lo intenta enviar
                    setLog(`<label class="text-danger">Cargando los datos del documento para intentarlo enviar...</label>`,'rootWait');
                        
                    let datos; 
                    let nit;
                    getPedidoEnviar(id)
                    .then((response)=>{
                        response.map((rs)=>{
                            nit = rs.NITCLIE;
                            GlobalSelectedCodCliente = rs.CODCLIE;
                            datos = {
                                jsondocproductos:rs.JSONPRODUCTOS,
                                codsucursal:rs.CODSUCURSAL,
                                empnit: rs.EMPNIT,
                                coddoc:rs.CODDOC,
                                correl: correlativo.toString(),
                                anio:rs.ANIO,
                                mes:rs.MES,
                                dia:rs.DIA,
                                fecha:rs.FECHA,
                                fechaentrega:rs.FECHAENTREGA,
                                formaentrega:rs.FORMAENTREGA,
                                codbodega:GlobalCodBodega,
                                codcliente: rs.CODCLIE,
                                nomclie:rs.NOMCLIE,
                                totalcosto:rs.TOTALCOSTO,
                                totalprecio:rs.TOTALPRECIO,
                                nitclie:rs.NITCLIE,
                                dirclie:rs.DIRCLIE,
                                obs:rs.OBS,
                                direntrega:rs.DIRENTREGA,
                                usuario:rs.USUARIO,
                                codven:rs.CODVEN,
                                lat:rs.LAT,
                                long:rs.LONG, 
                                tipo_pago: rs.tipo_pago,
                                tipo_doc: rs.tipo_doc,
                                entrega_contacto: rs.entrega_contacto,
                                entrega_telefono: rs.entrega_telefono,
                                entrega_direccion: rs.entrega_direccion,
                                entrega_referencia: rs.entrega_referencia,
                                entrega_lat: rs.entrega_lat,
                                entrega_long: rs.entrega_long
                            }
                        })
                        
                        setLog(`<label class="text-info">Intentando enviar el pedido...</label>`,'rootWait');
                
                        axios.post('/ventas/insertventa', datos)
                        .then(async(response) => {
                            const data = response.data;
                            if (data.rowsAffected[0]==0){
                                hideWaitForm();
                                funciones.AvisoError('No se logró Enviar este pedido, se intentará guardarlo en el teléfono');   
                            }else{
                                hideWaitForm();
                                funciones.Aviso('Pedido Enviado Exitosamente !!!')
                            
                                //actualiza la ubicación del empleado
                                await classEmpleados.updateMyLocation();
                                //actualiza la última venta del cliente
                                await apigen.updateClientesLastSale(nit,'VENTA');
                                deletePedidoEnviado(id)
                                .then(()=>{
                                    dbCargarPedidosPendientes();
                                })
                                                                                
                            }
                            //$('#modalWait').modal('hide');
                        }, (error) => {
                            //$('#modalWait').modal('hide'); 
                            hideWaitForm();
                            funciones.AvisoError('Ha ocurrido un error y no se pudo enviar');
                           
                        })
                        .catch((error)=>{
                            //$('#modalWait').modal('hide');
                            hideWaitForm();
                            funciones.AvisoError('Error: ' + error);
                           
                        })
        
                    })


                })
                .catch(()=>{
                    //$('#modalWait').modal('hide');
                    hideWaitForm();
                    funciones.AvisoError('No se pudo obtener el correlativo del documento a generar, revise su conexión a internet')
                })
                
                            
                
          

            }
        })
};


function dbSendPedidosBackground(usuario){
    return new Promise((resolve,reject)=>{
        resolve();
    })
    
};




// POS
function selectTempVentasPOS(sucursal) {

    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "temp_pos",
            order: { by: 'ID', type: 'desc' }
        });
        let datos = JSON.stringify(response);
        datos = datos.replace('[','');
        datos = datos.replace(']','');
        let result = '[' + datos + ']';
        let data = JSON.parse(result);
        resolve(data);
    });
};

function insertTempVentasPOS(datos){
    return new Promise((resolve,reject)=>{
        connection.insert({
            into: "temp_pos",
            values: [datos] //you can insert multiple values at a time
        })
        resolve();    
    }) 

};

function deleteItemVentaPOS(id){
    console.log('eliminar id: ' + id.toString())
    return new Promise(async(resolve,reject)=>{
        var rowsDeleted = await connection.remove({
            from: "temp_pos",
            where: {
                ID: Number(id)
            }
        });
        console.log(rowsDeleted);
        if(rowsDeleted>0){resolve()}else{reject()}
    })            
};

function selectDataRowVentaPOS(id,nuevacantidad,nuevoprecio) {
    let costo = 0; let precio = 0; let equivale =0; let exento=0; let cantidad= nuevacantidad;
    return new Promise(async(resolve,reject)=>{
        var response = await connection.select({
            from: "temp_pos",
            where: {
                    ID: Number(id)
                }
        });
        console.log(response);

        response.map((rows)=>{
            costo = rows.COSTO;
            precio = nuevoprecio; //rows.PRECIO;
            equivale = rows.EQUIVALE;
            exento = rows.EXENTO;
        });
        let totalcosto = Number(costo) * Number(cantidad);
        let totalprecio = Number(precio) * Number(cantidad);
        let totalexento = Number(exento) * Number(cantidad);
        let totalunidades = Number(equivale) * Number(cantidad);
        //actualiza la fila
        let updatedrow = await connection.update({
            in: "temp_pos",
            set: {
                CANTIDAD:Number(nuevacantidad),
                TOTALUNIDADES:Number(totalunidades),
                TOTALCOSTO:Number(totalcosto),
                PRECIO:Number(nuevoprecio),
                TOTALPRECIO:Number(totalprecio),
                EXENTO:totalexento
            },
            where: {
                ID: Number(id)
            }
        })
        console.log(updatedrow);
        if(updatedrow>0){
            resolve();
        }else{
            reject();
        }

    });
};

// POS

