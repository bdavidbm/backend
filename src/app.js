import express from "express";
import { routerMascotas } from "../rutas/mascotasRouter.js";
import { routerAdopcion } from "../rutas/adopcionRouter.js";
import { db } from "../database/conexion.js";
import cors from "cors"

//creamos instancia de Express
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Verificar conexxion a bs
db.authenticate().then(()=>{
    console.log(`conexion a bd exitosa`)
}).catch(err=>{
    console.log(`conexion a bd error: ${err}`)
})

//Definir ruta
app.get("/", (req, res)=>{
    res.send("hello backend")
});

//Rutas
app.use("/mascotas", routerMascotas)
app.use("/adopcion", routerAdopcion)

// Puerto servidor
const PORT=8000;


//verificar conexion a bd
db.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Servidor inicializado en puerto ${PORT}`);
    });
}).catch(err=>{
    console.log(`conexion a bd error: ${err}`)
})

