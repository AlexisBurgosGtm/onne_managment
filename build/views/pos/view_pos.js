
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="row">
                    <div class="col-2 text-left">
                            <img src="./favicon.png" width="50px" height="50px">
                    </div>
                    <div class="card bg-personal card-rounded shadow col-10 p-2">
                        
                            <div class="row">
                                <div class="col-4 text-left">   
                                    <label class="text-white negrita h5" style="font-size:180%">Punto de Venta</label>
                                </div>
                                <div class="col-4 text-left">
                                    <label class="text-white negrita h5" style="font-size:140%" id="lbTotalItems">0 items</label>
                                </div>
                                <div class="col-4 text-right">
                                    <h1 class="text-white negrita" id="lbTotalVenta">Q 0.00</h1>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <br>
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="pedido" role="tabpanel" aria-labelledby="dias-tab">
                            ${view.pedido() + view.modal_cantidad() + view.modal_editar_cantidad() + view.modal_lista_documentos() }
                        </div> 
                        <div class="tab-pane fade" id="precios" role="tabpanel" aria-labelledby="clientes-tab">
                          
                        </div>

                        <div class="tab-pane fade" id="documento" role="tabpanel" aria-labelledby="home-tab">
                            ${view.documento() + view.modal_lista_clientes() + view.modal_cobro_factura_fel() + view.modal_cobro_factura_envio() + view.modal_cobro_cotizacion()}
                        </div>
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-pedido" data-toggle="tab" href="#pedido" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>Pedido
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-precios" data-toggle="tab" href="#precios" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>Precios
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-documento" data-toggle="tab" href="#documento" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i></a>Finalizar
                        </li>                           
                    </ul>
                </div>
            `
        },
        pedido:()=>{
            return `
            <div class="row">

                <div class="col-12">

                    <div class="form-group">
                        <div class="input-group">
                            <input type="text" list="lista_productos" autocomplete="off" class="form-control border-personal negrita col-12" placeholder='Escriba para buscar...' id="txtPosCodprod">
                            <button class="btn btn-personal hand" id="btnBuscarProd">
                                <i class="fal fa-search"></i>
                            </button>
                            <datalist width="100%" id="lista_productos" class="col-12">
                        </div>
                    </div>
                   
                </datalist>
                <hr class="solid">

                    <div class="card card-rounded shadow border-personal col-12 p-2">
                        <div class="card-body">
                            
                            <div class="row">
                                <div class="col-12">
                                    <b class="text-personal">Productos agregados a la Factura</b>
                                </div>
                            </div>
                            
                           
                                <table class="table table-responsive  table-hover col-12">
                                    <thead class="bg-personal text-white">
                                        <tr>
                                            <td>PRODUCTO</td>
                                            <td>CANTIDAD</td>
                                            <td>PRECIO</td>
                                            <td>SUBTOTAL</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblPosPedido"></tbody>
                                </table>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div class="row">


            </div>

            <button class="btn btn-warning btn-xl btn-bottom-l btn-circle shadow hand" id="btnListadoDocumentos">
                <i class="fal fa-folder"></i>
            </button>
            
            <button class="btn btn-info btn-xl btn-bottom-r btn-circle shadow hand" id="btnPosCobro">
                <i class="fal fa-arrow-right"></i>
            </button>
            `
        },
        modal_cantidad:()=>{
            return `
            <div class="modal" id="modal_cantidad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">

                        <div class="modal-header">
                            <label class="modal-title text-personal h3" id="lbCantidadDesprod">Cantidad de producto</label>
                        </div>
            
                        <div class="modal-body p-4">
                            <div class="" id="container_precio">
                            </div>
                            <div class="row">
                                <div class="col-4 text-center">
                                    <img src="./favicon.png" width="120px" height="100px">
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <label class="negrita text-secondary">Cantidad:</label>
                                        <input type="number" style="font-size:140%" class="form-control negrita text-info border-personal shadow col-10" id="txtMCCantidad">
                                    </div>   
                                    
                                    <div class="form-group">
                                        <label class="negrita text-secondary">Precio ${GlobalSignoMoneda}:</label>
                                        <input type="number" style="font-size:140%" class="form-control negrita text-info border-personal shadow col-10" id="txtMCPrecio">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="negrita text-secondary">Subtotal ${GlobalSignoMoneda}:</label>
                                        <input type="number" style="font-size:150%" class="form-control negrita text-danger border-personal shadow col-10" id="txtMCTotalPrecio" disabled>
                                    </div>
                                </div>            
                            </div>
                                
                            <br>

                            <div class="row">
                                    <div class="col-5 text-right">
                                        <button class="btn btn-secondary btn-xl btn-circle hand shadow waves-effect waves-themed" data-dismiss="modal" id="">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>                                
                                    </div>
        
                                    <div class="col-1"></div>
        
                                    <div class="col-5 text-right">
                                        <button class="btn btn-personal btn-xl btn-circle hand shadow waves-effect waves-themed" id="btnMCGuardar">
                                            <i class="fal fa-check mr-1"></i>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        },
        modal_editar_cantidad:()=>{
            return `
            <div class="modal" id="modal_editar_cantidad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">

                        <div class="modal-header bg-personal">
                            <label class="modal-title text-white h3" id="lbCantidadDesprodE">Cantidad de producto</label>
                        </div>
            
                        <div class="modal-body p-4">
                            <div class="row">
                                <div class="col-4 text-center">
                                    <img src="./favicon.png" width="120px" height="100px">
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <label class="negrita text-secondary">Cantidad:</label>
                                        <input type="number" style="font-size:140%" class="form-control negrita text-info border-personal shadow col-10" id="txtMCCantidadE">
                                    </div>   
                                    
                                    <div class="form-group">
                                        <label class="negrita text-secondary">Precio ${GlobalSignoMoneda}:</label>
                                        <input type="number" style="font-size:140%" class="form-control negrita text-info border-personal shadow col-10" id="txtMCPrecioE">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="negrita text-secondary">Subtotal ${GlobalSignoMoneda}:</label>
                                        <input type="number" style="font-size:150%" class="form-control negrita text-danger border-personal shadow col-10" id="txtMCTotalPrecioE" disabled>
                                    </div>
                                </div>            
                            </div>
                                
                            <br>
        
                            <div class="row">
                                    <div class="col-5 text-right">
                                        <button class="btn btn-secondary btn-xl btn-circle hand shadow waves-effect waves-themed" data-dismiss="modal" id="">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>                                
                                    </div>
        
                                    <div class="col-1"></div>
        
                                    <div class="col-5 text-right">
                                        <button class="btn btn-personal btn-xl btn-circle hand shadow waves-effect waves-themed" id="btnMCGuardarE">
                                            <i class="fal fa-check mr-1"></i>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        },
        documento:()=>{
            return `
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    ${view.documento_card_cliente()}
                </div>

                <div class="col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    <div class="card card-rounded shadow col-12">
                        <div class="card-body">

                            <div class="row">
                                <div class="form-group">
                                    <label class="negrita text-secondary h4">Total a Pagar</label>
                                    <h2 class="negrita text-danger" style="font-size:280%" id="lbPosCobroTotalPagar">Q 0.00</h2>
                                </div>  
                            </div>

                            <div class="row">
                                <div class="form-group text-left">
                                    <label class="text-secondary">Vendedor</label>
                                    <select class="form-control" id="cmbVendedor">
                                    </select>
                                </div>
                            </div>
                            
                            <hr class="solid">
                            <hr class="solid">

                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-outline-info shadow hand col-12" id="btnCobrarFel">
                                        Crear Factura Contable (F7)
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-outline-personal shadow hand col-12" id="btnCobrarFactura">
                                        Crear Factura Interna (F8)
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-outline-secondary shadow hand col-12" id="btnCobrarCotizacion">
                                        Crear       Cotización (F9)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                 
                </div>
            </div>

            <button class="btn btn-secondary btn-xl btn-bottom-l btn-circle shadow hand" id="btnPosDocumentoAtras">
                <i class="fal fa-arrow-left"></i>
            </button>
            `
        },
        documento_card_cliente:()=>{
            return `
            <div class="card card-rounded shadow border-personal p-4"  style="font-size:80%">
                <div class="card-body">
                            
                            <div class="form-group">
                                <label class="negrita text-personal">NIT / DPI</label>
                                <div class="input-group">
                                    <input type="text" class="form-control form-control-md border-personal negrita text-personal" id="txtPosCobroNit">
                                    <button class="btn btn-personal text-white hand" id="btnBuscarCliente">
                                        <i class="fal fa-search"></i>
                                    </button>
                                </div>
                                
                            
                            </div>

                            <div class="form-group">
                                <label class="negrita text-personal">CÓDIGO CLIENTE</label>
                                <input disabled type="text" class="form-control form-control-md border-personal negrita text-personal" id="txtPosCobroNitclie" autocomplete="off">                            
                            </div>

                            <div class="form-group">
                                <label class="negrita text-personal">CLIENTE</label>
                                <input type="text" class="form-control form-control-md border-personal negrita text-personal" id="txtPosCobroNombre">
                            </div>
                            
                            <div class="form-group">
                                <label class="negrita text-personal">DIRECCIÓN</label>
                                <input type="text" class="form-control form-control-md border-personal negrita text-personal" id="txtPosCobroDireccion">
                            </div>

                        </div>
                    </div>
            `
        },
        modal_lista_clientes:()=>{
            return `
            <div class="modal" id="modal_lista_clientes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-left" role="document">
                    <div class="modal-content">
                    
                        <div class="modal-header bg-personal">
                        </div>
                        
                        <div class="modal-body p-4">
                            <div class="row">
                                <div class="form-group col-12">
                                    <label>Búsqueda de Clientes</label>
                                    <div class="input-group">
                                        <input type="search" autocomplete="off" class="form-control border-personal negrita" id="txtBuscarClie">
                                        <button class="btn btn-personal hand text-white" id="btnBuscarClie">
                                            <i class="fal fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <table class="col-12 table table-responsive table-hover table-border">
                                    <thead class="bg-personal text-white">
                                        <tr>
                                            <td>NIT / CÓDIGO</td>
                                            <td>CLIENTE</td>
                                            <td>SALDO</td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblDataClientes"></tbody>
                                </table>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>`
        },
        modal_lista_documentos:()=>{
            return `
            <div class="modal fade" id="modal_lista_documentos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                    
                        <div class="modal-body p-4">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="negrita text-personal">Filtrar documentos por...</label>
                                        <div class="input-group">
                                            <input type="date" class="negrita form-control" id="txtFechaDoc">
                                            <select class="form-control negrita" id="cmbTipoDoc">
                                                <option value="PED">PEDIDOS</option>
                                                <option value="COT">COTIZACIONES</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row" id="tblDocumentos">

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        },
        modal_cobro_factura_fel:()=>{
            return `
            <div class="modal fade" id="modal_cobro_fel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                    
                        <div class="modal-body p-4">
                            <input type="date" id="txtFecha">
                            <select id="cmbCoddoc"></select>
                            <input type="text" id="txtCorrelativo">
                        </div>
                    </div>
                </div>
            </div>`
        },
        modal_cobro_factura_envio:()=>{
            return `
            <div class="modal fade" id="modal_cobro_factura" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                    
                        <div class="modal-body p-4">
                            
                        </div>
                    </div>
                </div>
            </div>`
        },
        modal_cobro_cotizacion:()=>{
            return `
            <div class="modal fade" id="modal_cobro_cotizacion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                    
                        <div class="modal-body p-4">
                            <input type="date" id="txtFecha">
                            <select id="cmbCoddocCot"></select>
                            <input type="text" id="txtCorrelativoCot">
                        </div>
                    </div>
                </div>
            </div>`
        },
    }

    root.innerHTML = view.body();

};

