// module.exports = class DepthCalculator {
//     calculateDepth(arr) {
//         let result = 0;
//         let a = [];
    
//         function deep(array) {        
//             if (Array.isArray(array)) {
//                 array.forEach((element, i) => {
//                     if (Array.isArray(element)) {
//                         a.push('[')                    
//                         return deep(element);
//                     }                
//                 });
//                 a.push(']')               
//             }        
//         }
//         deep(arr)
//         let tmp = 0;
//         let prev = 0;
//         a.forEach(element => {
            
//             if (element == '[') {
//                 tmp++;
//             } else {            
//                 if (result < tmp ) result = tmp;
//                 tmp = 0;
//             }
//         });  
        
//         return result+1;
//     }
// };

const arr = [1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]

function calculateDepth(arr) {
    let result = 1;
    let a = [];

    // function deep(array) {        
        if (Array.isArray(arr)) {
            // a.push('[')                    
            arr.forEach((element, i) => {
                if (Array.isArray(element)) {
                    a.push('[')                    
                    return calculateDepth(element);
                }                
            });
            a.push(']')
            // if (result <= itog) result =  result + itog;    
        }        
    // }
    // deep(arr)
    let tmp = 0;
    let prev = 0;
    let text = '';
    a.forEach(element => {
        text += element + '';
        console.log(text)
        console.log('--------------')
        if (element == '[') {
            tmp++;
        } else {            
            if (result < tmp ) result = result + tmp;
            tmp = 0;
        }
    });  
    console.log(text);
    return calculateDepth(a);

}

console.log(calculateDepth(arr));

