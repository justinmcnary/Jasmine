//Creating a spy

function add(a, b, c) {
  return a + b + c;
}

describe('add', () => {
  let addSpy, result;
  beforeEach(() => {
    addSpy = spyOn(window, 'add');
    result = addSpy();
  });
  it('it can have params tested', () => {
    expect(addSpy).toHaveBeenCalled();
  });
});

//testing parameters
describe('add', () => {
  let addSpy, result;
  beforeEach(() => {
    addSpy = spyOn(window, 'add');
    result = addSpy(1, 2, 3);
  });
  it('it can have params tested', () => {
    expect(addSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalledWith(1, 2, 3);
  });
});

//returning a value
describe('add', () => {
  let addSpy, result;
  beforeEach(() => {
    addSpy = spyOn(window, 'add').and.callThrough();
    result = addSpy(1, 2, 3);
  });
  it('it can have a return value tested', () => {
    expect(result).toEqual(6);
  });
});

//testing frequency
describe('add', () => {
  let addSpy, result;
  beforeEach(() => {
    addSpy = spyOn(window, 'add').and.callThrough();
    result = addSpy(1, 2, 3);
  });
  it('it can have params frequency tested', () => {
    expect(addSpy.calls.any()).toBe(true);
    expect(addSpy.calls.count()).toBe(1);
    expect(result).toEqual(6);
  });
});
