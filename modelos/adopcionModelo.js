import Sequelize from "sequelize";
import { db } from "../database/conexion.js";

const adopcion = db.define("adopciones",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id_mascota:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    id_estado_adopcion:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
})

export { adopcion}