const execute = require('./../connection');
const express = require('express');
const router = express.Router();


router.post("/login", async(req,res)=>{
   
    const { u,p,TOKEN } = req.body;

    let qry = `
        SELECT USUARIO, NIVEL
        FROM USUARIOS
        WHERE (USUARIO = '${u}') 
            AND (WEBPASS = '${p}')`
    
    execute.QueryToken(res,qry,TOKEN);
     
});


router.post("/empresas", async(req,res)=>{
   
    const { TOKEN} = req.body;

    let qry = `
        SELECT EMPNIT, EMPNOMBRE, CODTIPOEMPRESA FROM EMPRESAS
         `
         //   WHERE NOSUCURSAL='SI';
    
    execute.QueryToken(res,qry,TOKEN);
     
});





module.exports = router;