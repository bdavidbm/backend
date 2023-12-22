import { adopcion } from "../modelos/adopcionModelo.js";

//buscar todos
const buscar= (req, res)=>{
    
    adopcion.findAll().then((resultado)=>{
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
    adopcion.findByPk(id).then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `error: ${err}`
        })
    })
}

//crear un recurso
const crear = (req,res)=>{
    if(!req.body.id_mascota && !req.body.id_estado_adopcion){
        res.status(400).json({
            mensaje: "dato en vacio"
        });
        return;
    }
    const dataset={
        id_mascota: req.body.id_mascota,
        id_estado_adopcion: req.body.id_estado_adopcion
    }

    adopcion.create(dataset).then((resultado)=>{
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
    if(!req.body.id_mascota && !req.body.id_estado_adopcion){
        res.status(400).json({
            mensaje:"no se encontraron datos para actualizar"
        });
        return;
    }
    else{
        const id_mascota= req.body.id_mascota;
        const id_estado_adopcion= req.body.id_estado_adopcion
        adopcion.update({id_mascota, id_estado_adopcion}, {where:{id} })
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
        adopcion.destroy( {where:{id} })
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

export {buscar, buscarId, crear, actualizar, eliminar}