const Dispatch = require("./dispatch")
const Bus      = require("./bus")

const dispatch = new Dispatch()

dispatch.addVehicle(new Bus("1211", 100))

dispatch.start()
