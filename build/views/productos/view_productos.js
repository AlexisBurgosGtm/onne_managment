function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_opciones_producto()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_ficha_producto() + view.modal_nuevo_precio() + view.modal_medidas() + view.modal_marcas() + view.modal_claseuno() + view.modal_proveedores()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cinco" data-toggle="tab" href="#cinco" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded col-12 border-personal">
                <div class="card-body p-4">

                    <div class="row">
                        <div class="col-6">
                            <h5 class="text-personal negrita">Catálogo de Productos</h5>
                            
                            <select class="form-control" id="cmbTipoLista">
                                <option value="SI" class="negrita text-info">HABILITADOS</option>
                                <option value="NO" class="negrita text-danger">DESHABILITADOS</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label>Total Productos</label>
                                <h4 class="negrita text-danger" id="lbTotalProductos">000000</h4>
                            </div>
                        </div>
                      
                    </div>    

                </div>
            </div>
            <br>
            <div class="card card-rounded col-12 border-personal">
                <div class="card-body p-2">

                    <div class="form-group">
                        <label>Búsqueda de productos</label>
                        <input type="text" class="form-control border-personal negrita text-personal" placeholder="Escriba para filtrar..." id="txtBuscar">
                    </div>
                    <table class="table table-responsive h-full" id="tblProductos">
                        <thead class="bg-personal text-white f-med">
                            <tr>
                                <td>CÓDIGO</td>
                                <td>DESCRIPCIÓN</td>
                                <td>COSTO</td>
                                <td>MARCA</td>
                                <td>TIPO</td>
                                <td>UXC</td>
                                <td>ACT</td>
                                <td>EXISTENCIA</td>
                            </tr>
                        </thead>
                        <tbody id="tblDataProductos">
                        </tbody>
                    </table>
                
                </div>
            </div>

            <button class="btn btn-success btn-bottom-r btn-circle btn-xl hand shadow" id="btnNuevoProducto">
                <i class="fal fa-plus"></i>
            </button>

         

            `
        },
        modal_opciones_producto:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_menu_producto">
                <div class="modal-dialog modal-dialog-left modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-personal d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white">
                                 Opciones del Producto
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            <h3 id="lbDetDesprod">DESPROD</h3>
                            <small class="negrita text-danger" id="lbDetCodprod">0001</small>
                            
                            <hr class="solid">
                                <div class="row">

                                    <div class="col-6">
                                        
                                            <button class="btn btn-circle btn-outline-info" id="btnProdMenEditar">
                                                <i class="fal fa-edit"></i>
                                            </button>  <b class="text-info hand">Editar Producto</b>
                                        <hr class="solid">
                                            <button class="btn btn-circle btn-personal" id="btnProdMenKardex">
                                                <i class="fal fa-list"></i>
                                            </button>  <b class="text-personal hand">Kardex</b>
                                        <hr class="solid">
                                        
                                            <button class="btn btn-circle btn-danger" id="btnProdMenEliminar">
                                                <i class="fal fa-trash"></i>
                                            </button>  <b class="text-danger hand">Eliminar</b>
                                        
                                    </div>

                                    <div class="col-6">
                                            <button class="btn btn-circle btn-personal" id="btnProdMenVentas">
                                                <i class="fal fa-chart-pie"></i>
                                            </button>  <b class="text-personal hand">Ventas por Fechas</b>
                                        
                                        <hr class="solid">
                                            <button class="btn btn-circle btn-personal" id="btnProdMenCompras">
                                                <i class="fal fa-box"></i>
                                            </button>  <b class="text-personal hand">Compras por Fechas</b>
                                        
                                        <hr class="solid">
                                            <button class="btn btn-circle btn-warning" id="btnProdMenActivar">
                                                <i class="fal fa-sync"></i>
                                            </button>  <b class="text-warning hand">Activar/Desactivar</b>
                                        
                                    </div>

                                    
                                    
                                </div>
                                    
                            <br>

                            <div class="card card-rounded p-2">
                                <div class="card-body">

                                    <table class="table table-responsive h-full">
                                        <thead class="bg-personal text-white">
                                            <tr>
                                                <td>MEDIDA</td>
                                                <td>EQ</td>
                                                <td>COSTO</td>
                                                <td>PÚBLICO</td>
                                                <td>MAYOREOA</td>
                                                <td>MAYOREOB</td>
                                                <td>MAYOREOC</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblDataPreciosProd"></tbody>
                                    </table>

                                </div>
                            </div>

                           
                           
                        </div>
                        <div class="modal-footer text-left">

                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                <i class="fal fa-arrow-left"></i>
                            </button>

                        </div>
                       
                    </div>
                </div>
            </div>

            
            `
        },
        vista_ficha_producto:()=>{
            return `
            <h3 class="negrita text-danger">Datos del Producto</h3>
            <div class="row">

                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="card card-rounded col-12 border-personal">
                            <div class="card-body p-4" style="font-size:80%"> 
                                    
                                        <label class="negrita text-personal">Código</label>
                                        <input type="text" class="form-control" id="txtCodprod" maxlength="50">
                                    <br>
                                        <label class="negrita text-personal">Código Alterno (Barras)</label>
                                        <input type="text" class="form-control" id="txtCodprod2" maxlength="50">
                                    <br>
                                        <label class="negrita text-personal">Descripción</label>
                                        <input type="text" class="form-control" id="txtDesprod" maxlength="255">
                                    <br>
                                        <label class="negrita text-personal">Descripción 2</label>
                                        <input type="text" class="form-control" id="txtDesprod2" maxlength="255">
                                    <br>
                                        <label class="negrita text-personal">Descripción 3</label>
                                        <input type="text" class="form-control" id="txtDesprod3" maxlength="255">
                                    <br>
                                     
                            </div>                   
                        </div>
                </div>
                
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="card card-rounded col-12 border-personal">
                            <div class="card-body p-4" style="font-size:80%">

                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="negrita text-personal">Unidades por Caja (UxC)</label>
                                                <input type="number" class="form-control" id="txtUxc">
                                            </div>
                                            <div class="col-6">
                                                <label class="negrita text-personal">Inventario Mínimo</label>
                                                <input type="number" class="form-control text-danger" id="txtInvminimo" value=0>
                                            </div>
                                        </div>
                                        
                                        <br>

                                        <div class="row">
                                            <div class="col-6">
                                                <label class="negrita text-personal">Tipo Producto</label>
                                                <select class="form-control" id="cmbTipoProd">
                                                    <option value="P">BIEN</option>
                                                    <option value="S">SERVICIO</option>
                                                </select>
                                            </div>
                                            <div class="col-6">
                                                <label class="negrita text-personal">Color Alerta</label>
                                                <select class="form-control" id="cmbColor">
                                                    <option value="0">NINGUNO</option>
                                                    <option value="1">AMARILLO</option>
                                                    <option value="2">VERDE</option>
                                                    <option value="3">AZUL</option>
                                                    <option value="4">CAFES</option>
                                                    <option value="5">MORADO</option>
                                                    <option value="6">ROSADO</option>
                                                    <option value="7">NARANJA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        

                                        <label class="negrita text-personal">Marca</label>
                                        <div class="input-group">
                                            <select class="form-control" id="cmbMarca">
                                            </select>
                                            <button class="btn btn-personal hand" id="btnBuscarMarca">
                                                <i class="fal fa-search"></i>
                                            </button>
                                        </div>
                                        
                                        <br>

                                        <label class="negrita text-personal">Fabricante</label>
                                        <div class="input-group">
                                            <select class="form-control" id="cmbClaseuno">
                                            </select>
                                            <button class="btn btn-personal hand" id="btnBuscarClaseuno">
                                                <i class="fal fa-search"></i>
                                            </button>
                                        </div>
                                        
                                        <br>

                                        <label class="negrita text-personal">Proveedor</label>
                                        <div class="input-group">
                                            <select class="form-control" id="cmbProveedor">
                                            </select>    
                                            <button class="btn btn-personal hand" id="btnBuscarProv">
                                                <i class="fal fa-search"></i>
                                            </button>
                                        </div>
                                        
                                        <br>

                                        <label class="negrita text-personal">Clasificación</label>
                                        <div class="input-group">
                                            <select class="form-control" id="cmbClasedos">
                                            </select>
                                            <button class="btn btn-personal hand">
                                                <i class="fal fa-search"></i>
                                            </button>
                                        </div>
                                        
                                        <br>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
            
            <br>

            <div class="row">
                <div class="col-12">
                        <div class="card card-rounded col-12 border-personal">
                            <div class="card-body p-4" style="font-size:80%"> 

                                <h5 class="negrita text-danger">Gestión de Precios</h5>
                                <br>
                                <label class="negrita text-personal">Costo Unitario</label>
                                <div class="input-group">
                                    <input type="number" class="form-control text-danger col-3 negrita" id="txtCosto">
                                    <button class="btn btn-success hand hidden" id="">
                                        <i class="fal fa-plus"></i>
                                    </button>
                                    <button class="btn btn-success hand" id="btnNuevoPrecio">
                                        <i class="fal fa-plus"></i> Nuevo Precio
                                    </button>
                                </div>
                                <br>

                                <table class="table table-responsive h-full">
                                    <thead class="bg-secondary text-white">
                                        <tr>
                                            <td>CODMEDIDA</td>
                                            <td>EQ</td>
                                            <td>COSTO</td>
                                            <td>PRECIO</td>
                                            <td>MAYOREOA</td>
                                            <td>MAYOREOB</td>
                                            <td>MAYOREOC</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblDataPrecios"></tbody>
                                </table>

                            </div>
                        </div>
                </div>

            </div>


            <button class="btn btn-secondary btn-bottom-l btn-xl btn-circle hand shadow" id="btnAtrasTabDos">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-info btn-bottom-r btn-xl btn-circle hand shadow" id="btnGuardarProducto">
                <i class="fal fa-save"></i>
            </button>

            <button class="btn btn-info btn-bottom-r btn-xl btn-circle hand shadow" id="btnGuardarProductoEditar">
                <i class="fal fa-save"></i>
            </button>

            
            `
        },
        modal_nuevo_precio:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_nuevo_precio">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-personal d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Nuevo Precio
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            <div class="row">
                                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">

                                    <table class="table table-responsive h-full f-med">
                                        <thead class="negrita text-personal">
                                            <tr>
                                                <td>MEDIDA_PRECIO</td>
                                                <td>EQUIVALE</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="input-group">
                                                        <select class="form-control bg-amarillo" id="cmbPreMedida">
                                                        </select>
                                                        <button class="btn btn-personal hand" id="btnBuscarMedidas">
                                                            <i class="fal fa-search"></i>
                                                        </button>
                                                    </div>
                                                    
                                                </td>
                                                <td>
                                                    <input type="number" class="negrita form-control bg-amarillo" id="txtPreEquivale">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">

                                    <table class="table table-responsive h-full f-med">
                                        <thead class="negrita text-personal">
                                            <tr>
                                                <td>COSTO UN.</td>
                                                <td>COSTO MEDIDA</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="number" class="negrita text-danger form-control" disabled=true id="txtPreCosto">
                                                </td>
                                                <td>
                                                    <input type="number" class="negrita text-danger form-control" disabled=true id="txtPreTotalCosto">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                
                                
                            </div>

                            <div class="row">

                                <table class="table table-responsive">
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td class="negrita text-personal">Utilidad</td>
                                            <td class="negrita text-personal">Margen %</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="negrita">Precio Público</td>
                                            <td>
                                                <input type="number" class="bg-amarillo form-control negrita text-danger" id="txtPrePublico">
                                            </td>
                                            <td>
                                                <input type="number" class="form-control negrita text-info" id="txtPreUtilidadPublico" disabled=true>
                                            </td>
                                            <td>
                                                <input type="number" class="form-control negrita text-info" id="txtPreMargenPublico" disabled=true>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="negrita">Precio Mayoreo A</td>
                                            <td>
                                                <input type="number" class="bg-amarillo form-control negrita text-danger" id="txtPreMayoreoA">
                                            </td>
                                            <td>
                                                <input type="number" class="form-control negrita text-info" id="txtPreUtilidadMayoreoA" disabled=true>
                                            </td>
                                            <td>
                                                <input type="number" class="form-control negrita text-info" id="txtPreMargenMayoreoA" disabled=true>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                            </div>

                            <div class="row">
                                <div class="col-6 text-left">
                                    <button class="btn btn-circle btn-secondary btn-xl hand shadow" data-dismiss="modal" id="">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>
                                </div>
                                <div class="col-6 text-left">
                                    <button class="btn btn-circle btn-info btn-xl hand shadow" id="btnPreGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>

            
            `
        },
        modal_medidas:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_medidas">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Gestión de Medidas de Precio
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">
                                    <table class="table table-responsive">
                                        <thead class="negrita text-personal">
                                            <tr>
                                                <td>MEDIDA</td>
                                                <td></td>    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="text" maxlength="30" class="border-personal form-control negrita text-personal" id="txtProdCodmedida"></td>
                                                <td>
                                                    <button class="btn btn-personal hand shadow" id="btnProdAgregarMedida">
                                                        <i class="fal fa-plus"></i> Agregar
                                                    </button>
                                                </td>    
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            

                            <table class="table table-responsive h-full f-med" id="">
                                <thead class="negrita bg-personal text-white">
                                    <tr>
                                        <td>MEDIDA</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataProdMedidas">
                                            
                                </tbody>
                            </table>
                                
                            <div class="row">
                                <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>

            
            `
        },
        modal_marcas:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_marcas">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Gestión de Marcas
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">
                                    <table class="table table-responsive">
                                        <thead class="negrita text-personal">
                                            <tr>
                                                <td>CÓDIGO</td>
                                                <td>MARCA</td>
                                                <td></td>    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="number" class="border-personal form-control negrita text-personal" id="txtProdCodmarca"></td>
                                                <td>
                                                    <input type="text" class="border-personal form-control negrita text-personal" id="txtProdDesmarca"></td>
                                                <td>
                                                    <button class="btn btn-personal hand shadow" id="btnProdAgregarMarca">
                                                        <i class="fal fa-plus"></i> Agregar
                                                    </button>
                                                </td>    
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Búsqueda de Marcas</label>
                                <input type="search" class="negrita text-personal border-personal form-control" id="txtBuscarProdMarcas" oninput="funciones.FiltrarTabla('tblProdMarcas','txtBuscarProdMarcas')">
                            </div>

                            <table class="table table-responsive h-full f-med" id="tblProdMarcas">
                                <thead class="negrita bg-personal text-white">
                                    <tr>
                                        <td>CODIGO</td>
                                        <td>MARCA</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataProdMarcas">
                                            
                                </tbody>
                            </table>
                                
                            <div class="row">
                                <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>

            
            `
        },
        modal_claseuno:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_claseuno">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Gestión de Fabricantes (Clasificación Uno)
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">
                                    <table class="table table-responsive">
                                        <thead class="negrita text-personal">
                                            <tr>
                                                <td>CÓDIGO</td>
                                                <td>FABRICANTE</td>
                                                <td></td>    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="number" class="border-personal form-control negrita text-personal" id="txtProdCodClaseuno"></td>
                                                <td>
                                                    <input type="text" class="border-personal form-control negrita text-personal" id="txtProdDesClaseuno"></td>
                                                <td>
                                                    <button class="btn btn-personal hand shadow" id="btnProdAgregarClaseuno">
                                                        <i class="fal fa-plus"></i> Agregar
                                                    </button>
                                                </td>    
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Búsqueda de Fabricantes</label>
                                <input type="search" class="negrita text-personal border-personal form-control" id="txtBuscarProdClaseuno" oninput="funciones.FiltrarTabla('tblProdClaseuno','txtBuscarProdClaseuno')">
                            </div>

                            <table class="table table-responsive h-full f-med" id="tblProdClaseuno">
                                <thead class="negrita bg-personal text-white">
                                    <tr>
                                        <td>CODIGO</td>
                                        <td>FABRICANTE</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataProdClaseuno">
                                            
                                </tbody>
                            </table>
                                
                           
                            <div class="row">
                                <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            
            `
        },
        modal_proveedores:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_proveedores">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="dropdown-header bg-secondary d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white" id="">
                                Gestión de Proveedores
                            </h4>
                        </div>
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">
                                    <table class="table table-responsive">
                                        <thead class="negrita text-personal">
                                            <tr>
                                                <td>CODIGO</td>
                                                <td>PROVEEDOR</td>
                                                <td></td>    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="number" class="border-personal form-control negrita text-personal" id="txtProdCodProv"></td>
                                                <td>
                                                    <input type="text" class="border-personal form-control negrita text-personal" id="txtProdDesProv"></td>
                                                <td>
                                                    <button class="btn btn-personal hand shadow" id="btnProdAgregarProv">
                                                        <i class="fal fa-plus"></i> Agregar
                                                    </button>
                                                </td>    
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Búsqueda de Fabricantes</label>
                                <input type="search" class="negrita text-personal border-personal form-control" id="txtBuscarProdProv" oninput="funciones.FiltrarTabla('tblProdProv','txtBuscarProdProv')">
                            </div>

                            <table class="table table-responsive h-full f-med" id="tblProdProv">
                                <thead class="negrita bg-personal text-white">
                                    <tr>
                                        <td>CODIGO</td>
                                        <td>PROVEEDOR</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataProdProv">
                                            
                                </tbody>
                            </table>
                                
                           
                            <div class="row">
                                <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            
            `
        },
    }
    
    root.innerHTML = view.body();

};

function addListeners(){

    get_combos_producto();

    listeners_listado();

    listeners_precios();
    
    listeners_menu_productos();+

    //LISTENERS DEL MENÚ PRODUCTOS
    


    funciones.slideAnimationTabs();

};

function listeners_menu_productos(){
  

        let btnNuevoProducto = document.getElementById('btnNuevoProducto');
        btnNuevoProducto.addEventListener('click',()=>{

            GlobalBolEditando = false;

            document.getElementById('txtCodprod2').value = '';
            document.getElementById('txtDesprod').value = '';
            document.getElementById('txtDesprod2').value = '';
            document.getElementById('txtDesprod3').value = '';
            document.getElementById('txtUxc').value = '1';
            document.getElementById('txtInvminimo').value = '0';
            document.getElementById('cmbTipoProd').value = 'P';
            document.getElementById('txtCosto').value = '0';

            document.getElementById('tab-dos').click();
            get_tbl_precios();

            document.getElementById('btnGuardarProducto').style = "visibility:visible";
            document.getElementById('btnGuardarProductoEditar').style = "visibility:hidden";
            document.getElementById('txtCodprod').disabled = false;

        });

        
        let btnGuardarProducto = document.getElementById('btnGuardarProducto');
        btnGuardarProducto.addEventListener('click',()=>{

            funciones.Confirmacion('¿Está seguro que desea CREAR este nuevo producto?')
            .then((value)=>{
                if(value==true){

                    
                    let txtCodprod = document.getElementById('txtCodprod');
                    if(txtCodprod.value==''){funciones.AvisoError('Escriba un código de producto');return;}
                    txtCodprod.focus();

                    let txtCodprod2 = document.getElementById('txtCodprod2');
                    if(txtCodprod2.value==''){txtCodprod2.value=txtCodprod.value};

                    let txtDesprod = document.getElementById('txtDesprod');
                    let txtDesprod2 = document.getElementById('txtDesprod2');
                    if(txtDesprod2.value==''){txtDesprod2.value=txtDesprod.value};

                    let txtDesprod3 = document.getElementById('txtDesprod3');
                    if(txtDesprod3.value==''){txtDesprod3.value=txtDesprod.value};

                    let txtUxc = document.getElementById('txtUxc');
                    if(txtUxc.value==''){txtUxc.value='1'};
                    if(txtUxc.value=='0'){txtUxc.value='1'};
                    
                    let txtInvminimo = document.getElementById('txtInvminimo');
                    if(txtInvminimo.value==''){txtInvminimo.value='0'};

                    let cmbTipoProd = document.getElementById('cmbTipoProd');
                    let cmbColor = document.getElementById('cmbColor');
                    let cmbMarca = document.getElementById('cmbMarca');
                    let cmbClaseuno = document.getElementById('cmbClaseuno');
                    let cmbProveedor = document.getElementById('cmbProveedor');
                    let cmbClasedos = document.getElementById('cmbClasedos');
                    let txtCosto = document.getElementById('txtCosto');
                    let lastupdate = funciones.getFecha();
                    let exento = 0;


                    btnGuardarProducto.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    btnGuardarProducto.disabled = true;

                    funciones.showToast('Verificando el código de producto');

                    GF.verify_codprod(txtCodprod.value)
                    .then(()=>{
                        funciones.AvisoError('Este código de producto ya existe, por favor, utilice otro');
                        
                        btnGuardarProducto.innerHTML = `<i class="fal fa-save"></i>`;
                        btnGuardarProducto.disabled = false;
                        return;
                    })
                    .catch(()=>{

                        funciones.showToast('Creando el nuevo producto');
                    

                        insert_producto(txtCodprod.value,txtCodprod2.value,txtDesprod.value,txtDesprod2.value,
                            txtDesprod3.value,txtUxc.value,txtCosto.value,
                            cmbMarca.value,cmbClaseuno.value,cmbProveedor.value,cmbClasedos.value,
                            lastupdate,cmbTipoProd.value,exento,cmbColor.value,txtInvminimo.value)
                            .then(()=>{

                                funciones.Aviso('Se ha creado un nuevo producto');


                                btnGuardarProducto.innerHTML = `<i class="fal fa-save"></i>`;
                                btnGuardarProducto.disabled = false;
                    
                                delete_lista_temp_precios();
                                document.getElementById('tab-uno').click();
                                get_tbl_productos();

                            })
                            .catch(()=>{
                        
                                btnGuardarProducto.innerHTML = `<i class="fal fa-save"></i>`;
                                btnGuardarProducto.disabled = false;

                            })

                        

                    })

                }
            })
            
        
        });

        let btnGuardarProductoEditar = document.getElementById('btnGuardarProductoEditar');
        btnGuardarProductoEditar.addEventListener('click',()=>{

            funciones.Confirmacion('¿Está seguro que desea ACTUALIZAR este producto?')
            .then((value)=>{
                if(value==true){

                    let txtCodprod = document.getElementById('txtCodprod');                  
                
                    let txtCodprod2 = document.getElementById('txtCodprod2');
                    if(txtCodprod2.value==''){txtCodprod2.value=txtCodprod.value};

                    let txtDesprod = document.getElementById('txtDesprod');
                    let txtDesprod2 = document.getElementById('txtDesprod2');
                    if(txtDesprod2.value==''){txtDesprod2.value=txtDesprod.value};

                    let txtDesprod3 = document.getElementById('txtDesprod3');
                    if(txtDesprod3.value==''){txtDesprod3.value=txtDesprod.value};

                    let txtUxc = document.getElementById('txtUxc');
                    if(txtUxc.value==''){txtUxc.value='1'};
                    if(txtUxc.value=='0'){txtUxc.value='1'};
                    
                    let txtInvminimo = document.getElementById('txtInvminimo');
                    if(txtInvminimo.value==''){txtInvminimo.value='0'};

                    let cmbTipoProd = document.getElementById('cmbTipoProd');
                    let cmbColor = document.getElementById('cmbColor');
                    let cmbMarca = document.getElementById('cmbMarca');
                    let cmbClaseuno = document.getElementById('cmbClaseuno');
                    let cmbProveedor = document.getElementById('cmbProveedor');
                    let cmbClasedos = document.getElementById('cmbClasedos');
                    let txtCosto = document.getElementById('txtCosto');
                    let lastupdate = funciones.getFecha();
                    let exento = 0;


                    btnGuardarProductoEditar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    btnGuardarProductoEditar.disabled = true;

                    
                        funciones.showToast('Actualizando datos del producto');
                    

                        edit_producto(txtCodprod.value,txtCodprod2.value,txtDesprod.value,txtDesprod2.value,
                            txtDesprod3.value,txtUxc.value,txtCosto.value,
                            cmbMarca.value,cmbClaseuno.value,cmbProveedor.value,cmbClasedos.value,
                            lastupdate,cmbTipoProd.value,exento,cmbColor.value,txtInvminimo.value)
                            .then(()=>{

                                funciones.Aviso('Se ha actualizado el producto');


                                btnGuardarProductoEditar.innerHTML = `<i class="fal fa-save"></i>`;
                                btnGuardarProductoEditar.disabled = false;
                    
                                document.getElementById('tab-uno').click();
                                get_tbl_productos();

                            })
                            .catch(()=>{
                        
                                btnGuardarProductoEditar.innerHTML = `<i class="fal fa-save"></i>`;
                                btnGuardarProductoEditar.disabled = false;

                            })

                        


                }
            })

        });


        let btnProdMenEliminar = document.getElementById('btnProdMenEliminar');
        btnProdMenEliminar.addEventListener('click',()=>{

            funciones.Confirmacion('¿Está seguro que desea ELIMINAR este producto ' + GlobalSelected_Desprod + '?')
            .then((value)=>{
                if(value==true){

                    btnProdMenEliminar.innerHTML = '<i class="fal fa-trash fa-spin"></i>';
                    btnProdMenEliminar.disabled = true;

                    GF.verify_codprod_movimientos(GlobalSelected_Codprod)
                    .then(()=>{

                        delete_producto(GlobalSelected_Codprod)
                        .then(()=>{
                            funciones.Aviso('Producto eliminado exitosamente!!')
                            btnProdMenEliminar.innerHTML = '<i class="fal fa-trash"></i>';
                            btnProdMenEliminar.disabled = false;
                            $("#modal_menu_producto").modal('hide');
                            get_tbl_productos();
                        
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se pudo eliminar');
                            btnProdMenEliminar.innerHTML = '<i class="fal fa-trash"></i>';
                            btnProdMenEliminar.disabled = false;
                            
                        })
        
                    })
                    .catch(()=>{
                        funciones.AvisoError('Este producto ya tiene movimientos, no puede eliminarlo, debe DESACTIVARLO');
                    })

            

                }
            })


        });

        let btnProdMenActivar = document.getElementById('btnProdMenActivar');
        btnProdMenActivar.addEventListener('click',()=>{

            let habilitado = GlobalSelected_Status =='SI' ? 'DESHABILITAR' : 'HABILITAR';
            
            funciones.Confirmacion(`¿Está seguro que desea ${habilitado} el producto ${GlobalSelected_Desprod}`)
            .then((value)=>{
                if(value==true){

                    btnProdMenActivar.innerHTML = '<i class="fal fa-sync fa-spin"></i>';
                    btnProdMenActivar.disabled = false;


                    desactivar_producto(GlobalSelected_Codprod,GlobalSelected_Status)
                    .then(()=>{
                        
                        funciones.Aviso('Estado del Producto actualizado exitosamente!!')
                        
                        btnProdMenActivar.innerHTML = '<i class="fal fa-sync"></i>';
                        btnProdMenActivar.disabled = false;

                        $("#modal_menu_producto").modal('hide');
                        get_tbl_productos();

                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo cambiar el Estado del Producto');
                        btnProdMenActivar.innerHTML = '<i class="fal fa-sync"></i>';
                        btnProdMenActivar.disabled = false;

                    })

                }
            })

        });


        let btnProdMenEditar = document.getElementById('btnProdMenEditar');
        btnProdMenEditar.addEventListener('click',()=>{

            funciones.Confirmacion('¿Está seguro que desea EDITAR este producto?')
            .then((value)=>{
                if(value==true){

                    GlobalBolEditando = true;

                    btnProdMenEditar.innerHTML = '<i class="fal fa-edit fa-spin"></i>';
                    btnProdMenEditar.disabled = true;

                    document.getElementById('btnGuardarProducto').style = "visibility:hidden";
                    document.getElementById('btnGuardarProductoEditar').style = "visibility:visible";
                    document.getElementById('txtCodprod').disabled = true;

                    get_detalle_producto_selecionado(GlobalSelected_Codprod)
                    .then((data)=>{

                        btnProdMenEditar.innerHTML = '<i class="fal fa-edit"></i>';
                        btnProdMenEditar.disabled = false;

                        $("#modal_menu_producto").modal('hide');

                            data.recordset.map((r)=>{
                                document.getElementById('txtCodprod').value = r.CODPROD;
                                document.getElementById('txtCodprod2').value = r.CODPROD2;
                                document.getElementById('txtDesprod').value = r.DESPROD;
                                document.getElementById('txtDesprod2').value = r.DESPROD2;
                                document.getElementById('txtDesprod3').value = r.DESPROD3;
                                document.getElementById('txtUxc').value = r.UXC;
                                document.getElementById('txtInvminimo').value = r.INVMINIMO;
                                document.getElementById('cmbTipoProd').value = r.TIPOPROD;
                                document.getElementById('cmbColor').value = r.NF;
                                document.getElementById('cmbMarca').value = r.CODMARCA;
                                document.getElementById('cmbClaseuno').value = r.CODCLAUNO;
                                document.getElementById('cmbProveedor').value = r.CODCLADOS;
                                document.getElementById('cmbClasedos').value = r.CODCLATRES;
                                document.getElementById('txtCosto').value = r.COSTO;
                            })

                            document.getElementById('tab-dos').click();

                            get_tbl_precios_producto(document.getElementById('txtCodprod').value,'tblDataPrecios');
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudieron cargar los datos del producto');
                        btnProdMenEditar.innerHTML = '<i class="fal fa-edit"></i>';
                        btnProdMenEditar.disabled = false;
                    })


                }
            })

        });

}

function listeners_listado(){
    cmbEmpresa.removeEventListener('change', handle_empresa_change)
    cmbEmpresa.addEventListener('change', handle_empresa_change)

    document.getElementById('cmbTipoLista').addEventListener('change',()=>{
        get_tbl_productos();
    })

    document.getElementById('btnAtrasTabDos').addEventListener('click',()=>{
        document.getElementById('tab-uno').click();
    });
    
    
    let txtBuscar = document.getElementById('txtBuscar');
    txtBuscar.addEventListener('keyup',(e)=>{
        if(e.keyCode == 13){
            get_tbl_productos();
        }
    })

    get_tbl_productos();


    // MARCAS ---------------------------
    let btnBuscarMarca = document.getElementById('btnBuscarMarca');
    btnBuscarMarca.addEventListener('click',()=>{

        $("#modal_marcas").modal('show');

        get_lista_marcas();

    });


    let btnProdAgregarMarca = document.getElementById('btnProdAgregarMarca');
    btnProdAgregarMarca.addEventListener('click',()=>{

        let codigo = document.getElementById('txtProdCodmarca').value || '0';
        if(codigo=='0'){funciones.AvisoError('Indique un código de marca válido');return;};

        let marca = document.getElementById('txtProdDesmarca').value || 'SN';
        if(marca=='SN'){funciones.AvisoError('Indique una descripción de marca válido');return;};
        

        funciones.Confirmacion('¿Está seguro que desea agregar esta nueva marca?')
        .then((value)=>{
            if(value==true){

                btnProdAgregarMarca.innerHTML = `<i class="fal fa-plus fa-spin"></i>`;
                btnProdAgregarMarca.disabled = true;

                insert_marca(codigo,marca)
                .then(()=>{

                    funciones.Aviso('Marca creada exitosamente!!');
                    get_lista_marcas();
                    get_combo_marcas();

                    document.getElementById('txtProdCodmarca').value ='';
                    document.getElementById('txtProdDesmarca').value ='';
                    
                    btnProdAgregarMarca.innerHTML = `<i class="fal fa-plus"></i> Agregar`;
                    btnProdAgregarMarca.disabled = false;

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar esta marca');
                    
                    btnProdAgregarMarca.innerHTML = `<i class="fal fa-plus"></i> Agregar`;
                    btnProdAgregarMarca.disabled = false;
                })
            }
        })

        

    });

    // MARCAS ---------------------------

    // CLASEUNO -------------------------

    
    let btnBuscarClaseuno = document.getElementById('btnBuscarClaseuno');
    btnBuscarClaseuno.addEventListener('click',()=>{

        $("#modal_claseuno").modal('show');

        get_lista_fabricantes();

    });

    let btnProdAgregarClaseuno = document.getElementById('btnProdAgregarClaseuno');
    btnProdAgregarClaseuno.addEventListener('click',()=>{

        let codigo = document.getElementById('txtProdCodClaseuno').value || '0';
        if(codigo=='0'){funciones.AvisoError('Indique un código de Fabricante válido');return;};

        let descripcion = document.getElementById('txtProdDesClaseuno').value || 'SN';
        if(descripcion=='SN'){funciones.AvisoError('Indique una descripción de Fabricante válido');return;};
        

        funciones.Confirmacion('¿Está seguro que desea agregar este Fabricante?')
        .then((value)=>{
            if(value==true){

                btnProdAgregarClaseuno.innerHTML = `<i class="fal fa-plus fa-spin"></i>`;
                btnProdAgregarClaseuno.disabled = true;

                insert_fabricante(codigo,descripcion)
                .then(()=>{

                    funciones.Aviso('Fabricante creada exitosamente!!');
                    get_lista_fabricantes();
                    get_combo_fabricantes();

                    document.getElementById('txtProdCodClaseuno').value ='';
                    document.getElementById('txtProdDesClaseuno').value ='';
                    
                    btnProdAgregarClaseuno.innerHTML = `<i class="fal fa-plus"></i> Agregar`;
                    btnProdAgregarClaseuno.disabled = false;

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar este Fabricante');
                    
                    btnProdAgregarClaseuno.innerHTML = `<i class="fal fa-plus"></i> Agregar`;
                    btnProdAgregarClaseuno.disabled = false;
                })
            }
        })

        

    });


    // CLASEUNO -------------------------


    // PROVEEDORES -------------------------

    let btnBuscarProv = document.getElementById('btnBuscarProv');
    btnBuscarProv.addEventListener('click',()=>{

        $("#modal_proveedores").modal('show');

        get_lista_proveedores();

    });

    let btnProdAgregarProv = document.getElementById('btnProdAgregarProv');
    btnProdAgregarProv.addEventListener('click',()=>{

        let codigo = document.getElementById('txtProdCodProv').value || '0';
        if(codigo=='0'){funciones.AvisoError('Indique un código de Proveedor válido');return;};

        let descripcion = document.getElementById('txtProdDesProv').value || 'SN';
        if(descripcion=='SN'){funciones.AvisoError('Indique una descripción de Proveedor válido');return;};
        

        funciones.Confirmacion('¿Está seguro que desea agregar este Proveedor?')
        .then((value)=>{
            if(value==true){

                btnProdAgregarProv.innerHTML = `<i class="fal fa-plus fa-spin"></i>`;
                btnProdAgregarProv.disabled = true;

                insert_proveedor(codigo,descripcion)
                .then(()=>{

                    funciones.Aviso('Proveedor creada exitosamente!!');
                    get_lista_proveedores();
                    get_combo_proveedores();

                    document.getElementById('txtProdCodClaseuno').value ='';
                    document.getElementById('txtProdDesClaseuno').value ='';
                    
                    btnProdAgregarProv.innerHTML = `<i class="fal fa-plus"></i> Agregar`;
                    btnProdAgregarProv.disabled = false;

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar este Proveedor');
                    
                    btnProdAgregarProv.innerHTML = `<i class="fal fa-plus"></i> Agregar`;
                    btnProdAgregarProv.disabled = false;
                })
            }
        })

        

    });


    // PROVEEDORES -------------------------

    
};

function listeners_precios(){

    let btnNuevoPrecio = document.getElementById('btnNuevoPrecio');
    btnNuevoPrecio.addEventListener('click',()=>{

            let codprod = document.getElementById('txtCodprod').value || '0';
            if(codprod=='0'){funciones.AvisoError('No puede agregar un precio sin un código');return;}

            let txtCosto = document.getElementById('txtCosto').value || '0';
            if(txtCosto=='0'){funciones.AvisoError('Indique un costo Unitario válido'); return;};

            document.getElementById('txtPrePublico').value = '';
            document.getElementById('txtPreMayoreoA').value = '';

            $("#modal_nuevo_precio").modal('show');

            document.getElementById('txtPreCosto').value = document.getElementById('txtCosto').value
            document.getElementById('txtPreEquivale').value = 1;

            calcular_costo_medida();


    });

    document.getElementById('txtPreEquivale').addEventListener('input',()=>{
        calcular_costo_medida();
        calcular_utilidad_precios('P');
        calcular_utilidad_precios('A');      
    });

    document.getElementById('txtPreMayoreoA').addEventListener('input',()=>{
        calcular_utilidad_precios('A');  
    });

    document.getElementById('txtPrePublico').addEventListener('input',()=>{
        calcular_utilidad_precios('P');  
    });

    let btnPreGuardar = document.getElementById('btnPreGuardar');
    btnPreGuardar.addEventListener('click',()=>{

        
        btnPreGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
        btnPreGuardar.disabled = true;

        let codprod = document.getElementById('txtCodprod').value;

        let cmbPreMedida = document.getElementById('cmbPreMedida');
        let txtPreEquivale = document.getElementById('txtPreEquivale').value || '0';
        let txtPreTotalCosto = document.getElementById('txtPreTotalCosto').value || '0.01';
        let txtPrePublico = document.getElementById('txtPrePublico').value || '0';
        if(Number(txtPrePublico)<0){
            btnPreGuardar.innerHTML = `<i class="fal fa-save"></i>`;
            btnPreGuardar.disabled = false;
            funciones.AvisoError('Agregue un precio válido');
            return;
        };

        let txtPreMayoreoA = document.getElementById('txtPreMayoreoA').value || '0';
        if(Number(txtPreMayoreoA)<0){
            btnPreGuardar.innerHTML = `<i class="fal fa-save"></i>`;
            btnPreGuardar.disabled = false;
            funciones.AvisoError('Agregue un precio Mayoreo válido');
            return;
        };
        if(txtPreMayoreoA=='0'){
            txtPreMayoreoA = txtPrePublico
        };

        if(txtPreEquivale.toString()=='0'){
            document.getElementById('txtPreEquivale').value='1';
            calcular_costo_medida();
            calcular_utilidad_precios('T');
        }else{
            txtPreEquivale=txtPreEquivale.replace('-','');
            calcular_costo_medida();
            calcular_utilidad_precios('T');
        }

        if(GlobalBolEditando==false){
            //se está creando un nuevo producto
            insert_temp_precio(codprod,cmbPreMedida.value,txtPreEquivale,'0',txtPreTotalCosto,txtPrePublico,txtPreMayoreoA,txtPreMayoreoA,txtPreMayoreoA)
            .then(()=>{
    
                btnPreGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                btnPreGuardar.disabled = false;
        
                funciones.Aviso('Precio guardado exitosamente!!')
                $("#modal_nuevo_precio").modal('hide');
    
                get_tbl_precios();
            })
            .catch((err)=>{
                console.log(err);
                btnPreGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                btnPreGuardar.disabled = false;
    
                funciones.AvisoError('No se pudo guardar este precio');
            });

        }else{
            //se está editando el producto
            insert_precio(codprod,cmbPreMedida.value,txtPreEquivale,'0',txtPreTotalCosto,txtPrePublico,txtPreMayoreoA,txtPreMayoreoA,txtPreMayoreoA)
            .then(()=>{
    
                btnPreGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                btnPreGuardar.disabled = false;
        
                funciones.Aviso('Precio guardado exitosamente!!')
                $("#modal_nuevo_precio").modal('hide');
    
                get_tbl_precios_producto(document.getElementById('txtCodprod').value,'tblDataPrecios');

            })
            .catch((err)=>{
                console.log(err);
                btnPreGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                btnPreGuardar.disabled = false;
    
                funciones.AvisoError('No se pudo guardar este precio');
            });

        }
        

        

        

    });

   

    // MEDIDAS -----------------------------
    let btnBuscarMedidas = document.getElementById('btnBuscarMedidas');
    btnBuscarMedidas.addEventListener('click',()=>{

        $("#modal_medidas").modal('show');
        get_lista_medidas();

    });

    let btnProdAgregarMedida = document.getElementById('btnProdAgregarMedida');
    btnProdAgregarMedida.addEventListener('click',()=>{

     
        let descripcion = document.getElementById('txtProdCodmedida').value || 'SN';
        if(descripcion=='SN'){funciones.AvisoError('Indique una descripción de medida válida');return;};
        

        funciones.Confirmacion('¿Está seguro que desea agregar esta Medida?')
        .then((value)=>{
            if(value==true){

                btnProdAgregarMedida.innerHTML = `<i class="fal fa-plus fa-spin"></i>`;
                btnProdAgregarMedida.disabled = true;

                insert_medida(descripcion,descripcion)
                .then(()=>{

                    funciones.Aviso('Medida creada exitosamente!!');
                    get_lista_medidas();
                    get_combo_medidas();

                    document.getElementById('txtProdCodmedida').value ='';
                    
                    btnProdAgregarMedida.innerHTML = `<i class="fal fa-plus"></i> Agregar`;
                    btnProdAgregarMedida.disabled = false;

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar esta Medida');
                    
                    btnProdAgregarMedida.innerHTML = `<i class="fal fa-plus"></i> Agregar`;
                    btnProdAgregarMedida.disabled = false;
                })
            }
        })

        

    });
    // MEDIDAS -----------------------------


};

function insert_temp_precio(codprod,codmedida,equivale,peso,costo,preciop,precioa,preciob,precioc){


    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/insert_temp_precio',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codprod:codprod,
                codmedida:codmedida,
                equivale:equivale,
                peso:peso,
                costo:costo,
                preciop:preciop,
                precioa:precioa,
                preciob:preciob,
                precioc:precioc
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve();             
                }else{
                    reject();
                }            
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    }) 

};

function calcular_costo_medida(){

    try {
        let costo = document.getElementById('txtCosto').value;
        let equivale = document.getElementById('txtPreEquivale').value || 1;
    
        document.getElementById('txtPreTotalCosto').value = Number(costo) * Number(equivale);
            
    } catch (error) {
        
    }

    
};

function calcular_utilidad_precios(tipoprecio){

    let costomedida = document.getElementById('txtPreTotalCosto').value;
    let pre_publico = document.getElementById('txtPrePublico').value || 0;
    let pre_mayoreoa = document.getElementById('txtPreMayoreoA').value || 0;
    
    try {
        switch (tipoprecio) {
            case 'P':
                document.getElementById('txtPreUtilidadPublico').value = Number(pre_publico) - Number(costomedida);
                document.getElementById('txtPreMargenPublico').value =   (((Number(pre_publico) - Number(costomedida)) / Number(pre_publico)) * 100).toFixed(2);
                break;
            case 'A':
                document.getElementById('txtPreUtilidadMayoreoA').value = Number(pre_mayoreoa) - Number(costomedida);
                document.getElementById('txtPreMargenMayoreoA').value =   (((Number(pre_mayoreoa) - Number(costomedida)) / Number(pre_mayoreoa)) * 100).toFixed(2);
                break;
            case 'B':
                
                break;
            case 'C':
                
                break;
            case 'T':
                calcular_utilidad_precios('P');
                calcular_utilidad_precios('A');
                calcular_utilidad_precios('B');
                calcular_utilidad_precios('C');
                break;
        }
    } catch (error) {
        
    }
   

};


function get_combo_marcas(){

        let container = document.getElementById('cmbMarca');
        
        axios.post(GlobalUrlCalls + '/productos/listado_marcas',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    let str = '';
                    data.recordset.map((r)=>{
                        str += `<option value='${r.CODMARCA}'>${r.DESMARCA}</option>`
                    })
                    container.innerHTML = str;     
                }else{
                    container.innerHTML = `<option value='SN'>No se cargó las Marcas</option>`;
                }            
            }else{
                container.innerHTML = `<option value='SN'>No se cargó las Marcas</option>`;
            }             
        }, (error) => {
            container.innerHTML = `<option value='SN'>No se cargó las Marcas</option>`;
        });

};
function get_lista_marcas(){

    let container = document.getElementById('tblDataProdMarcas');
    container.innerHTML = GlobalLoader;

    axios.post(GlobalUrlCalls + '/productos/listado_marcas',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                data.recordset.map((r)=>{
                    str += `<tr>
                                <td>${r.CODMARCA}</td>
                                <td>${r.DESMARCA}</td>
                                <td></td>
                            </tr>`
                })
                container.innerHTML = str;     
            }else{
                container.innerHTML = `No se cargó las Marcas`;
            }            
        }else{
            container.innerHTML = `No se cargó las Marcas`;
        }             
    }, (error) => {
        container.innerHTML = `No se cargó las Marcas`;
    });

};
function insert_marca(codmarca,desmarca){
  
    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/insert_marca',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codmarca:codmarca,
                desmarca:desmarca
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    }
                }      
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};

function get_combo_fabricantes(){

    let container = document.getElementById('cmbClaseuno');
        
    axios.post(GlobalUrlCalls + '/productos/listado_claseuno',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                data.recordset.map((r)=>{
                    str += `<option value='${r.CODCLAUNO}'>${r.DESCLAUNO}</option>`
                })
                container.innerHTML = str;     
            }else{
                container.innerHTML = `<option value='SN'>No se cargó los fabricantes</option>`;
            }            
        }else{
            container.innerHTML = `<option value='SN'>No se cargó los fabricantes</option>`;
        }             
    }, (error) => {
        container.innerHTML = `<option value='SN'>No se cargó los fabricantes</option>`;
    });
};
function get_lista_fabricantes(){

    let container = document.getElementById('tblDataProdClaseuno');
    container.innerHTML = GlobalLoader;

    axios.post(GlobalUrlCalls + '/productos/listado_claseuno',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                data.recordset.map((r)=>{
                    str += `<tr>
                                <td>${r.CODCLAUNO}</td>
                                <td>${r.DESCLAUNO}</td>
                                <td></td>
                            </tr>`
                })
                container.innerHTML = str;     
            }else{
                container.innerHTML = `No se cargó los Fabricantes`;
            }            
        }else{
            container.innerHTML = `No se cargó los Fabricantes`;
        }             
    }, (error) => {
        container.innerHTML = `No se cargó los Fabricantes`;
    });

};
function insert_fabricante(codigo,descripcion){
  
    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/insert_claseuno',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codigo:codigo,
                descripcion:descripcion
            })
        .then((response) => {
            console.log(response);
            if(response.status.toString()=='200'){
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    }
                }       
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};

function get_combo_proveedores(){

    let container = document.getElementById('cmbProveedor');
        
    axios.post(GlobalUrlCalls + '/productos/listado_proveedores',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                data.recordset.map((r)=>{
                    str += `<option value='${r.CODPROV}'>${r.EMPRESA}</option>`
                })
                container.innerHTML = str;     
            }else{
                container.innerHTML = `<option value='SN'>No se cargó los proveedores</option>`;
            }            
        }else{
            container.innerHTML = `<option value='SN'>No se cargó los proveedores</option>`;
        }             
    }, (error) => {
        container.innerHTML = `<option value='SN'>No se cargó los proveedores</option>`;
    });
};
function get_lista_proveedores(){

    let container = document.getElementById('tblDataProdProv');
    container.innerHTML = GlobalLoader;

    axios.post(GlobalUrlCalls + '/productos/listado_proveedores',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                data.recordset.map((r)=>{
                    str += `<tr>
                                <td>${r.CODPROV}</td>
                                <td>${r.EMPRESA}</td>
                                <td></td>
                            </tr>`
                })
                container.innerHTML = str;     
            }else{
                container.innerHTML = `No se cargó los Proveedores`;
            }            
        }else{
            container.innerHTML = `No se cargó los Proveedores`;
        }             
    }, (error) => {
        container.innerHTML = `No se cargó los Proveedores`;
    });

};
function insert_proveedor(codigo,descripcion){
  
    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/insert_proveedor',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codigo:codigo,
                descripcion:descripcion
            })
        .then((response) => {
            console.log(response);
            if(response.status.toString()=='200'){
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    }
                }       
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};



function get_combo_clasedos(){
    let container = document.getElementById('cmbClasedos');
        
    axios.post(GlobalUrlCalls + '/productos/listado_clasedos',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                data.recordset.map((r)=>{
                    str += `<option value='${r.CODCLADOS}'>${r.DESCLADOS}</option>`
                })
                container.innerHTML = str;     
            }else{
                container.innerHTML = `<option value='SN'>No se cargó la clasificación</option>`;
            }            
        }else{
            container.innerHTML = `<option value='SN'>No se cargó la clasificación</option>`;
        }             
    }, (error) => {
        container.innerHTML = `<option value='SN'>No se cargó la clasificación</option>`;
    });

};


function get_combo_medidas(){
    let container = document.getElementById('cmbPreMedida');
        
    axios.post(GlobalUrlCalls + '/productos/listado_medidas',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                data.recordset.map((r)=>{
                    str += `<option value='${r.CODMEDIDA}'>${r.CODMEDIDA}</option>`
                })
                container.innerHTML = str;     
            }else{
                container.innerHTML = `<option value='SN'>No se cargó las Medidas de precio</option>`;
            }            
        }else{
            container.innerHTML = `<option value='SN'>No se cargó las Medidas de precio</option>`;
        }             
    }, (error) => {
        container.innerHTML = `<option value='SN'>No se cargó las Medidas de precio</option>`;
    });

};
function get_lista_medidas(){

    let container = document.getElementById('tblDataProdMedidas');
    container.innerHTML = GlobalLoader;

    axios.post(GlobalUrlCalls + '/productos/listado_medidas',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                data.recordset.map((r)=>{
                    str += `<tr>
                                <td>${r.CODMEDIDA}</td>
                                <td></td>
                            </tr>`
                })
                container.innerHTML = str;     
            }else{
                container.innerHTML = `No se cargó las medidas`;
            }            
        }else{
            container.innerHTML = `No se cargó las medidas`;
        }             
    }, (error) => {
        container.innerHTML = `No se cargó las medidas`;
    });

};
function insert_medida(codigo,descripcion){
  
    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/insert_medida',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codigo:codigo,
                descripcion:descripcion
            })
        .then((response) => {
            console.log(response);
            if(response.status.toString()=='200'){
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    }
                }       
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};


function initView(){

    getView();
    addListeners();

};

function get_combos_producto(){
    get_combo_marcas();
    get_combo_fabricantes();
    get_combo_proveedores();
    get_combo_clasedos();
    get_combo_medidas();
};

function handle_empresa_change(){
    get_tbl_productos();
    get_combos_producto();
};

function get_tbl_precios(){

        let container = document.getElementById('tblDataPrecios');

        axios.post(GlobalUrlCalls + '/productos/lista_precios_temp',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    let str = '';
                    
                    data.recordset.map((r)=>{
                        let idbtnE = `btnE${r.ID}`;
                        str += `
                            <tr>
                                <td>${r.CODMEDIDA}</td>
                                <td>${r.EQUIVALE}</td>
                                <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                                <td>${funciones.setMoneda(r.PRECIOP,'Q')}</td>
                                <td>${funciones.setMoneda(r.PRECIOA,'Q')}</td>
                                <td>${funciones.setMoneda(r.PRECIOB,'Q')}</td>
                                <td>${funciones.setMoneda(r.PRECIOC,'Q')}</td>
                                <td>
                                
                                </td>
                                <td>
                                    <button class="btn-md btn-circle btn-danger hand shadow" id="${idbtnE}" onclick="delete_temp_precio('${idbtnE}','${r.ID}')">
                                        <i class="fal fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        `
                    })
                    container.innerHTML = str;             
                }else{
                    rootErrores.innerHTML = 'No hay filas para mostrar...';
                    container.innerHTML = 'No se cargaron datos...';
                }            
            }else{
                container.innerHTML = 'No se cargaron datos...';
            }             
        }, (error) => {
            rootErrores.innerHTML = error;
            container.innerHTML = 'No se cargaron datos...';
        });
     
};

