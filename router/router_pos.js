const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/productos_filtro", async(req,res)=>{
   
    const { token, sucursal, filtro } = req.body;

    let qry = `SELECT  PRODUCTOS.CODPROD, PRODUCTOS.CODPROD2, 
    PRODUCTOS.DESPROD, PRODUCTOS.DESPROD2, PRODUCTOS.DESPROD3, 
    PRODUCTOS.CODMARCA, MARCAS.DESMARCA, 
    PRODUCTOS.TIPOPROD, 
    PRODUCTOS.EXISTENCIA, 
    PRECIOS.CODMEDIDA, 
    PRECIOS.EQUIVALE, 
    PRECIOS.COSTO, 
    PRECIOS.PRECIO, 
    PRECIOS.MAYOREOA, 
    PRECIOS.MAYOREOB, PRECIOS.MAYOREOC
FROM            PRODUCTOS LEFT OUTER JOIN
    MARCAS ON PRODUCTOS.CODMARCA = MARCAS.CODMARCA AND PRODUCTOS.EMPNIT = MARCAS.EMPNIT LEFT OUTER JOIN
    PRECIOS ON PRODUCTOS.CODPROD = PRECIOS.CODPROD AND PRODUCTOS.EMPNIT = PRECIOS.EMPNIT
WHERE        (PRODUCTOS.EMPNIT = '${sucursal}') 
AND (PRODUCTOS.HABILITADO = 'SI')
AND (PRODUCTOS.DESPROD LIKE '%${filtro}%')
AND (PRECIOS.CODMEDIDA IS NOT NULL)
OR
(PRODUCTOS.EMPNIT = '${sucursal}') 
AND (PRODUCTOS.HABILITADO = 'SI')
AND (PRODUCTOS.CODPROD = '${filtro}')
AND (PRECIOS.CODMEDIDA IS NOT NULL)
`
    

    execute.QueryToken(res,qry,token);
     
});


router.post("/productos_precio", async(req,res)=>{
   
    const { token, sucursal, codprod, codmedida } = req.body;

    let qry = `SELECT CODPROD, CODMEDIDA, EQUIVALE, 
                COSTO, PRECIO, MAYOREOA,MAYOREOB,MAYOREOC 
                FROM PRECIOS 
                WHERE EMPNIT='${sucursal}' 
                AND CODPROD='${codprod}' 
                AND CODMEDIDA='${codmedida}';`
    
    console.log(qry);

    execute.QueryToken(res,qry,token);
     
});





module.exports = router;