function addListeners(){


    funciones.slideAnimationTabs();



    // LISTENER DE LA VENTANA DE PEDIDOS
    listener_vista_pedido();

    listener_vista_cobro();

    listener_teclado();

    listener_listado_documentos();
    
    fcnNuevoPedido();

    //get_tbl_pedido();


    document.getElementById('txtFecha').value = funciones.getFecha();
    //document.getElementById('txtFechaDoc').value = funciones.getFecha();

   

    //CARGA CODDOC DEFAULT
    let cmbCoddoc = document.getElementById('cmbCoddoc');
    let cmbCoddocCot = document.getElementById('cmbCoddocCot');
    
    get_coddoc('PED')
        .then((data)=>{
            let str = '';
            data.recordset.map((r)=>{
                str += `<option value="${r.CODDOC}">${r.CODDOC}</option>`;
            })
            cmbCoddoc.innerHTML = str;
            cmbCoddoc.value = GlobalCoddoc;
            get_correlativo_coddoc(cmbCoddoc.value)
            .then((correlativo)=>{
                document.getElementById('txtCorrelativo').value = correlativo;
            })
        })
        .catch(()=>{
            cmbCoddoc.innerHTML = '';
            document.getElementById('txtCorrelativo').value = '';
        });

    get_coddoc('COT')
        .then((data)=>{
            let strs = '';
            data.recordset.map((r)=>{
                strs += `<option value="${r.CODDOC}">${r.CODDOC}</option>`;
            })
            cmbCoddocCot.innerHTML = strs;
            cmbCoddocCot.value = GlobalCotiz;
            get_correlativo_coddoc(cmbCoddocCot.value)
            .then((correlativo)=>{
                document.getElementById('txtCorrelativoCot').value = correlativo;
            })
        })
        .catch(()=>{
            cmbCoddocCot.innerHTML = '';
            document.getElementById('txtCorrelativoCot').value = '';
        });
    
    
    cmbCoddoc.addEventListener('change',()=>{
            get_correlativo_coddoc(cmbCoddoc.value)
            .then((correlativo)=>{
                document.getElementById('txtCorrelativo').value = correlativo;
            })
    });

    cmbCoddocCot.addEventListener('change',()=>{
        get_correlativo_coddoc(cmbCoddocCot.value)
        .then((correlativo)=>{
            document.getElementById('txtCorrelativoCot').value = correlativo;
        })
    });

    //carga el código vendedor
    get_vendedores();
    
    document.getElementById('btnCobrarFel').addEventListener("click",()=>{
        $("#modal_cobro_fel").modal('show');
    });

    document.getElementById('btnCobrarFactura').addEventListener("click",()=>{
        $("#modal_cobro_factura").modal('show');
    });

    document.getElementById('btnCobrarCotizacion').addEventListener("click",()=>{
        $("#modal_cobro_cotizacion").modal('show');
    });
  
    document.getElementById('txtPosCodprod').focus();

};