function delete_temp_precio(idbtn,id){

    let btn = document.getElementById(idbtn);
    
    btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
    btn.disabled = true;

        axios.post(GlobalUrlCalls + '/productos/delete_temp_precio',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                id:id
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    funciones.Aviso('Precio eliminado exitosamente!!');
                    get_tbl_precios();           
                }else{
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                    btn.disabled = false;
                }            
            }else{
                btn.innerHTML = `<i class="fal fa-trash"></i>`;
                btn.disabled = false;
            }             
        }, (error) => {
            btn.innerHTML = `<i class="fal fa-trash"></i>`;
            btn.disabled = false;
        });
      

};

function delete_lista_temp_precios(){
    
    
    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/delete_lista_temp_precio',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }            
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   

};

function data_productos_listado(filtro){
    
    
    let habilitado = document.getElementById('cmbTipoLista').value;

    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/listado',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                habilitado:habilitado,
                filtro:filtro
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }            
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   

};

function get_tbl_productos(){

    let filtro = document.getElementById('txtBuscar').value || '';

    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;

    let lbTotalProductos = document.getElementById('lbTotalProductos');
    lbTotalProductos.innerText = '-----'

    let str = '';


    data_productos_listado(filtro)
    .then((data)=>{
        
        let conteo = 0;
        data.recordset.map((r)=>{
            let strClass= ''; if(Number(r.EXISTENCIA)>0){strClass='text-success'}else{strClass='text-danger'};
            conteo += 1;
            str += `
                <tr class="hand border-bottom border-personal" 
                onclick="get_detalle_producto('${r.CODPROD}','${r.DESPROD}','${r.DESPROD2}','${funciones.setMoneda(r.COSTO,'Q')}','${funciones.convertDateNormal(r.LASTUPDATE)}','${r.HABILITADO}')">
                    <td>${r.CODPROD}</td>
                    <td>${r.DESPROD}</td>
                    <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                    <td>${r.DESMARCA}</td>
                    <td>${r.TIPOPROD}</td>
                    <td>${r.UXC}</td>
                    <td>${funciones.convertDateNormal(r.LASTUPDATE)}</td>
                    <td class="negrita ${strClass}">${r.EXISTENCIA}</td>
                </tr>
            `
        })
        container.innerHTML = str;
        lbTotalProductos.innerText = conteo;
    })
    .catch((err)=>{
        container.innerHTML = 'No hay datos para mostrar...';
        lbTotalProductos.innerText = '-----';
    })

};



