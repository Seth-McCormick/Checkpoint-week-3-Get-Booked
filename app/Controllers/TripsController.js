import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { loadFile, saveFile } from "../Utils/LocalStorage.js";


function _drawTrip() {
    let reservations = ProxyState.reservations.sort((a, b) => a.date - b.date)
    let trips = ProxyState.trips
    let template = ''
    trips.forEach(t => template += t.Template)
    console.log('hello', trips, reservations);
    document.getElementById('trip-template').innerHTML = template

}

export class TripsController {
    constructor() {
        console.log('add a trip');
        ProxyState.on('trips', _drawTrip)
        ProxyState.on('reservations', _drawTrip)
        ProxyState.on('trips', saveFile)
        ProxyState.on('reservations', saveFile)
        loadFile()
        _drawTrip()

    }

    addTrip() {

        window.event.preventDefault()
        console.log('booking a trip');
        let form = window.event.target
        let tripData = {
            title: form.title.value
        }
        console.log('trip added', tripData);
        tripsService.addTrip(tripData)

    }


    newNote(id) {
        let textarea = window.event.target
        console.log(textarea.value, id);
        tripsService.newNote(textarea.value, id)



    }

    deleteTrip(id) {
        if (confirm('are you sure?')) {
            tripsService.deleteTrip(id)
        }


    }

}