function listener_teclado(){
    //evitando errores
    //Mousetrap.bind('f5', function(e) { e.preventDefault(); });
    Mousetrap.bind('f7', function(e) { e.preventDefault(); });

    Mousetrap.bind('f10', function(e) { e.preventDefault(); });
    Mousetrap.bind('f11', function(e) { e.preventDefault(); });
    Mousetrap.bind('f12', function(e) { e.preventDefault(); });
    
    //evitando errores

    Mousetrap.bind('ctrl+right', function() { document.getElementById('btnPosCobro').click() });
    Mousetrap.bind('ctrl+left', function() { document.getElementById('btnPosDocumentoAtras').click() });
    

    Mousetrap.bind('f2', function() { 
        document.getElementById('txtPosCodprod').value='';
        document.getElementById('btnPosDocumentoAtras').click();
        document.getElementById('txtPosCodprod').focus();
    });

    
    Mousetrap.bind('f3', function(e) { 
        e.preventDefault(); 
        document.getElementById('btnPosCobro').click();
        document.getElementById('btnBuscarCliente').click();

    });

    Mousetrap.bind('f7', function(e) {
        e.preventDefault(); 
        document.getElementById('btnCobrarFel').click();
    });

    Mousetrap.bind('f8', function(e) {
        e.preventDefault(); 
        document.getElementById('btnCobrarFactura').click();
    });

    Mousetrap.bind('f9', function(e) {
        e.preventDefault(); 
        document.getElementById('btnCobrarCotizacion').click(); 
    });


};

function listener_vista_pedido(){


    const opts = document.getElementById('lista_productos').childNodes;
    const dinput = document.getElementById('txtPosCodprod');
    let eventSource = null;
    let value = '';

    dinput.addEventListener('keydown', (e) => {
    eventSource = e.key ? 'input' : 'list';
    });
    dinput.addEventListener('input', (e) => {
        value = e.target.value;
        if (eventSource === 'list') {
            get_producto(value);
        }
    });

   

    let txtPosCodprod = document.getElementById('txtPosCodprod');
    txtPosCodprod.addEventListener('keyup',(e)=>{

        txtPosCodprod.value = txtPosCodprod.value.toUpperCase();
        let filtro = txtPosCodprod.value || '';
        

        if(filtro==''){return;}

        if (e.code === 'Enter') { 
            document.getElementById('btnBuscarProd').click();
            //get_buscar_producto(filtro);
        };

        //if (e.keyCode === 13 && !e.shiftKey) {
            //get_buscar_producto(filtro);
        //};

    });

    document.getElementById('btnBuscarProd').addEventListener('click',()=>{
        txtPosCodprod.value = txtPosCodprod.value.toUpperCase();
        let filtro = txtPosCodprod.value || '';

        if(filtro==''){return;}

        get_buscar_producto(filtro);
        
    });
    


    //modal cantidad
    let btnMCGuardar = document.getElementById('btnMCGuardar');
    btnMCGuardar.addEventListener('click',()=>{

        let cantidad = Number(document.getElementById('txtMCCantidad').value || 1);
        let preciounitario = Number(document.getElementById('txtMCPrecio').value||0);

        if(preciounitario==0){
            funciones.AvisoError('Precio inválido');
            return;
        };

        if(Number(preciounitario)<Number(Selected_costo)){
            funciones.AvisoError('Precio menor al costo');
            return;
        };


        insert_producto_pedido(Selected_codprod,Selected_desprod,Selected_codmedida,Selected_equivale,Selected_costo,preciounitario,cantidad)
        .then(()=>{
            
            $("#modal_cantidad").modal('hide');

            funciones.showToast('Producto agregado ' + Selected_desprod);
            get_tbl_pedido();
        })
        .catch(()=>{
            funciones.AvisoError('No se pudo agregar');
        })

    });

    document.getElementById('txtMCCantidad').addEventListener('input',()=>{
        CalcularTotalPrecio();  
    });
    document.getElementById('txtMCCantidad').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
            document.getElementById('txtMCPrecio').focus();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('txtMCPrecio').focus();
        };  
    });
    document.getElementById('txtMCPrecio').addEventListener('input',()=>{
        CalcularTotalPrecio();  
    });
    document.getElementById('txtMCPrecio').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
            document.getElementById('btnMCGuardar').focus();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('btnMCGuardar').focus();
        };  
    });
        

    //modal editar cantidad
    let btnMCGuardarE = document.getElementById('btnMCGuardarE');
    btnMCGuardarE.addEventListener('click',()=>{

        let cantidad = Number(document.getElementById('txtMCCantidadE').value || 1);
        let preciounitario = Number(document.getElementById('txtMCPrecioE').value||0);

        if(preciounitario==0){
            funciones.AvisoError('Precio inválido');
            return;
        };

        if(Number(preciounitario)<Number(Selected_costo)){
            funciones.AvisoError('Precio menor al costo');
            return;
        };


        let nuevacantidad = Number(cantidad);
        selectDataRowVentaPOS(Number(Selected_id),nuevacantidad,preciounitario)
        .then(()=>{
            $("#modal_editar_cantidad").modal('hide');

            funciones.showToast('Producto agregado ' + Selected_desprod);
            get_tbl_pedido();
        })
        .catch(()=>{
            funciones.AvisoError('No se pudo agregar');
        })



    });

    document.getElementById('txtMCCantidadE').addEventListener('input',()=>{
        CalcularTotalPrecioEditar();  
    });
    document.getElementById('txtMCCantidadE').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
            document.getElementById('txtMCPrecioE').focus();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('txtMCPrecioE').focus();
        };  
    });
    document.getElementById('txtMCPrecioE').addEventListener('input',()=>{
        CalcularTotalPrecioEditar();  
    });
    document.getElementById('txtMCPrecioE').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
            document.getElementById('btnMCGuardarE').focus();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('btnMCGuardarE').focus();
        };  
    });



   
    
};

function listener_vista_cobro(){
    
    //document.getElementById('cmbPosCoddocFecha').value = funciones.getFecha();
    document.getElementById('txtPosCobroDireccion').value = "CIUDAD";

    document.getElementById('btnPosCobro').addEventListener('click',()=>{
        document.getElementById('tab-documento').click();
    });

    document.getElementById('btnPosDocumentoAtras').addEventListener('click',()=>{
        document.getElementById('tab-pedido').click();
    });

    document.getElementById('txtPosCobroNit').addEventListener('keyup',(e)=>{
       
        let nit = document.getElementById('txtPosCobroNit').value.toUpperCase();

            if (e.code === 'Enter') {
                fcn_buscar_cliente(nit)
                .then(()=>{
                        
                })
                .catch(()=>{
                    nit = document.getElementById('txtPosCobroNit').value.replace('-','').replace(" ","");
                    funciones.GetDataNit(nit)
                    .then((json)=>{

                        document.getElementById('txtPosCobroNitclie').value = '';
                        document.getElementById('txtPosCobroNombre').value = json;
                        document.getElementById('txtPosCobroDireccion').value = "CIUDAD";
                        document.getElementById('txtPosCobroNombre').focus();
                    })
                })
            };
            if (e.keyCode === 13 && !e.shiftKey) {
                fcn_buscar_cliente(nit)
                .then(()=>{
                        
                })
                .catch(()=>{
                    nit = document.getElementById('txtPosCobroNit').value.replace('-','').replace(" ","");
                    funciones.GetDataNit(nit)
                    .then((json)=>{
                        document.getElementById('txtPosCobroNitclie').value = '';
                        document.getElementById('txtPosCobroNombre').value = json;
                        document.getElementById('txtPosCobroDireccion').value = "CIUDAD";
                        document.getElementById('txtPosCobroNombre').focus();
                    })
                })
            };
     

    });



    //busqueda de cliente
    document.getElementById('btnBuscarCliente').addEventListener('click',()=>{
        
        $("#modal_lista_clientes").modal('show');
        
        document.getElementById('tblDataClientes').innerHTML = '';
        document.getElementById('txtBuscarClie').value = '';
        document.getElementById('txtBuscarClie').focus();

    });

    document.getElementById('txtBuscarClie').addEventListener('keyup',(e)=>{
        if (e.code === 'Enter') { 
            document.getElementById('btnBuscarClie').click();
        };
        if (e.keyCode === 13 && !e.shiftKey) {
            document.getElementById('btnBuscarClie').click();
        };  
    });

    document.getElementById('btnBuscarClie').addEventListener('click',(e)=>{  
        tbl_clientes(document.getElementById('txtBuscarClie').value||'');
    });




};