//----------------
//nuevo producto



function insert_producto(codprod,codprod2,desprod,desprod2,desprod3,
        uxc,costo,codmarca,codclaseuno,codclasedos,codclasetres,
        lastupdate,tipoprod,exento,nf,invminimo){
    

    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/insert_producto',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codprod:codprod,
                codprod2:codprod2,
                desprod:desprod,
                desprod2:desprod2,
                desprod3:desprod3,
                uxc:uxc,
                costo:costo,
                codmarca:codmarca,
                codclaseuno:codclaseuno,
                codclasedos:codclasedos,
                codclasetres:codclasetres,
                lastupdate:lastupdate,
                tipoprod:tipoprod,
                exento:exento,
                nf:nf,
                invminimo:invminimo
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                if(response.data.toString()=='error'){
                    reject();
                }else{
                    let data = response.data;
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    }
                }        
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   

};

function edit_producto(codprod,codprod2,desprod,desprod2,desprod3,
    uxc,costo,codmarca,codclaseuno,codclasedos,codclasetres,
    lastupdate,tipoprod,exento,nf,invminimo){


return new Promise((resolve,reject)=>{

    axios.post(GlobalUrlCalls + '/productos/edit_producto',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN,
            codprod:codprod,
            codprod2:codprod2,
            desprod:desprod,
            desprod2:desprod2,
            desprod3:desprod3,
            uxc:uxc,
            costo:costo,
            codmarca:codmarca,
            codclaseuno:codclaseuno,
            codclasedos:codclasedos,
            codclasetres:codclasetres,
            lastupdate:lastupdate,
            tipoprod:tipoprod,
            exento:exento,
            nf:nf,
            invminimo:invminimo
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            if(response.data.toString()=='error'){
                reject();
            }else{
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }
            }        
        }else{
            reject();
        }             
    }, (error) => {
        reject();
    });
})   

};

