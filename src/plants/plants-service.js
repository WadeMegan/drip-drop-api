const xss = require('xss')

const PlantsService = {
    getAllPlants(db){
        return db   
            .from('drip_drop_plants')
            .select('*')
    },
    postPlant(db, newPlant){
        return db
            .insert(newPlant)
            .into('drip_drop_plants')
            .returning('*')
            .then(([plant])=>plant)
    },
    serializePlant(plant){
        return {
            id: plant.id,
            name: xss(plant.name),
            water_every: plant.water_every,
            watering_directions: xss(plant.watering_directions),
            img: xss(plant.img)
        }
    }
}

module.exports = PlantsService