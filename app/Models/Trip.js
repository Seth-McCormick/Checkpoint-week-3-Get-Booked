import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class Trip {
  constructor(tripData) {
    this.id = tripData.id || generateId()
    this.title = tripData.title
    // this.reservation = tripData.reservation
    this.note = tripData.note

  }


  get Template() {
    return `

    <div class="row card p-3 m-3" id="trip-template">
        <h3 class="d-flex bg-primary justify-content-between">${this.title}<i class="mdi mdi-delete selectable px-3" onclick="app.tripsController.deleteTrip('${this.id}')"></i></h3>
        <div class="col-12 d-flex justify-content-between border-bottom border-dark">
          <h3>Type</h3>
          <h3>Name</h3>
          <h3>Confirmation Number</h3>
          <h3>Address</h3>
          <h3>Date</h3>
          <h3>Cost</h3>
          
        </div>

   
    ${this.Reservations}

    
        <div class="col-12">
          <form id="form" class="row border-top border-dark mt-3 justify-content-between" onsubmit="app.reservationsController.addReservation('${this.id}')">
            <div class="col-1 m-3">
              <select class="rounded" required name="type" id="type">
                <option value="MotorCycle">MotorCycle</option>
                <option value="RocketShip">RocketShip</option>
                <option value="Hummer">Hummer</option>
                <option value="SandRail">SandRail</option>
              </select>
            </div>
            <div class="col-2  m-3">
              <label for=""></label>
              <input class="col-6 rounded" required type="text"  name="name" id="name" placeholder="Name..">
            </div>
            <div class="col-2 m-3 ps-0">
              <label for=""></label>
              <input class="col-10 rounded" required type="text" name="confirmationNumber" id="confirmationNumber" placeholder="Confirmation Number..">
            </div>
            <div class=" col-2 text-center m-3">
              <label for=""></label>
              <input class="col-8 rounded" required type="text"  name="address" id="address" placeholder="Address..">
            </div>
            <div class=" col-2 text-center m-3">
              <label for=""></label>
              <input class="rounded" required type="date"  name="date" id="date" placeholder="Date..">
            </div>
            <div class="col-1 text-end m-3">
              <label for=""></label>
              <input class="col-8 rounded" required type="number" min="number" name="cost" id="cost" placeholder="Cost..">
            </div>
            <div class="text-end">
              <button class="rounded shadow bg-primary border-0" type="submit">Submit</button>
            </div>
          </form>
          <textarea class="col-6" onblur="app.tripsController.newNote('${this.id}')" placeholder="Add a Note.." >${this.note}</textarea>
          <h4 class="text-end">Total : $${this.Total}</h4>
          </div>
          </div>

        

`

  }
  get Reservations() {

    let reservations = ProxyState.reservations.filter(res => res.tripId == this.id)
    let template = ''
    reservations.forEach(res => template += res.Template)

    // console.log('help');
    return template
  }


  get Total() {
    let reservations = ProxyState.reservations.filter(res => res.tripId == this.id)
    let subTotal = 0
    reservations.forEach(res => subTotal += parseInt(res.cost))
    return subTotal

  }

}