function get_detalle_producto_selecionado(codprod){

    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/datos_producto',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codprod:codprod
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }            
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })

};

//nuevo producto
//----------------


function get_detalle_producto(codprod,desprod,desprod2,costo,lastupdate,st){


        $("#modal_menu_producto").modal('show');

        GlobalBolEditando = false;

        GlobalSelected_Codprod = codprod;
        GlobalSelected_Desprod = desprod;
        GlobalSelected_Costo = Number(costo);
        GlobalSelected_Status = st;

        document.getElementById('lbDetDesprod').innerText = desprod;
        document.getElementById('lbDetCodprod').innerText = codprod;

        get_tbl_precios_producto(codprod,'tblDataPreciosProd');
    

};

function get_tbl_precios_producto(codprod,idcontainer){

    let container = document.getElementById(idcontainer);
    container.innerHTML = GlobalLoader;

    axios.post(GlobalUrlCalls + '/productos/lista_precios',
        {
            sucursal:cmbEmpresa.value,
            token:TOKEN,
            codprod:codprod
        })
    .then((response) => {
        if(response.status.toString()=='200'){
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                let str = '';
                
                data.recordset.map((r)=>{
                    let idbtnE = `btnE${r.ID}`;
                    str += `
                        <tr>
                            <td>${r.CODMEDIDA}</td>
                            <td>${r.EQUIVALE}</td>
                            <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                            <td>${funciones.setMoneda(r.PRECIOP,'Q')}</td>
                            <td>${funciones.setMoneda(r.PRECIOA,'Q')}</td>
                            <td>${funciones.setMoneda(r.PRECIOB,'Q')}</td>
                            <td>${funciones.setMoneda(r.PRECIOC,'Q')}</td>
                            <td>
                                <button class="btn-md btn-circle btn-danger hand shadow" id="${idbtnE}" onclick="delete_precio('${idbtnE}','${r.ID}','${codprod}')">
                                    <i class="fal fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    `
                })
                container.innerHTML = str;             
            }else{
                rootErrores.innerHTML = 'No hay filas para mostrar...';
                container.innerHTML = 'No se cargaron datos...';
            }            
        }else{
            container.innerHTML = 'No se cargaron datos...';
        }             
    }, (error) => {
        rootErrores.innerHTML = error;
        container.innerHTML = 'No se cargaron datos...';
    });
 
};

