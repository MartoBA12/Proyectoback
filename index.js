const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
require('dotenv/config')
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAfNsXl67IY5_CLbaV0ZZsMY_VPvjkJD_I",
    authDomain: "a-proyecto.firebaseapp.com",
    projectId: "a-proyecto",
    storageBucket: "a-proyecto.appspot.com",
    messagingSenderId: "1004396543932",
    appId: "1:1004396543932:web:9206c6cdd16c7db367f5b9"
  };

//Inicializar la BD
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

//Inicializar el servidor
const app = express()

//Configuración CORS
const corsOptions = {
    "Origin": "*",
    "optionSuccessStatus": 200
}

app.use(express.json())
app.use(cors(corsOptions))

//Configuración Rutas
//Ruta para insertar un nuevo registro
app.post('/create', (req, res) => {
    const {nombre, apaterno, amaterno, direccion, telefono, ciudad, estado, tipo } = req.body
})

//ruta para leer o traer todos los datos de una coleccion
app.get('/read', (req,res) => {
    
})

//ruta para actualizar un registro de la coleccion
app.post('/update', (req, res) => {
    
})

app.post('/delete', (req, res) => {

})

//Poner servidor en escucha
const PORT = process.env.PORT || 20000

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
})


