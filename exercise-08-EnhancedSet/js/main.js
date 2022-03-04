'use strict';
import { EnhancedSet } from "@datastructures-js/set"

const flight_path = (array) => {
    let origins = new EnhancedSet();
    let destinations = new EnhancedSet();

    //preparamos los conjuntos
    for (let i = 0; i < array.length; i++) {
        origins.add(array[i][0]);
        destinations.add(array[i][1]);
    }

    //Orifen= el que está en origenes y no en destinos
    //cojemos el conjunto de los origenes y le sacamos el complemento pasandole el conjunto de los destinos
    let origin = origins.complement(destinations);
    //y lo mismo al contrario
    let destination = destinations.complement(origins);

    return [origin.toArray()[0], destination.toArray()];

}


console.log(JSON.stringify(flight_path([["GRU", "MAD"], ["MAD", "FRA"], ["FRA", "SEA"]])));
