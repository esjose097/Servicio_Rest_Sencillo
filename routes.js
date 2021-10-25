const express= require('express');
const routes = express.Router()


routes.get('/', (req, res)=>{
    res.getConnection((err,conn)=>{
        if(err)return res.send(err)
   
       conn.query('INSERT INTO peliculas set ?',[req.body] ,(err, rows)=>{
        if(err)return res.send(err)

        res.json(rows)
       }) 
    })
})

routes.post('/', (req, res)=>{
    res.getConnection((err,conn)=>{
        if(err)return res.send(err)
   
       conn.query('INSERT INTO peliculas set ?',[req.body] ,(err, rows)=>{
        if(err)return res.send(err)

        res.send('¡Película registrada!')
       }) 
    })
})

routes.delete('/', (req, res)=>{
    res.getConnection((err,conn)=>{
        if(err)return res.send(err)
   
       conn.query('DELETE FROM peliculas WHERE id = ?',[req.params.id] ,(err, rows)=>{
        if(err)return res.send(err)

        res.send('Pelicula dada de baja')
       }) 
    })
})


routes.put('/:id', (req, res)=>{
    res.getConnection((err,conn)=>{
        if(err)return res.send(err)
   
       conn.query('UPDATE peliculas set ? WHERE id = ?',[req.body, req.params.id] ,(err, rows)=>{
        if(err)return res.send(err)

        res.send('¡Película actualizada!')
       }) 
    })
})





module.exports = routes