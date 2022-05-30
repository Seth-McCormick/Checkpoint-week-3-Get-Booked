import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";

export class ReservationsController {
    constructor() {

        // console.log('hello', ProxyState.reservations);



    }
    addReservation(tripId) {

        window.event.preventDefault()

        // console.log('adding reservation', tripId);
        // ProxyState.reservations.sort((a, b) => a.date -= b.date)
        let form = window.event.target
        let reservationData = {
            tripId: tripId,
            name: form.name.value,
            type: form.type.value,
            confirmationNumber: form.confirmationNumber.value,
            address: form.address.value,
            date: form.date.value,
            cost: form.cost.value
        }
        // console.log(reservationData);
        reservationsService.addReservation(reservationData)

    }

    deleteReservation(id) {
        if (confirm('are you sure?')) {
            reservationsService.deleteReservation(id)
        }

    }
}