function insert_new_cliente(nitclie,nit,nombre,direccion){

    return new Promise((resolve,reject)=>{
        axios.post('/clientes/clientes_nuevo',{
            fecha:funciones.getFecha(),
            codven: document.getElementById('cmbVendedor').value,
            empnit: cmbEmpresa.value,
            nitclie: nit,
            nomclie: nombre,
            dirclie: direccion,
            coddepto: '011',
            codmunicipio: '156',
            telclie: '',
            emailclie: 'SN',
            lat: '0',
            long: '0'
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data);             
            }else{
                reject();
            }                     
        }, (error) => {
            reject();
        });
    })

};

function listener_listado_documentos(){

    let btnListadoDocumentos = document.getElementById('btnListadoDocumentos');
    btnListadoDocumentos.addEventListener('click',()=>{
        $("#modal_lista_documentos").modal('show');
        tbl_lista_documentos('PED');
    });

    document.getElementById('txtFechaDoc').addEventListener('change',()=>{
        tbl_lista_documentos();
    });
    document.getElementById('cmbTipoDoc').addEventListener('change',()=>{
        tbl_lista_documentos();
    });

};

function initView(){
   
    getView();
    addListeners();

};

function get_vendedores(){
    GF.get_data_empleados_tipo(3)
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str += `<option value="${r.CODEMPLEADO}">${r.NOMEMPLEADO}</option>`
        });
        document.getElementById('cmbVendedor').innerHTML = str;
    })
    .catch(()=>{
        funciones.AvisoError('No se cargaron los vendedores');
        document.getElementById('cmbVendedor').innerHTML ='<option value="1">SIN VENDEDOR</option>';
    })
}

function tbl_clientes(filtro){
   
    if(filtro==''){
        funciones.AvisoError('Escriba un nombre o nit válidos');
        document.getElementById('txtBuscarClie').focus(); 
        return;
    };


    let container = document.getElementById('tblDataClientes');
    container.innerHTML = GlobalLoader;

    let str = '';

    axios.post('/pos/buscar_cliente', {
        sucursal: cmbEmpresa.value,
        filtro:filtro
    })
    .then((response) => {        
        if(response=='error'){
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = 'No day datos....';
        }else{
            const data = response.data.recordset;
            data.map((r)=>{
                str += `
                <tr class="hand" onclick="get_datos_cliente('${r.NITCLIE}','${r.NIT}','${r.NOMCLIE}','${r.DIRCLIE}')">    
                    <td>
                        ${r.NIT} / ${r.NITCLIE}
                    </td>
                    <td>
                        ${r.NOMCLIE}
                        <br>
                        <small>${r.DIRCLIE}</small>
                    </td>
                    <td>${funciones.setMoneda(r.SALDO,'Q')}</td>
                </tr>
                `
            })
            container.innerHTML = str;
        }
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = 'No day datos....';
    });



};

function fcn_buscar_cliente(nit){
   
    return new Promise((resolve, reject)=>{
        if(nit==''){
            funciones.AvisoError('Escriba un nombre o nit válidos');
            reject();
            return;
        };
    
        axios.post('/pos/buscar_cliente_nit', {
            sucursal: cmbEmpresa.value,
            nit:nit
        })
        .then((response) => {        
            if(response=='error'){
                funciones.AvisoError('Error en la solicitud');
                reject();
            }else{
                const data = response.data.recordset;
                if(response.data.rowsAffected[0].toString()=='0'){
                    reject();
                    return;
                }
                data.map((r)=>{
                    document.getElementById('txtPosCobroNit').value = r.NIT;
                    document.getElementById('txtPosCobroNitclie').value = r.NITCLIE;
                    document.getElementById('txtPosCobroNombre').value = r.NOMCLIE;
                    document.getElementById('txtPosCobroDireccion').value = r.DIRCLIE;
                })
                resolve();
            }
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            reject();
        });
    
    })
    


};

function get_datos_cliente(nitclie,nit,nomclie,dirclie){

    $("#modal_lista_clientes").modal('hide');

    document.getElementById('txtPosCobroNit').value = nit;
    document.getElementById('txtPosCobroNitclie').value = nitclie;
    document.getElementById('txtPosCobroNombre').value = nomclie;
    document.getElementById('txtPosCobroDireccion').value = dirclie;
    

};

function CalcularTotalPrecio(){

    let cantidad = document.getElementById('txtMCCantidad').value || 1;
    let precio = document.getElementById('txtMCPrecio').value;
    
    document.getElementById('txtMCTotalPrecio').value = (Number(cantidad)*Number(precio));


};

function CalcularTotalPrecioEditar(){

    let cantidad = document.getElementById('txtMCCantidadE').value || 1;
    let precio = document.getElementById('txtMCPrecioE').value;
    
    document.getElementById('txtMCTotalPrecioE').value = (Number(cantidad)*Number(precio));

};

function get_buscar_producto(filtro){

    let container = document.getElementById('lista_productos');
    container.innerHTML = ''; //GlobalLoader

    document.getElementById('btnBuscarProd').innerHTML = '<i class="fal fa-sync fa-spin"></i>';
    document.getElementById('btnBuscarProd').disabled=true;

    let str = '';

    let idf = 'first-element'; let i =0;

    axios.post('/pos/productos_filtro', {
        sucursal: cmbEmpresa.value,
        token:TOKEN,
        filtro:filtro
    })
    .then((response) => {        
        if(response=='error'){
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = 'No day datos....';
        }else{
            const data = response.data.recordset;
            data.map((r)=>{
                if(Number(i)==0){}else{idf=""};
                let strClassExist = 'text-success';
                if(Number(r.EXISTENCIA)<0){strClassExist="text-danger"};
                str += `
                <option width="100%"
                    value="${r.CODPROD} // ${funciones.limpiarTexto(r.DESPROD)} // ${r.CODMEDIDA}">
                    ${r.CODMEDIDA} (${r.EQUIVALE}) P:${funciones.setMoneda(r.PRECIO,'Q')} E: ${r.EXISTENCIA}
                </option>
                `
            })
            container.innerHTML = str;
            
            document.getElementById('btnBuscarProd').innerHTML = '<i class="fal fa-search"></i>';
            document.getElementById('btnBuscarProd').disabled=false;

            //getMoveTable();
        }
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = 'No day datos....';
        document.getElementById('btnBuscarProd').innerHTML = '<i class="fal fa-search"></i>';
        document.getElementById('btnBuscarProd').disabled=false;
    });



};

function BACKUP_get_buscar_producto(filtro){

    let container = document.getElementById('tblPosProductosCategoria');
    container.innerHTML = GlobalLoader;

    let str = '';

    let idf = 'first-element'; let i =0;

    axios.post('/pos/productos_filtro', {
        sucursal: cmbEmpresa.value,
        token:TOKEN,
        filtro:filtro
    })
    .then((response) => {        
        if(response=='error'){
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = 'No day datos....';
        }else{
            const data = response.data.recordset;
            data.map((r)=>{
                if(Number(i)==0){}else{idf=""};
                let strClassExist = 'text-success';
                if(Number(r.EXISTENCIA)<0){strClassExist="text-danger"};
                str += `
                <tr id="${idf}" class="hand border-secondary border-top-0 border-left-0 border-right-0 border-bottom-secondary" 
                onclick="get_producto('${r.CODPROD}','${funciones.limpiarTexto(r.DESPROD)}','${r.CODMEDIDA}','${r.EQUIVALE}','${r.COSTO}','${r.PRECIO}')">
                    <td>
                        ${funciones.limpiarTexto(r.DESPROD)}
                        <br>
                        <small>Código: <b class="text-danger">${r.CODPROD}</b></small>
                        <br>
                        <small>Marca: <b class="text-secondary">${r.DESMARCA}</b></small>
                    </td>
                    <td>
                        ${r.CODMEDIDA} 
                        <br>
                        <small>Equivale: <b class="text-danger">${r.EQUIVALE}</b></small>
                    </td>
                    <td>
                        <b class="h4">${funciones.setMoneda(r.PRECIO ||0,'Q')}</b>
                    </td>
                    <td>
                        <b class="${strClassExist}">${r.EXISTENCIA}</b>
                    </td>
                </tr>
                `
            })
            container.innerHTML = str;
            getMoveTable();
        }
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = 'No day datos....';
    });



};





