class Scooter{
  constructor(station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
    this.needsRepair = false;
  }
  //scooter class with properties

  rent() {
    if (this.charge > 20 && !this.isBroken) {
      this.station = this.user;
      this.user = null;
    } else if (this.isBroken) {
      console.log("Sorry, this scooter cannot be rented right now because it is broken");
      return;
    } else {
      console.log("Sorry, this scooter cannot be rented right now because it needs to be charged");
      return;
    }
  }
  // allows usder to rent if scooter is not broken or charged over 20%. specifies whether it is not charged or broken

  dock(station) {
    this.station = station;
    console.log(`Scooter is now at ${station}`);
  }
  // allows user to dock the scooter at a specified station 

  async recharge() {
    if (charge < 100) {
      console.log("Beginning to recharge the battery")

      await new Promise(resolve => setTimeout(resolve, 2000))
      this.charge = 100

      console.log("The battery has been recharged!")
    }
  }
  // asynchronously charges the battery of the scooter, but only if current battery is less than 100%

  requestRepair() {
    this.needsRepair = true;
    console.log(`Scooter needs repair.`);
  }
  // this tells the user that the scooter needs repair






    

  
}


module.exports = Scooter
