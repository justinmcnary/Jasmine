//Using Clock in jasmine

//with setTimeout
describe('a simple setTimeout', () => {
  let sample;
  beforeEach(() => {
    sample = jasmine.createSpy('sampleFunction');
    jasmine.clock().install();
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('is only invoked after 1000 milliseconds', () => {
    setTimeout(() => {
      sample();
    }, 1000);
    jasmine.clock().tick(999);
    expect(sample).not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(sample).toHaveBeenCalled();
  });
});

//with setInterval
describe('a simple setInterval', () => {
  let dummyFunction;

  beforeEach(() => {
    dummyFunction = jasmine.createSpy('dummyFunction');
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('checks to see the number of times the function is invoked', () => {
    setInterval(() => {
      dummyFunction();
    }, 1000);
    jasmine.clock().tick(999);
    expect(dummyFunction.calls.count()).toBe(0);
    jasmine.clock().tick(1000);
    expect(dummyFunction.calls.count()).toBe(1);
    jasmine.clock().tick(1);
    expect(dummyFunction.calls.count()).toBe(2);
  });
});

//Testing Async code
function getUserInfo(username) {
  return $.getJSON('https://api.github.com/users/' + username);
}

describe('#getUserInfo', () => {
  it('returns the correct name for the user', done => {
    getUserInfo('justinmcnary').then(data => {
      console.log(data);
      expect(data.name).toBe(null);
      done();
    });
  });
});