function getMoveTable(){

    return;

        let start = document.getElementById('first-element');
        start.focus();
        start.style.backgroundColor = '#50b988';
        start.style.color = 'white';

        const changeStyle = (sibling) => {
            if (sibling !== null) {
                start.focus();
                start.style.backgroundColor = '';
                start.style.color = '';
                sibling.focus();
                sibling.style.backgroundColor = '#50b988';
                sibling.style.color = 'white';
                start = sibling;
            }
        };

        const checkKey = (event) => {
            event = event || window.event;
            const idx = start.cellIndex;

            if (event.keyCode === 38) {
                // up arrow
                const previousSibling = start.previousElementSibling;
                changeStyle(previousSibling);
                
                //const previousRow = start.parentElement.previousElementSibling;
                //if (previousRow !== null) {
                //const previousSibling = previousRow.cells[idx];
                //changeStyle(previousSibling);
                //}

            } else if (event.keyCode === 40) {
                // down arrow
                const nextsibling = start.nextElementSibling;
                changeStyle(nextsibling);
                
                //const nextRow = start.parentElement.nextElementSibling;
                //if (nextRow !== null) {
                //const nextSibling = nextRow.cells[idx];
                //changeStyle(nextSibling); 
                //}

            } else if (event.keyCode === 37) {
                // left arrow
                //const previousSibling = start.previousElementSibling;
                //changeStyle(previousSibling);
            } else if (event.keyCode === 39) {
                // right arrow
                
                //const nextsibling = start.nextElementSibling;
                //changeStyle(nextsibling);
                
                
                console.log(start.onclick());


                //get_producto(codprod,desprod,codmedida,equivale,costo,precio)
                
            }
        };

        document.onkeydown = checkKey;

};

function get_tbl_productos_clasificacion(codigo){

    let container = document.getElementById('tblPosProductosCategoria');
    container.innerHTML = GlobalLoader;

    let str = '';

    axios.post('/pos/productos_categoria', {
        sucursal: cmbEmpresa.value,
        codigo:codigo
    })
    .then((response) => {        
        if(response=='error'){
            funciones.AvisoError('Error en la solicitud');
            container.innerHTML = 'No day datos....';
        }else{
            const data = response.data.recordset;
            data.map((r)=>{
                str += `
                <tr class="hand border-secondary border-top-0 border-left-0 border-right-0" onclick="get_data_producto_categoria('${r.CODPROD}','${r.DESPROD}','${r.CODMEDIDA}','${r.EQUIVALE}','${r.COSTO}','${r.PRECIO}')">
                    <td>
                        ${funciones.limpiarTexto(r.DESPROD)}
                        <br>
                        <small>Código: <b class="text-danger">${r.CODPROD}</b></small>
                        <br>
                        <small>Marca: <b class="text-secondary">${r.DESMARCA}</b></small>
                    </td>
                    <td>
                        ${r.CODMEDIDA} 
                        <br>
                        <small>Equivale: <b class="text-danger">${r.EQUIVALE}</b></small>
                    </td>
                    <td><b class="h4">${funciones.setMoneda(r.PRECIO ||0,'Q')}</b></td>
                </tr>
                `
            })
            container.innerHTML = str;
        }
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = 'No day datos....';
    });


};

function get_producto(producto){

    $("#modal_cantidad").modal('show');
 
    const datos_producto = producto.split(" // ");
   
    
    let codprod = datos_producto[0].replace("'","");
    let desprod = datos_producto[1].replace("'","");
    let codmedida = datos_producto[2].replace("'","");

    let container = document.getElementById('container_precio');
    container.innerHTML = GlobalLoader;

    document.getElementById('txtMCCantidad').value = '';
    document.getElementById('txtMCPrecio').value = 0;
    document.getElementById('btnMCGuardar').disabled = true;

    CalcularTotalPrecio();

    get_datos_precio(codprod,codmedida)
    .then((data)=>{
        let datos = data.recordset;

            let equivale = Number(datos[0].EQUIVALE);
            let costo = Number(datos[0].COSTO);
            let precio = Number(datos[0].PRECIO);

            Selected_codprod = codprod;
            Selected_desprod = desprod;
            Selected_codmedida = codmedida;
            Selected_equivale = Number(equivale);
            Selected_costo = Number(costo);
            Selected_precio = Number(precio);

            document.getElementById('lbCantidadDesprod').innerText = `${desprod} (${codmedida} - Eq: ${equivale})`;

            document.getElementById('txtMCCantidad').value = '';
            document.getElementById('txtMCPrecio').value = precio;

            CalcularTotalPrecio();

            document.getElementById('txtPosCodprod').value = '';

            
            container.innerHTML = '';

            document.getElementById('btnMCGuardar').disabled = false;

            document.getElementById('txtMCCantidad').focus();
    })
    .catch(()=>{
        container.innerHTML = '';
        document.getElementById('btnMCGuardar').disabled = false;
        funciones.AvisoError('No se pudo obtener los datos del producto')
    })

    
    
};

function get_datos_precio(codprod,codmedida){

    return new Promise((resolve,reject)=>{

        axios.post('/pos/productos_precio', {
            sucursal: cmbEmpresa.value,
            token:TOKEN,
            codprod:codprod,
            codmedida:codmedida
        })
        .then((response) => {
            if(response=='error'){
                funciones.AvisoError('Error en la solicitud');
            }else{
                const data = response.data;
                resolve(data);
            }
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
        });

    })

};


function BACKUP_get_producto(codprod,desprod,codmedida,equivale,costo,precio){

    $("#modal_cantidad").modal('show');

    
    Selected_codprod = codprod;
    Selected_desprod = desprod;
    Selected_codmedida = codmedida;
    Selected_equivale = Number(equivale);
    Selected_costo = Number(costo);
    Selected_precio = Number(precio);

    document.getElementById('lbCantidadDesprod').innerText = `${desprod} (${codmedida} - Eq: ${equivale})`;

    document.getElementById('txtMCCantidad').value = '';
    document.getElementById('txtMCPrecio').value = precio;

    CalcularTotalPrecio();

    document.getElementById('txtMCCantidad').focus();
    
};


function insert_producto_pedido(codprod,desprod,codmedida,equivale,costo,precio,cantidad){
    
    let datos = 
        {
            CODSUCURSAL:cmbEmpresa.value.toString(),
            EMPNIT:cmbEmpresa.value.toString(),
            USUARIO:'',
            CODPROD:codprod.toString(),
            DESPROD:desprod.toString(),
            CODMEDIDA:codmedida.toString(),
            EQUIVALE:Number(equivale),
            COSTO:Number(costo),
            TOTALCOSTO:Number(costo)*Number(cantidad),
            PRECIO:Number(precio),
            CANTIDAD:Number(cantidad),
            TOTALUNIDADES:Number(cantidad * equivale),
            TOTALPRECIO:Number(precio)*Number(cantidad)
        };

    

    return new Promise((resolve,reject)=>{
        insertTempVentasPOS(datos)
        .then(()=>{
            resolve();
        }) 
        .catch(()=>{
            reject();
        }) 
    });

};

function get_tbl_pedido(){

    let container = document.getElementById('tblPosPedido');
    container.innerHTML = GlobalLoader;

    let str = '';
    let varTotalItems = 0;
    let varTotalVenta = 0;
    let varTotalCosto = 0;

    selectTempVentasPOS(cmbEmpresa.value)
    .then((data)=>{
        let datos = data.map((rows)=>{
            varTotalItems += 1;
            varTotalVenta = varTotalVenta + Number(rows.TOTALPRECIO);
            varTotalCosto = varTotalCosto + Number(rows.TOTALCOSTO);
            return `
            <tr class="border-personal border-left-0 border-right-0 border-top-0">
                <td class="text-left">
                    ${rows.DESPROD}
                    <br>
                    <div class="row">
                        <div class="col-6">
                            <small class="negrita"><b>${rows.CODPROD}</b></small>
                        </div>
                    </div>
                </td>
                <td>
                    <b class="text-info" style="font-size:140%">${rows.CANTIDAD}</b>
                    <br><small>${rows.CODMEDIDA} (eq: ${rows.EQUIVALE})</small>
                </td>
                <td class="negrita">${funciones.setMoneda(rows.PRECIO,'Q')}</td>
                <td class="negrita text-danger h4">${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</td>
                <td>
                    <button class="btn btn-md btn-circle btn-info shadow hand" onclick="edit_item_pedido('${rows.ID}','${rows.CODPROD}','${rows.DESPROD}','${rows.CODMEDIDA}','${rows.EQUIVALE}','${rows.CANTIDAD}','${rows.COSTO}','${rows.PRECIO}')">
                        <i class="fal fa-edit"></i>
                    </button>
                </td> 
                <td>
                    <button class="btn btn-md btn-circle btn-danger shadow hand" onclick="delete_item_pedido('${rows.ID}')">
                        <i class="fal fa-trash"></i>
                    </button>
                </td>                            
            </tr>`
       }).join('\n');
        container.innerHTML = datos;
        GlobalTotalCostoDocumento = varTotalCosto;
        GlobalTotalDocumento = varTotalVenta;
        document.getElementById('lbTotalItems').innerText = varTotalItems.toString() + ' items';
        document.getElementById('lbTotalVenta').innerText = funciones.setMoneda(varTotalVenta,'Q');
        document.getElementById('lbPosCobroTotalPagar').innerText = funciones.setMoneda(varTotalVenta,'Q');
    })
    .catch((error)=>{
        console.log('error cargar grid:')
        console.log(error)
        container.innerHTML = 'No hay datos...';
        GlobalTotalCostoDocumento = 0;
        GlobalTotalDocumento = 0;
    })

};

function edit_item_pedido(id,codprod,desprod,codmedida,equivale,cantidad,costo,precio){

    $("#modal_editar_cantidad").modal('show');

    Selected_id = id;
    Selected_codprod = codprod;
    Selected_desprod = desprod;
    Selected_codmedida = codmedida;
    Selected_equivale = Number(equivale);
    Selected_costo = Number(costo);
    Selected_precio = Number(precio);

    document.getElementById('lbCantidadDesprodE').innerText = `${desprod} (${codmedida} - Eq: ${equivale})`;

    document.getElementById('txtMCCantidadE').value = cantidad;
    document.getElementById('txtMCPrecioE').value = precio;

    CalcularTotalPrecioEditar();

    document.getElementById('txtMCCantidadE').focus();
};

function delete_item_pedido(id){

    funciones.Confirmacion('¿Está seguro que desea quitar este item?')
    .then((value)=>{
        if(value==true){
            deleteItemVentaPOS(id)
            .then(()=>{
                funciones.showToast('Item eliminado');
                get_tbl_pedido();
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo quitar este item');
            })
        }
    })
    
};

function get_coddoc(tipo){
    return new Promise((resolve, reject)=>{
        axios.post('/tipodocumentos/series_doc', {
            sucursal: cmbEmpresa.value,
            tipo:tipo
        })
        .then((response) => {
            if(response=='error'){
                funciones.AvisoError('Error en la solicitud');
            }else{
                const data = response.data;
                resolve(data);
            }
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
        });
    })
};

function get_correlativo_coddoc(coddoc){
    return new Promise((resolve, reject)=>{
        axios.post('/tipodocumentos/correlativo_doc', {
            sucursal: cmbEmpresa.value,
            coddoc:coddoc
        })
        .then((response) => {
            if(response=='error'){
                resolve('         0')
            }else{
                let correlativo = '';
                const data = response.data;
                data.recordset.map((r)=>{
                    correlativo = r.CORRELATIVO;
                })
                resolve(correlativo);
            }
        }, (error) => {
            resolve('         0')
        });
    })
};



