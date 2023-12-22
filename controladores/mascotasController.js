import { mascotas } from "../modelos/mascotasModelo.js";

//buscar todos
const buscar= (req, res)=>{
    
    mascotas.findAll().then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `error: ${err}`
        })
    })
}

//buscar por id
const buscarId= (req, res)=>{
    const id = req.params.id;
    if(id==null){
        res.status(203).json({
            mensaje: "id vacio"
        });
        return;
    }
    mascotas.findByPk(id).then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `error: ${err}`
        })
    })
}

//crear un recurso
const crear = (req,res)=>{
    if(!req.body.nombre){
        res.status(400).json({
            mensaje: "nombre en vacio"
        });
        return;
    }
    const dataset={
        nombre: req.body.nombre,
        edad: req.body.edad
    }

    mascotas.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "registrado"
        })
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `error: ${err}`
        })
    })
};


//actualizar
const actualizar=(req,res)=>{
    const id = req.params.id;
    if(!req.body.nombre && !req.body.edad){
        res.status(400).json({
            mensaje:"no se encontraron datos para actualizar"
        });
        return;
    }
    else{
        const nombre= req.body.nombe;
        const edad= req.body.edad
        mascotas.update({nombre, edad}, {where:{id} })
        .then((resultado)=>{
            res.status(200).json({
                mensaje:"actualizado"
            })
        }).catch((err)=>{
            res.status(500).json({
                mensaje: `error: ${err}`
            })
        })
    }
    
}

//eliminar
const eliminar=(req,res)=>{
    const id = req.params.id;
    if(id==null){
        res.status(203).json({
            mensaje: "id vacio"
        });
        return;
    }
    else{
        mascotas.destroy( {where:{id} })
        .then((resultado)=>{
            res.status(200).json({
                mensaje:"eliminado"
            })
        }).catch((err)=>{
            res.status(500).json({
                mensaje: `error: ${err}`
            })
        })
    }
    
}


export {crear, buscar, buscarId, actualizar, eliminar}