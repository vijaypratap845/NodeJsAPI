var Designation = require('./designation');
var allDesignation = require('./dboperations');

allDesignation.getDesignation().then(result=>{
    console.log(result);
})