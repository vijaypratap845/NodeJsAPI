var config = require('./dbconfig.js');
var sql = require('mssql');

async function getDesignation(){
    try{
        let pool = await sql.connect(config);
        let designations = pool.request().query("Select * from Designation");
        return (await designations).recordset;
    }
    catch(error){
         console.log(error);
    }
}

module.exports={
    getDesignation: getDesignation
}