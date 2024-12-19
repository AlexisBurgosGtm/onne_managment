
var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');


const execute = require('./connection');


var router_general = require('./router/router_general');
var router_empleados = require('./router/router_empleados');
var router_productos = require('./router/router_productos');
var router_pos = require('./router/router_pos');
var router_tipodocumentos = require('./router/router_tipodocumentos');
var router_clientes = require('./router/router_clientes');

var router_reportes = require('./router/router_reportes');
var router_despacho = require('./router/router_despacho');


var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 2001;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});



app.post("/enviar_mail",function(req,res){
  
    const {destino,msg,motivo} = req.body;


    //Creamos el objeto de transporte
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pym.notificaciones@gmail.com',
        pass: 'gdjysyxrpzcgedyd'  //$ystems2023
      }
    });

   

    var mensaje = msg;

    var mailOptions = {
      from: 'pym.notificaciones@gmail.com', 
      to: destino,
      subject: motivo,
      text: mensaje
    };

    

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log('Error al enviar correo: ')
        console.log(error);
         res.send('error');
      } else {
        console.log('Email enviado: ' + info.response);
         res.send('enviado');
      }
    });

	 



}); 




app.get("/",function(req,res){
  
 

	res.sendFile(path + 'index.html');
}); 


app.post("/activate_config_count_rows",function(req,res){
  let qry = `
  EXEC sys.sp_configure N'user options', N'0';
  RECONFIGURE WITH OVERRIDE;
  `;

  execute.Query(res,qry);

})

app.get("/login",function(req,res){
  res.redirect('/');
}); 

// DESPACHO //

app.get("/despacho",function(req,res){

    const {empnit,coddoc,correlativo} = req.query;


    console.log(req.query);

    io.emit('nuevo_despacho', empnit,coddoc,correlativo);

    res.send('ok')

}); 

app.get("/despacho_finalizado",function(req,res){

  const {empnit,coddoc,correlativo} = req.query;

  io.emit('fin_despacho', empnit,coddoc,correlativo);

  res.send('ok')

}); 


// -------- //



//Router 
app.use('/general', router_general);
app.use('/empleados', router_empleados);
app.use('/productos', router_productos);
app.use('/pos', router_pos);
app.use('/tipodocumentos', router_tipodocumentos);
app.use('/clientes', router_clientes);


app.use('/reportes',router_reportes);
app.use('/despacho',router_despacho);




app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
  //res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});




// SOCKET HANDLER
io.on('connection', function(socket){
  
      socket.on('nuevo_pedido', (tipo,msn)=>{
        io.emit('nuevo_pedido', tipo, msn);
      });

      socket.on('nueva_cotizacion', (tipo,msn)=>{
        io.emit('nueva_cotizacion', tipo, msn);
      });

      
  
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

