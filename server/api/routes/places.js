const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        // hardcoded data who could given from a DB or another API.
        const places =  [
            {
                "description": "Punta del Este is a city on the Athlantic coast on the southeast of Uruguay.",
                "name": "Punta del Este",
                "country": "Uruguay",
                "geometry": [
                    -34.94984651927502,
                    -54.93287007462969
                ],
                "image": {
                    "path":"/CityImages/punta_del_este.jpeg"
                }
            },
            {
                "description": "Buenos Aires is the cosmopolitan capital city of Argentina. ",
                "name": "Buenos Aires",
                "country": "Argentina",
                "geometry": [
                    -34.594267258005196,
                    -58.40996080828613
                ],
                "image": {
                    "path":"/CityImages/buenos_aires.jpeg"
                }
            },
            {
                "description": "Colonia del Sacramento is a city of the southweast of Uruguay, at the other side of El Río de la Plata from Buenos Aires.",
                "name": "Colonia del Sacramento",
                "country": "Uruguay",
                "geometry": [
                    -34.46307452944715,
                    -57.83594772383762
                ],
                "image": {
                    "path":"/CityImages/colonia.jpeg"
                }
            },
            {
                "description": "Paysandú is a Uruguayan location on the north of the country. ",
                "name": "Paysandu",
                "country": "Uruguay",
                "geometry": [
                    -32.315394562065315,
                    -58.08587770480305
                ],
                "image": {
                    "path":"/CityImages/paysandu.jpeg"
                }
            },
            {
                "description": "Florida is a city of La República Oriental del Uruguay. Capital of his state with same name.",
                "name": "Florida",
                "country": "Uruguay",
                "geometry": [
                    -34.09723376708202,
                    -56.21844517868587
                ],
                "image": {
                    "path":"/CityImages/florida.jpeg"
                }
            },
            {
                "description": "Porto Alegre is the capital of Rio Branco on the south of Brasil.",
                "name": "Porto Alegre",
                "country": "Brasil",
                "geometry": [
                    -29.984971915621838,
                    -51.182243785605245
                ],
                "image": {
                    "path":"/CityImages/porto_alegre.jpeg"
                }
            },
            {
                "description": "Santiago, the Capital and biggest city of Chile, she's located on a vast valley surronded by the snowed mountains of Los Andes and the coast.",
                "name": "Santiago de Chile",
                "country": "Chile",
                "geometry": [
                    -33.46674485000803, 
                    -70.69578307991213
                ],
                "image": {
                    "path":"/CityImages/santiago_de_chile.jpeg"
                }
            },
            {
                "description": "Lima is the Peruvian capital, located on the Pacific coast of the country. ",
                "name": "Lima",
                "country": "Peru",
                "geometry": [
                    -12.042615885574968, 
                    -77.02215339988183
                ],
                "image": {
                    "path":"/CityImages/lima.jpeg"
                }
            },
            {
                "description": "París, France capital, it's an important European city and an multinational center of art, fashon, gastronomi and curture. ",
                "name": "Paris",
                "country": "France",
                "geometry": [
                    48.84973407948415, 
                    2.338101056877952
                ],
                "image": {
                    "path":"/CityImages/paris.jpeg"
                }
            },
            {
                "description": "Berlín, german capital, dated from XIIIs.",
                "name": "Berlin",
                "country": "Germany",
                "geometry": [
                    52.48210919600182, 
                    13.380679904674306
                ],
                "image": {
                    "path":"/CityImages/berlin.jpeg"
                }
            },
            {
                "description": "Montevideo, la capital de Uruguay, es una importante ciudad de la Bahía de Montevideo.",
                "name": "Montevideo",
                "country": "Uruguay",
                "address" : "Enrique Tarigo 1322",
                "geometry": [
                    -34.86948147614695, 
                    -56.16572248414447
                ],
                "image": {
                    "path":"/CityImages/montevideo.jpeg"
                }
            }
        ]
    
    return res.json({success: true, message: "Every Place Location.", places})

} catch (err) {
    return res.json({ success: false, message: 'Error with database' + JSON.stringify(err)})
}
})

module.exports = router;