var earth = {
  isRound: true,
  numberFromSun: 3
};

describe('Earth', function() {
  it('is round', function() {
    expect(earth.isRound).toBe(true);
  });
  it('is the third planet from the sun', function() {
    expect(earth.numberFromSun).toBe(3);
  });
});

let spiderman = {
  name: 'Peter Parker',
  hero: true,
  age: 16
};

describe('Spiderman', () => {
  it('Peter Parker', () => {
    expect(spiderman.name).toBe('Peter Parker');
  });
  it('hero', () => {
    expect(spiderman.hero).toBe(true);
  });
  it('age', () => {
    expect(spiderman.age).toBe(16);
  });
});

//more examples with other Matchers

describe('Jasmine Matchers', () => {
  it('allows for === and deep equality', () => {
    expect(1 + 1).toBe(2);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
  it('allows for easy precision checking', () => {
    expect(3.1315).toBeCloseTo(3.1312);
  });
  it('allows for easy truthy / falsy checking', () => {
    expect(0).toBeFalsy();
    expect([]).toBeTruthy();
  });
  it('allows for checking contents of an object', () => {
    expect([1, 2, 3]).toContain(1);
    expect({ name: 'Elie' }).toEqual(jasmine.objectContaining({ name: 'Elie' }));
  });
  it('allows for easy type checking', () => {
    expect([]).toEqual(jasmine.any(Array));
    expect(function() {}).toEqual(jasmine.any(Function));
  });
});
