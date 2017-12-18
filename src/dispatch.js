const Dispatch = class Dispatch {

	constructor() {
		this.vehicles = []
	}

	move(step) {
		// figure out when and when not to dispatch

		// For now, we start only once.
		if(step === 0) this.dispatch()

		if (step === 595) this.vehicles.map((vehicle) => vehicle.stop())
	}

	start() {
		// simulate evolution of time:
		let step = 0
		for(step; step < 10 * 60; step += 5) {

			console.log(`Time is flowing: ${step} minutes passed.`)

			this.move(step)
		}
	}

	dispatch() {
		// Make sure to pick the right bus
		const bus = this.vehicles[0]

		bus.start()
	}

	addVehicle(veh) {
		this.vehicles.push(veh)
	}
}

module.exports = Dispatch
