import Sequelize from "sequelize";

const db = new Sequelize("mascotas", "mascotas","mascotas",{
    dialect: "mysql",
    host: "localhost"
})

export {db}