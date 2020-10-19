// module.exports = 
function check(str, bracketsConfig) {
  const stack = [];
  let stackIsEmpty = true;
  if(str.length % 2 === 0) {
    for(let i = 0; i < str.length; i++) {
      if(str[i] === [...bracketsConfig.map(j=>j[0])]){
        stack.push(str[i]);
        stackIsEmpty = false;
      } else if(str[i] === [...bracketsConfig.map(j=>j[1])] && 
                stackIsEmpty === false){
        if (stack[stack.length - 1] === [...bracketsConfig.map(j=>j[0])]) {
          stack.pop();
        } else {
          return console.log(false);
        }
      }
    }
    return stack.length > 0 ? console.log(false) : console.log(true);
  } return console.log(false);
};

check('5555512575557777777555566667888888667661133833448441111222233333444442266666', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]);
// console.log(!(5 % 2 | 0));
// console.log('()[]{}'.length);

