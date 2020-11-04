// module.exports = 
// function check(str, bracketsConfig) {
//   const stack = [];
//   let stackIsEmpty = true;
//   if(str.length % 2 === 0) {
//     for(let i = 0; i < str.length; i++) {
//       if(str[i] === [...bracketsConfig.map(j=>j[0])]){
//         stack.push(str[i]);
//         stackIsEmpty = false;
//       } else if(str[i] === [...bracketsConfig.map(j=>j[1])] && 
//                 stackIsEmpty === false){
//         if (stack[stack.length - 1] === [...bracketsConfig.map(j=>j[0])]) {
//           stack.pop();
//         } else {
//           return false;
//         }
//       }
//     }
//     return stack.length > 0 ? false : true;
//   } return false;
// };

// // console.log(!(5 % 2 | 0));
// // console.log('()[]{}'.length);

module.exports = 
function check(str, bracketsConfig) {  
  var newStr = str;
  
  for (var i = 0; i < newStr; i++) {
    console.log(newStr);
    for (var j = 0; j < bracketsConfig; j++) {
      var brackets = bracketsConfig[j].join('')
      if(newStr[i] === bracketsConfig[j][0] && newStr[i + 1] === bracketsConfig[j][1]) {
        newStr.replace(brackets, '');
        console.log(newStr);
      }
    }
  }
  
  // if (
  return newStr === '';
  // ) console.log('yes');
  // else return console.log('no');
};

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// check('|()|(||)||', [['(', ')'], ['|', '|']]);

// console.log(!(5 % 2 | 0));
// console.log('()[]{}'.length);

// let str = 'abc';
// console.log(str[1])