function finalizar_pedido(tipo){

            let codcliente = document.getElementById('txtPosCobroNitclie').value || ''; //GlobalSelectedCodCliente;
            if(codcliente==''){
                funciones.AvisoError('Seleccione un cliente');
                return;
            }

            let nit = document.getElementById('txtPosCobroNit').value || 'CF';
            let ClienteNombre = document.getElementById('txtPosCobroNombre').value;
            GlobalSelectedNomCliente = ClienteNombre;
            let dirclie = document.getElementById('txtPosCobroDireccion').value; // CAMPO DIR_ENTREGA
            GlobalSelectedDirCliente = dirclie;
            let obs = 'SN'; //document.getElementById('cmbEntregaTipoDoc').value; 
            let direntrega = "SN"; //document.getElementById('txtEntregaDireccion').value; //CAMPO MATSOLI
            let codbodega = GlobalCodBodega;
            let cmbTipoEntrega = ''; //document.getElementById('cmbEntregaConcre').value; //campo TRANSPORTE
            
            let txtFecha = new Date(document.getElementById('txtFecha').value);
            let anio = txtFecha.getFullYear();
            let mes = txtFecha.getUTCMonth()+1;
            let d = txtFecha.getUTCDate() 
            let fecha = anio + '-' + mes + '-' + d; // CAMPO DOC_FECHA
            let dia = d;

            let hora = funciones.getHora();
        
            let fe = txtFecha;// new Date(document.getElementById('txtEntregaFecha').value);
            let ae = fe.getFullYear();
            let me = fe.getUTCMonth()+1;
            let de = fe.getUTCDate() 
            let fechaentrega = ae + '-' + me + '-' + de;  // CAMPO DOC_FECHAENT

            let coddoc = ''; let correlativoDoc = '';
            if(tipo=='PED'){
                coddoc = document.getElementById('cmbCoddoc').value;
                correlativoDoc = document.getElementById('txtCorrelativo').value;
            };
            if(tipo=='COT'){
                coddoc = document.getElementById('cmbCoddocCot').value;
                correlativoDoc = document.getElementById('txtCorrelativoCot').value;
            };
            
            let cmbVendedor = document.getElementById('cmbVendedor');

            let latdoc = '0';
            let longdoc = '0';

            let tipo_pago = 'CON'; 
            let tipo_doc = '';
            let entrega_contacto = document.getElementById('txtPosCobroNombre').value;
            let entrega_telefono = ''; //document.getElementById('txtEntregaTelefono').value;
            let entrega_direccion = ''; //document.getElementById('txtEntregaDireccion').value;
            let entrega_referencia = ''; //document.getElementById('txtEntregaReferencia').value;
            let entrega_lat = '0';
            let entrega_long = '0';
            
            get_tbl_pedido();

        //VERIFICACIONES
        if(Number(GlobalTotalDocumento)==0){funciones.AvisoError('No hay productos agregados');return;}
         

        //BLOQUEANDO EL BOTÓN
        if(tipo=='PED'){
            document.getElementById('btnGuardarPedido').innerHTML = '<i class="fal fa-save mr-1 fa-spin"></i>';
            document.getElementById('btnGuardarPedido').disabled = true;      
        };
        if(tipo=='COT'){
            document.getElementById('btnGuardarCotizacion').innerHTML = '<i class="fal fa-save mr-1 fa-spin"></i>';
            document.getElementById('btnGuardarCotizacion').disabled = true;
        };
        //BLOQUEANDO EL BOTÓN
        
            classTipoDocumentos.getCorrelativoDocumento(tipo,coddoc)
                .then((correlativo)=>{
                    correlativoDoc = correlativo;

                    funciones.Confirmacion('¿Está seguro que desea Crear este Documento?')
                    .then((value)=>{
                        if(value==true){    
                            gettempDocproductos_pos(GlobalUsuario)
                            .then((response)=>{
                                axios.post('/pos/insertventa', {
                                    jsondocproductos:JSON.stringify(response),
                                    codsucursal:cmbEmpresa.value,
                                    empnit: GlobalEmpnit,
                                    coddoc:coddoc,
                                    correl: correlativoDoc,
                                    anio:anio,
                                    mes:mes,
                                    dia:dia,
                                    fecha:fecha,
                                    fechaentrega:fechaentrega,
                                    formaentrega:cmbTipoEntrega,
                                    codbodega:codbodega,
                                    codcliente: codcliente,
                                    nomclie:ClienteNombre,
                                    totalcosto:GlobalTotalCostoDocumento,
                                    totalprecio:GlobalTotalDocumento,
                                    nitclie:nit,
                                    dirclie:dirclie,
                                    obs:entrega_referencia,
                                    direntrega:direntrega,
                                    usuario:GlobalUsuario,
                                    codven:cmbVendedor.value,
                                    lat:latdoc,
                                    long:longdoc,
                                    hora:hora,
                                    tipo_pago:tipo_pago,
                                    tipo_doc:tipo_doc,
                                    entrega_contacto:entrega_contacto,
                                    entrega_telefono:entrega_telefono,
                                    entrega_direccion:entrega_direccion,
                                    entrega_referencia:entrega_referencia,
                                    entrega_lat:entrega_lat,
                                    entrega_long:entrega_long,
                                    domicilio:GlobalSelectedDomicilio
                                })
                                .then(async(response) => {
                                    const data = response.data;
                                    console.log(response);
                                    if (data=='error'){

                                            funciones.AvisoError('No se pudo guardar');
                                            //DESBLOQUEANDO EL BOTÓN
                                            if(tipo=='PED'){
                                                document.getElementById('btnGuardarPedido').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Pedido (f8)';
                                                document.getElementById('btnGuardarPedido').disabled = false;      
                                            };
                                            if(tipo=='COT'){
                                                document.getElementById('btnGuardarCotizacion').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Cotización (f9)';
                                                document.getElementById('btnGuardarCotizacion').disabled = false;
                                            };
                                            //DESBLOQUEANDO EL BOTÓN
                                    }else{
                                            //DESBLOQUEANDO EL BOTÓN
                                            if(tipo=='PED'){
                                                document.getElementById('btnGuardarPedido').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Pedido (f8)';
                                                document.getElementById('btnGuardarPedido').disabled = false;
                                                socket.emit('nuevo_pedido',`Nuevo pedido a nombre de ${ClienteNombre} por monto de ${funciones.setMoneda(GlobalTotalDocumento,'Q')}`);      
                                            };
                                            if(tipo=='COT'){
                                                document.getElementById('btnGuardarCotizacion').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Cotización (f9)';
                                                document.getElementById('btnGuardarCotizacion').disabled = false;
                                            };
                                            //DESBLOQUEANDO EL BOTÓN
                                        

                                            funciones.Aviso('Generado Exitosamente !!!')
                                       
                                            deleteTempVenta_pos(GlobalUsuario);

                                            fcnNuevoPedido();
                                    }
                                }, (error) => {
                                    console.log(error);
                                    funciones.AvisoError('No se pudo guardar');
                                    //DESBLOQUEANDO EL BOTÓN
                                    if(tipo=='PED'){
                                        document.getElementById('btnGuardarPedido').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Pedido (f8)';
                                        document.getElementById('btnGuardarPedido').disabled = false;      
                                    };
                                    if(tipo=='COT'){
                                        document.getElementById('btnGuardarCotizacion').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Cotización (f9)';
                                        document.getElementById('btnGuardarCotizacion').disabled = false;
                                    };
                                    //DESBLOQUEANDO EL BOTÓN    
                                });        

                            })
                            .catch((error)=>{
                                    funciones.AvisoError('No se pudo guardar');
                                    //DESBLOQUEANDO EL BOTÓN
                                    if(tipo=='PED'){
                                        document.getElementById('btnGuardarPedido').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Pedido (f8)';
                                        document.getElementById('btnGuardarPedido').disabled = false;      
                                    };
                                    if(tipo=='COT'){
                                        document.getElementById('btnGuardarCotizacion').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Cotización (f9)';
                                        document.getElementById('btnGuardarCotizacion').disabled = false;
                                    };
                                    //DESBLOQUEANDO EL BOTÓN    
                            })
                        }else{
                            //DESBLOQUEANDO EL BOTÓN
                            if(tipo=='PED'){
                                document.getElementById('btnGuardarPedido').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Pedido (f8)';
                                document.getElementById('btnGuardarPedido').disabled = false;      
                            };
                            if(tipo=='COT'){
                                document.getElementById('btnGuardarCotizacion').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Cotización (f9)';
                                document.getElementById('btnGuardarCotizacion').disabled = false;
                            };
                            //DESBLOQUEANDO EL BOTÓN            
                        }
                    })

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar');
                    //DESBLOQUEANDO EL BOTÓN
                    if(tipo=='PED'){
                        document.getElementById('btnGuardarPedido').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Pedido (f8)';
                        document.getElementById('btnGuardarPedido').disabled = false;      
                    };
                    if(tipo=='COT'){
                        document.getElementById('btnGuardarCotizacion').innerHTML = '<i class="fal fa-save mr-1"></i> Crear Cotización (f9)';
                        document.getElementById('btnGuardarCotizacion').disabled = false;
                    };
                    //DESBLOQUEANDO EL BOTÓN
                })


};



function fcnNuevoPedido(){
  
    
        document.getElementById('txtPosCobroNit').value = 'CF';
        document.getElementById('txtPosCobroNitclie').value = 'CF';
        document.getElementById('txtPosCobroNombre').value = 'CONSUMIDOR FINAL';
        document.getElementById('txtPosCobroDireccion').value = 'CIUDAD';
       
        document.getElementById('btnPosDocumentoAtras').click();
        get_tbl_pedido();    
    
};


