const express = require("express");
const { validationResult } = require('express-validator');

const node_env = process.env.NODE_ENV;

let apiKeyUSES = process.env.MY_API_KEY_USES; // Ejemplo: establece los usos iniciales de la clave API, considera usar una base de datos para esto

const MY_API_KEY = process.env.MY_API_KEY;

const apiKeyValidator = express.Router();

apiKeyValidator.use(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (req.body.apiKey === MY_API_KEY && (apiKeyUSES > 0 || node_env === 'develop')) {
        console.log("ACCESO CON CLAVE API");
        apiKeyUSES --;
        next();
    }else{
        return res.status(401).json({ message: "No autorizado: Clave API inválida o sin usos restantes, contacta con adminsitrador" });

    }
    
});

module.exports = apiKeyValidator;