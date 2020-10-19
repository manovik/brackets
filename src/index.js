module.exports = 
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
          return false;
        }
      }
    }
    return stack.length > 0 ? false : true;
  } return false;
};

// console.log(!(5 % 2 | 0));
// console.log('()[]{}'.length);

