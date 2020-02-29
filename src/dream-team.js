module.exports = function createDreamTeam(members) {
  let result = '';  
  if (!Array.isArray(members)) {    
    return false
  }
  for (const item of members) {     
    if (typeof(item) == 'string') {
        let el = item.trim();      
        result += el[0].toUpperCase();      
    }    
  }
  return result.split('').sort().join('');
};

// ADGJKMNPRSTW
// ADGJKMNPRSTW
// const members = [
//   '   William Alston ',
//   ' Paul Benacerraf',
//   '  Ross Cameron',
//   '       Gilles Deleuze',
//   '  Arda Denkel ',
//   '  Michael Devitt',
//   '  Kit Fine',
//   ' Nelson Goodman',
//   'David Kolb',
//   '   Saul Kripke',
//   '  Trenton Merricks',
//   '  Jay Rosenberg',
// ]

// function createDreamTeam(members) {
//   let result = '';
//   for (const item of members) {
//     let el = item.trim();    
//     if (el && /[a-zA-Z]/.test(el)) {
//       result+= el[0].toUpperCase();
//     }
//   }
//   console.log(result.split('').sort().join(''));
// };

// createDreamTeam(members)