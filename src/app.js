var Dispatch = require("./dispatch")
var Bus      = require("./bus")

var dispatch = new Dispatch()

dispatch.addVehicle(new Bus("1211", 100))

dispatch.start()
