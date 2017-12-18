Dispatch = require "./dispatch"
Bus      = require "./bus"

dispatch = new Dispatch

dispatch.addVehicle new Bus "1211", 100

dispatch.start()
