// spec/featureSpec.js
'use strict';

describe('Feature Test:', () => {
  let atc;
  let airport;

  beforeEach(() => {
    atc = new ATC();
    airport = new Airport();
  });
  it('planes can be instructed to land at an airport', () => {
    expect(atc.land_plane()).toEqual(true)
  });
  it('planes can be instructed to land at an airport but wont', () => {
    atc = new ATC(0)
    expect(atc.land_plane()).toEqual(false)
  });
  it('planes can be instructed to takeoff', () => {
    atc.land_plane()
    expect(atc.takeoff()).toEqual(false);
  });
  it('planes can be instructed to takeoff but wont', () => {
    expect(atc.takeoff()).toEqual(true);
  });
  it('allows a custom size of airport to be inputed', () => {
    let test;
    test = airport.custom_size(20);
    expect(test).toEqual(20);
  })
});
