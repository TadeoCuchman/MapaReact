const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        // hardcoded data who could given from a DB or another API.
        const places =  [
            {
                "description": "Punta del Este es un balneario que se encuentra en una angosta península del sudeste de Uruguay.",
                "name": "Punta del Este",
                "geometry": [
                    -34.94984651927502,
                    -54.93287007462969
                ]
            },
            {
                "description": "Buenos Aires es la gran capital cosmopolita de Argentina. ",
                "name": "Buenos Aires",
                "geometry": [
                    -34.594267258005196,
                    -58.40996080828613
                ]
            },
            {
                "description": "Colonia del Sacramento es una ciudad del suroeste de Uruguay, al otro lado del Río de la Plata de Buenos Aires.",
                "name": "Colonia del Sacramento",
                "geometry": [
                    -34.46307452944715,
                    -57.83594772383762
                ]
            },
            {
                "description": "Paysandú es una localidad uruguaya situada al norte del país. ",
                "name": "Paysandu",
                "geometry": [
                    -32.315394562065315,
                    -58.08587770480305
                ]
            },
            {
                "description": "Florida es una ciudad en la República Oriental del Uruguay. Capital del departamento homónimo.",
                "name": "Florida",
                "geometry": [
                    -34.09723376708202,
                    -56.21844517868587
                ]
            },
            {
                "description": "Porto Alegre es la capital del estado de Río Grande del Sur, en el sur de Brasil.",
                "name": "Porto Alegre",
                "geometry": [
                    -29.984971915621838,
                    -51.182243785605245
                ]
            },
            {
                "description": "Santiago, la capital y la ciudad más grande de Chile, se ubica en un valle rodeado de cimas nevadas de los Andes y la Cordillera de la Costa chilena.",
                "name": "Santiago de Chile",
                "geometry": [
                    -33.46674485000803, 
                    -70.69578307991213
                ]
            },
            {
                "description": "Lima es la capital de Perú ubicada en la árida costa del Pacífico del país. ",
                "name": "Lima",
                "geometry": [
                    -12.042615885574968, 
                    -77.02215339988183
                ]
            },
            {
                "description": "París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. ",
                "name": "Paris",
                "geometry": [
                    48.84973407948415, 
                    2.338101056877952
                ]
            },
            {
                "description": "Berlín, capital alemana, data del siglo XIII.",
                "name": "Berlin",
                "geometry": [
                    52.48210919600182, 
                    13.380679904674306
                ]
            },
            {
                "description": "Montevideo, la capital de Uruguay, es una importante ciudad de la Bahía de Montevideo.",
                "name": "Montevideo",
                "geometry": [
                    -34.86948147614695, 
                    -56.16572248414447
                ]
            }
        ]
    
    return res.json({success: true, message: "Every Place Location.", places})

} catch (err) {
    return res.json({ success: false, message: 'Error with database' + JSON.stringify(err)})
}
})

module.exports = router;