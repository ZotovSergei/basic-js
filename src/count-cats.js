module.exports = function countCats( matrix ) {
  let strFind = '^^';
  let count = 0;
  matrix.forEach(element => {
    element.forEach((item)=>{
      if (item == strFind){
        count++;
      }
    })
  });
  return count;
};


// const matrix = [
//   ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//   [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//   [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//   [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//   [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//   [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//   [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//   [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
// ]
// function countCats(matrix) {
//   let strFind = '^^';
//   let count = 0;
//   matrix.forEach(element => {
//     element.forEach((item)=>{
//       if (item == strFind){
//         count++;
//       }
//     })
//   });
//   console.log(count)
// };

// countCats(matrix)
