import Sequelize from "sequelize";
import { db } from "../database/conexion.js";

const mascotas = db.define("mascotas",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type:Sequelize.STRING,
        allowNull:true
    },
    edad:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    raza:{
        type:Sequelize.STRING,
        allowNull:true
    },
    descripcion:{
        type:Sequelize.STRING,
        allowNull:true
    },
    imagen:{
        type:Sequelize.STRING,
        allowNull:true
    }
});

export {mascotas}