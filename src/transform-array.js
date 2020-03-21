module.exports = function transform(arr) {
    // throw 'Not implemented';
    if (!Array.isArray(arr)) throw new Error();
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        switch (element) {
            case '--discard-next':
                index++;
                break;
            case '--discard-prev':
                if (arr.length > 0) {
                    result.pop();
                }                
                break;
            case '--double-next':
                if (index < arr.length - 1) {
                    result.push(arr[index + 1]);
                }                
                break;
            case '--double-prev':
                if (index > 0) {
                    result.push(arr[index - 1]);
                }                
                break;
            default:
                result.push(element);
                break;
        }
    }
    return result;
};


// function transform (arr) {
//     const arrSign = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         arrSign.forEach(sign => {
//             if (element.includes(sign)) {
//                 switch (sign) {
//                     case '--discard-next':
//                         arrSign.splice(index+1,1);
//                         break;
//                     case '--discard-prev':
//                         arrSign.splice(index-1,1);
//                         break;
//                     case '--double-next':

//                         break;
//                     case '--double-prev':
//                         let newArr = arr.slice(0,index);
//                         newArr.push(element);
//                         newArr.push(element);
//                         let afterArr = arr.slice(index);
//                         newArr.concat(afterArr);                        
//                         break;
//                     default:
//                         break;
//                 }
//             }
//         });

//     }    
// }