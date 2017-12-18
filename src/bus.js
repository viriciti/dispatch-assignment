var Bus = class Bus {

	constructor(name, soc) {
		this.name = name
		this.soc = soc
	}

	energyConsumed() {
		return 5.8 + Math.random() * 1.7
	}

	energyCharged() {
		return 5.0
	}

	start() {
		console.log(`Bus ${this.name} started the route`)
	}
}

module.exports = Bus
