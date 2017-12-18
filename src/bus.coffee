class Bus
	constructor: (@name, @soc) ->

	energyConsumed: ->
		5.8 + Math.random() * 1.7

	energyCharged: ->
		5.0

module.exports = Bus