function insert_precio(codprod,codmedida,equivale,peso,costo,preciop,precioa,preciob,precioc){


    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/insert_precio',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codprod:codprod,
                codmedida:codmedida,
                equivale:equivale,
                peso:peso,
                costo:costo,
                preciop:preciop,
                precioa:precioa,
                preciob:preciob,
                precioc:precioc,
                lastupdate:funciones.getFecha()
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve();             
                }else{
                    reject();
                }            
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    }) 

};

function delete_precio(idbtn,id,codprod){

    let btn = document.getElementById(idbtn);

    funciones.Confirmacion('¿Está seguro que desea ELIMINAR este precio?')
    .then((value)=>{
        if(value==true){

            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
            btn.disabled = true;

                axios.post(GlobalUrlCalls + '/productos/delete_precio',
                    {
                        sucursal:cmbEmpresa.value,
                        token:TOKEN,
                        id:id
                    })
                .then((response) => {
                    if(response.status.toString()=='200'){
                        let data = response.data;
                        if(Number(data.rowsAffected[0])>0){
                            funciones.Aviso('Precio eliminado exitosamente!!');
                            if(GlobalBolEditando==false){
                                get_tbl_precios_producto(codprod,'tblDataPreciosProd');           
                            }else{
                                get_tbl_precios_producto(codprod,'tblDataPrecios');           
                            }
                            
                        }else{
                            btn.innerHTML = `<i class="fal fa-trash"></i>`;
                            btn.disabled = false;
                        }            
                    }else{
                        btn.innerHTML = `<i class="fal fa-trash"></i>`;
                        btn.disabled = false;
                    }             
                }, (error) => {
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                    btn.disabled = false;
                });

        }
    })
    
    
      

};

function delete_producto(codprod){
    
    
    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/delete_producto',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codprod:codprod
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }            
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   

};

function desactivar_producto(codprod,st){
    
    
    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/desactivar_producto',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codprod:codprod,
                status:st
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }            
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   

};