//---------------------------
//editar pedido
//---------------------------
function tbl_lista_documentos(){

    let tipo = document.getElementById('cmbTipoDoc').value;
    let fecha = funciones.devuelveFecha('txtFechaDoc');

    let container = document.getElementById('tblDocumentos');
    container.innerHTML = GlobalLoader;
    

    let coddoc = '';
    if(tipo=='PED'){
        coddoc = document.getElementById('cmbCoddoc').value;
    }else{
        coddoc = document.getElementById('cmbCoddocCot').value;
    }
   
    let tableheader = `<table class="table table-responsive table-hover table-striped table-bordered">
                        <thead class="bg-personal text-white">
                            <tr>
                                <td>Documento</td>
                                <td>Cliente</td>
                                <td>Importe</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblListaPedidos">`;
    let tablefoooter ='</tbody></table>';

    let strdata = '';
    let totalpedidos = 0;
    
    axios.post('/pos/lista_documentos_tipo', {
        sucursal: cmbEmpresa.value,
        tipo:tipo,
        fecha:fecha,
        coddoc:coddoc   
    })
    .then((response) => {
        const data = response.data.recordset;
        let total =0;
        data.map((rows)=>{
                let idBtn = `btnEliminar${rows.CODDOC + '-' + rows.CORRELATIVO}`;
                let idBtnDownload = `btnDownload${rows.CODDOC + '-' + rows.CORRELATIVO}`
                total = total + Number(rows.IMPORTE);
                totalpedidos = totalpedidos + 1;
                strdata = strdata + `<tr>
                            <td>
                                <b class="text-danger">${rows.CODDOC + '-' + rows.CORRELATIVO}</b>
                            </td>
                            <td>
                                    ${rows.NOMCLIE}
                                <br>
                                    <small class="text-secondary">${rows.DIRCLIE + ', ' + rows.DESMUNI}</small>
                                
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-outline-info btn-sm"
                                            onclick="cargarPedidoEdicion('${rows.CODCLIE}','${rows.NIT}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.CODDOC}','${rows.CORRELATIVO}')">
                                            <i class="fal fa-edit"></i> Editar
                                        </button>    
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-outline-danger btn-sm" id='${idBtn}'
                                            onclick="fcn_delete_pedido('${rows.CODDOC}','${rows.CORRELATIVO}','${rows.ST}','${idBtn}');">
                                            <i class="fal fa-trash"></i> Eliminar
                                        </button>    
                                    </div>
                                </div>
                            </td>
                            <td>
                                <b>${funciones.setMoneda(rows.IMPORTE,'Q')}</b>
                            </td>
                            <td>
                                <button class="btn btn-circle btn-personal btn-md hand shadow" id="${idBtnDownload}" onclick="get_pdf('${rows.NIT}','${funciones.limpiarTexto(rows.NOMCLIE)}','${funciones.limpiarTexto(rows.DIRCLIE)}','${rows.CODDOC}','${rows.CORRELATIVO}','${idBtnDownload}')">
                                    <i class="fal fa-download"></i>
                                </button>
                            </td>
                        </tr>`
        })
        container.innerHTML = tableheader + strdata + tablefoooter;
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = '';
    });
    


};

function get_pdf(nit,cliente,direccion,coddoc, correlativo, idbtn){

    let btn = document.getElementById(idbtn);
    let tipo = document.getElementById('cmbTipoDoc').value;
    
    btn.innerHTML = '<i class="fal fa-download fa-spin"></i>';
    btn.disabled = true;

    axios.post('/pdf',{
        sucursal:cmbEmpresa.value,
        coddoc:coddoc,
        correlativo:correlativo,
        nit:nit,
        cliente:cliente,
        direccion:direccion,
        tipodoc:tipo
     })
     .then((response) => {
        let base = response.data;
        base = base.replace('data:application/pdf;base64,','');
        var link = document.createElement('a');
        link.innerHTML = 'Download PDF file';
        link.download ='DOCUMENTO_' + coddoc.toString() + correlativo.toString() + '.pdf';
        link.href = 'data:application/octet-stream;base64,' + base;
        //document.body.appendChild(link);
        link.click();
        link.remove();
        //desbloquea el botón para que deje de dar vueltas
        btn.innerHTML = '<i class="fal fa-download"></i>';
        btn.disabled = false;
        
     }, (error) => {
        console.log(error);
        
        btn.innerHTML = '<i class="fal fa-download"></i>';
        btn.disabled = false;

        funciones.AvisoError('No se logró crear el pdf')
     });     

};

function cargarPedidoEdicion(codclie,nit,nombre,direccion,coddoc,correlativo){

    $("#modal_lista_documentos").modal('hide');

    funciones.Confirmacion('¿Está seguro que desea EDITAR este documento, no se podrá deshacer lo que haga?')
    .then((value)=>{
        if(value==true){
            funciones.solicitarClave()
                    .then((clave)=>{
                        if(clave==GlobalPassUsuario){
        
                            funciones.showToast('Cargando Documento....');
    
                            document.getElementById('txtPosCobroNit').value = nit;
                            document.getElementById('txtPosCobroNitclie').value = codclie;
                            document.getElementById('txtPosCobroNombre').value = nombre;
                            document.getElementById('txtPosCobroDireccion').value = direccion;
                        
                                                    
                            deleteTempVenta_pos(GlobalUsuario)
                            .then(()=>{

                                //descarga el pedido y lo inserta en el indexed
                                loadDetallePedido(coddoc,correlativo)
                                .then(()=>{
                                    
                                    funciones.showToast('Documento cargado...');
                                    get_tbl_pedido();


                                    //ACTUALIZO EL DOC_ESTATUS=A PARA QUE YA NO SE PUEDA FACTURAR Y NO LO ELIMINO
                                    anular_pedido(coddoc,correlativo)
                                    .then(()=>{    
                                        funciones.showToast('Documento anterior eliminado con éxito!!');
                                    })
                                    .catch(()=>{
                                        funciones.AvisoError('No se pudo eliminar el pedido anterior');
                                    })

    
                                })
                                .catch((error)=>{
                                    funciones.AvisoError('No se pudo cargar el pedido. Error: ' + error);
                                })
                            })
                            .catch(()=>{
                                funciones.AvisoError('No se pudo limpiar el pedido')
                            })
                        }
                    })
        }
    })

};

//SELECCIONA EL DETALLE DEL PEDIDO Y LO CARGA
function loadDetallePedido(coddoc,correlativo){
    
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/loadpedido_edicion', {
            sucursal:cmbEmpresa.value,
            coddoc: coddoc,
            correlativo: correlativo,
            usuario:GlobalUsuario
        })
        .then((response) => {
            const data = response.data;
           data.recordset.map((rows)=>{
                insertTempVentasPOS(rows);
           })
            resolve();
        }, (error) => {
            //funciones.AvisoError('Error en la solicitud');
            reject('Error de solicitud');
        });

    })
    
    
};

function anular_pedido(coddoc,correlativo){
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/anular_pedido', {
            sucursal:cmbEmpresa.value,
            coddoc: coddoc,
            correlativo: correlativo
        })
        .then((response) => {
            
            const data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve();             
            }else{
                reject();
            }
          
        }, (error) => {
            //funciones.AvisoError('Error en la solicitud');
            reject();
        });
    })
    
};


function fcn_delete_pedido(coddoc,correlativo,st,idBtn){
   
    let btn = document.getElementById(idBtn);

    $("#modal_lista_documentos").modal('hide');


        funciones.Confirmacion('¿Está seguro que desea Eliminar este Pedido?')
        .then((value)=>{
            if(value==true){

                
                funciones.solicitarClave()
                    .then((clave)=>{
                        if(clave==GlobalPassUsuario){

                            btn.disabled = true;
                            btn.innerHTML = '<i class="fal fa-trash fa-spin"></i>';

                                delete_pedido(cmbEmpresa.value,coddoc,correlativo)
                                .then(()=>{
                                    funciones.Aviso('Pedido Eliminado Exitosamente!!')
                                    tbl_lista_documentos();
                                })
                                .catch(()=>{
                                    btn.disabled = false;
                                    btn.innerHTML = '<i class="fal fa-trash"></i> Eliminar';
                                    funciones.AvisoError('No se pudo eliminar');
                                })
                            
                        }else{
                            funciones.AvisoError('Clave incorrecta')
                        }
                    }
                )        
            }
        });

 
};

function delete_pedido (sucursal,coddoc,correlativo){
    return new Promise((resolve,reject)=>{
        axios.post('/ventas/deletepedidovendedor',{
           sucursal:sucursal,
           coddoc:coddoc,
           correlativo:correlativo
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data);             
            }else{
                reject();
            }                     
        }, (error) => {
            reject();
        });
    })
}

//---------------------------
//editar pedido
//---------------------------
