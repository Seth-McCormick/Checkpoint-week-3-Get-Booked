import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js"

class TripsService {

    addTrip(tripData) {
        console.log('bring it');
        ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
        ProxyState.trips = ProxyState.trips
    }

    newNote(newNote, id) {
        let trip = ProxyState.trips.find(t => t.id == id)
        trip.note = newNote
        ProxyState.trips = ProxyState.trips

    }

    deleteTrip(id) {
        console.log(id);
        ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
    }
}



export const tripsService = new TripsService()