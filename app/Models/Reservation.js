import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Reservation {
  constructor(reservationData) {
    this.id = reservationData.id || generateId()
    this.tripId = reservationData.tripId
    this.type = reservationData.type
    this.name = reservationData.name
    this.confirmationNumber = reservationData.confirmationNumber
    this.address = reservationData.address
    this.date = new Date(reservationData.date)
    this.cost = reservationData.cost

  }



  get Template() {
    return `
            <div class="col-12 bg-secondary card rounded m-2 ">
            <i class="mdi mdi-delete selectable px-3 text-end" onclick="app.reservationsController.deleteReservation('${this.id}')"></i>
            <div class="row justify-content-between">
              <p class="col-2 mt-3">${this.type}</p>
              <p class="col-2 mt-3">${this.name}</p>
              <p class="col-2 mt-3 m-0 text-center ">h${this.confirmationNumber}</p>
              <p class="col-2 mt-3 text-end">${this.address}</p>
              <p class="col-2 mt-3 text-end">${this.date.toDateString()}</p>
              <p class="col-2 mt-3 text-end">${this.cost}</p>
              
            </div>
          </div>
    `
  }
}





