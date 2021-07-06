
class ATC {

  constructor(size) {
    this.airport_cap = size;
    this.aircraft_grounded = 0;
  }

  land_plane() {
    if (this.aircraft_grounded >= this.airport_cap) {
      return false;
    } else {
      this.aircraft_grounded += 1;
      this.ground = true;
      // landed = true;
      return this.ground;
    }
  }

  takeoff() {
    if (this.aircraft_grounded > 0) {
      this.aircraft_grounded -= 1;
      this.ground = false;
      return this.ground;
    } else {
      return true;
    }
  }
}

class Airport {
  size = 10;
  custom_size(size) {
    this.size = size;
    return size;
  }
}
