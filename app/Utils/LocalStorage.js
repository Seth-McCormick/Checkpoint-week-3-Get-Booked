import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";

export function saveFile() {
    // console.log('saving');
    let data = {
        trips: ProxyState.trips,
        reservations: ProxyState.reservations
    }
    window.localStorage.setItem('Get-Booked', JSON.stringify(data))
}

export function loadFile() {
    // console.log('loading');
    let data = window.localStorage.getItem('Get-Booked')
    if (data) {
        let obj = JSON.parse(data)
        ProxyState.trips = obj.trips.map(td => new Trip(td))
        ProxyState.reservations = obj.reservations.map(rd => new Reservation(rd))
    }
}