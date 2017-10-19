// //BeforeEach
// describe('Arrays', () => {
//   let arr;
//   beforeEach(() => {
//     arr = [1, 3, 5];
//   });
//   it('adds elements to an array', () => {
//     arr.push(7);
//     expect(arr).toEqual([1, 3, 5, 7]);
//   });
//   it('returns the new length of an array', () => {
//     expect(arr.push(7)).toBe(4);
//   });
//   it('adds anything into an array', () => {
//     expect(arr.push({})).toBe(4);
//   });
// });

// //afterEach
// describe('Counting', () => {
//   let count = 0;
//   beforeEach(() => {
//     count++;
//   });
//   afterEach(() => {
//     count = 0;
//   });
//   it('has a counter that increments', () => {
//     expect(count).toBe(1);
//   });
//   it('gets reset', () => {
//     expect(count).toBe(1);
//   });
// });

//Nesting describe blocks for more complicated tests
// describe('Array', () => {
//   let arr;
//   beforeEach(() => {
//     arr = [1, 3, 5];
//   });
//   describe('#unshift', () => {
//     it('adds an element to the begining of an array', () => {
//       arr.unshift(17);
//       expect(arr[0]).toBe(17);
//     });
//     it('returns the new length', () => {
//       expect(arr.unshift(1000)).toBe(4);
//     });
//   });
//   describe('#push', () => {
//     it('adds elements to the end of an array', () => {
//       arr.push(7);
//       expect(arr[arr.length - 1]).toBe(7);
//     });
//     it('returns the new length', () => {
//       expect(arr.push(1000)).toBe(4);
//     });
//   });
// });

//Pending somtimes you don't know
// describe('Pending specs', () => {
//   xit('can start with an xit', () => {
//     expect(true).toBe(true);
//   });
//   it('is a pending test there is no callback function');
//   it('is pending if the pending function is invoked inside the callback', () => {
//     expect(2).toBe(2);
//     pending();
//   });
// });
