

let GlobalUrlCalls = '';
let GlobalUrlServicioLocal = 'http://192.168.1.16:8080'
let TOKEN = '';

let GlobalUsuario = '';
let GlobalPass = '';
let GlobalNivelUsuario = 0;

let GlobalBolEditando = false;
let GlobalSignoMoneda = 'Q'
let data_empresas = [];


let root = document.getElementById('root');
let cmbEmpresa = document.getElementById('cmbEmpresa');

let navmenu = document.getElementById('js-nav-menu');

//let btnMenu = document.getElementById('btnMenu');
//btnMenu.style = "visibility:hidden";



let GlobalLoader = `

                <div>
                    <div class="spinner-border text-warning" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-warning" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-warning" role="status"><span class="sr-only">Loading...</span></div>
                </div>
                `
                /*
                <div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>
                */


// VARIABLES
let GlobalSelected_Codprod = '';
let GlobalSelected_Desprod = '';
let GlobalSelected_Costo = 0;
let GlobalSelected_Status = '';
let GlobalTipoPrecio = 'PRECIO';









