const express = require('express');
const pool = require('../mysql/sql');
const router = express.Router();

router.get('/',async(req,res) =>{
    try{
        const [rows,fields] = await pool.query('select * from expense')

        res.json({
            data:rows
        })
    } catch(error){
        console.log(error)
        res.json({
            status: "error"
        })
    }
   
});

router.post('/',async(req,res)=>{
    try{
        console.log(req.body);
        const {title, amount} = req.body;
        const sql = 'insert into expense(title,amount) values (?,?)'
        const [rows,fields] = await pool.query(sql, [title,amount]);
        res.json({
            data: rows
        })
    }catch(error){
        console.log(error);
        res.json({
            status : "error"
        })
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const {title, amount} = req.body;
        const {id} = req.params;
        const sql = "update expense set title = ?, amount = ? where id = ?"
       const [rows,fields] = await pool.query(sql, [title,amount,id]);

       res.json({
        data: rows
       })
    }catch(error){
        console.log(error);
        res.json({
            status:"error"
        })
    }
})
router.delete('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const sql = "delete from expense where id = ?"
       const [rows,fields] = await pool.query(sql, [id]);

       res.json({
        data: rows
       })
    }catch(error){
        console.log(error);
        res.json({
            status:"error"
        })
    }
})


module.exports = router;