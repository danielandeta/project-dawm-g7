const { Op } = require("sequelize");
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
const express = require('express');
const router = express.Router();
var listMes= ["ENE",
  "FEBR",
  "MZO",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGT",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];


router.get('/', async (req, res, next) => { 
  await models.factura.findAll({
  //  ' SELECT MONTH(fecha), COUNT(*) FROM factura, compra WHERE factura.id = compra.id_factura group by MONTH(fecha)'
    include: [{
      all: true,
      // nested: true
     // attributes:[sequelize.fn('fecha','month', sequelize.col('fecha')), 'Month'],
    }],

    where: {
      fecha: {
        [Op.lt]: new Date(),
        [Op.gt]: new Date(new Date() - 365 * 24 * 60 * 60 * 1000)
      }
    //   attributes: [
    //     [ sequelize.fn('MONTH', sequelize.col('fecha')), 'mes'],
    //   ],
    //   group: 'mes'
    }
  })
  .then(factura => {
    // console.log(factura);
    let response = {data:[], labels:[]};
    for(let i of factura){
      response.labels.push(i.dataValues.id);
      response.data.push(i.dataValues.compras[0].dataValues.total);
    }
    res.send(response);
  })
  .catch(error => res.status(400).send(error))
})

router.get('/mermeladas', async (req, res, next) => { 
  await models.factura.findAll({
    include: [{
      all: true,
      nested: true
    }],
    where: {
      fecha: {
        [Op.lt]: new Date(),
        [Op.gt]: new Date(new Date() - 92 * 24 * 60 * 60 * 1000)
      }
    }
  })
  .then(factura => {
   
    let response = {data:[], labels:[]};
    let mermeladas = {};
    for(let i of factura){
     
      if(mermeladas[i.dataValues.factura_detalles[0].dataValues.id_merme_mermelada.dataValues.sabor]){
        mermeladas[i.dataValues.factura_detalles[0].dataValues.id_merme_mermelada.dataValues.sabor] += 1;
      }else{
        mermeladas[i.dataValues.factura_detalles[0].dataValues.id_merme_mermelada.dataValues.sabor] = 1;
       
      }
    }
    for(let i in mermeladas){
      response.labels.push(i);
      response.data.push(mermeladas[i]);
    }
    console.log(response);
    res.send(response);
  })
  .catch(error => res.status(400).send(error))
})



router.get('/mes', async (req, res, next) => { 
const { QueryTypes } = require('sequelize');
const records = 
await sequelize.query('SELECT MONTH(fecha) as mes, COUNT(*) as conteo FROM factura, compra WHERE factura.id = compra.id_factura group by MONTH(fecha)', {
  nest: true,
  type: QueryTypes.SELECT
})
.then(factura => {
  console.log(factura[0])
  let response = {data:[], labels:[]};
    let mes = {};
    for(let i of factura){
      response.labels.push(listMes[i.mes-1]);
      response.data.push(i.conteo);
      
    }
   
   console.log(response);
    res.send(response);
 })
.catch(error => res.status(400).send(error))
})








module.exports = router
