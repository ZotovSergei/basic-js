module.exports = function repeater(str, options) {
    // remove line with error and write your code here
    let repeatCountStr = options.repeatTimes || 1;
    let separatorStr = options.separator || '+';
    let additionStr = options.addition || '';
    let additionRepeatCountSeparator = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '+';
    let text = '';
    
    if (typeof options.addition == 'object' && !options.addition) {
        additionStr = null;
    }

    if (typeof options.addition == 'boolean' && !options.addition) {
        additionStr = options.addition;
    }
    for (let index = 0; index < repeatCountStr; index++) {
        text = text + str + addSep(additionStr, additionRepeatCountSeparator, additionSeparator, separatorStr);
    }
    function addSep(addSeparator, repeatTimes, sep, sepStr) {
        let text = '';
        for (let index = 0; index < repeatTimes; index++) {
            text = text + addSeparator + sep;
        }
        text = text.slice(0, (sep.length * -1)) + sepStr;
        return text;
    }
    return text.slice(0, (separatorStr.length * -1))
    // console.log(text.slice(0,(separatorStr.length*-1)));   
};


// function repeater(str, options) {

//     // remove line with error and write your code here
//     let repeatCountStr = options.repeatTimes || 1;
//     let separatorStr = options.separator || '+';
//     let additionStr = options.addition || '';
//     let additionRepeatCountSeparator = options.additionRepeatTimes || 1;
//     let additionSeparator = options.additionSeparator || '+';
//     let text = '';
//     if (typeof options.addition && !options.addition) {
//         additionStr = options.addition;
//         debugger
//     }   
//     for (let index = 0; index < repeatCountStr; index++) {
//         text = text + str + addSep(additionStr, additionRepeatCountSeparator, additionSeparator, separatorStr);        
//     }
//     function addSep(addSeparator, repeatTimes, sep, sepStr) {        
//         let text = '';
//         for (let index = 0; index < repeatTimes; index++) {
//             text = text + addSeparator + sep;            
//         }
//         text = text.slice(0, (sep.length * -1)) + sepStr;
//         return text;
//     }
//     console.log(text);
//     return text.slice(0, (separatorStr.length * -1))
//     // console.log(text.slice(0,(separatorStr.length*-1)));    
// };

// 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
// repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })