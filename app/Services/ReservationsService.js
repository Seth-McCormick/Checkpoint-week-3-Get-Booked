import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"

class ReservationsService {

    addReservation(reservationData) {
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(reservationData)]
        // console.log('added reservation', ProxyState.reservations);

    }

    deleteReservation(id) {
        console.log('deleting item', id);
        ProxyState.reservations = ProxyState.reservations.filter(res => res.id != id)


    }

}


export const reservationsService = new ReservationsService()