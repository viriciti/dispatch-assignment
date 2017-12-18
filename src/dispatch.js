var Dispatch = class Dispatch {

	constructor() {
		this.vehicles = []
	}

	start() {
		// simulate evolution of time here
		var bus = this.vehicles[0]

		bus.start()
	}

	addVehicle(veh) {
		this.vehicles.push(veh)
	}
}

module.exports = Dispatch
