module.exports = function check(str, bracketsConfig) {
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if(str[i] === bracketsConfig[j][0] && str[i + 1] === bracketsConfig[j][1]) {
        let brackets = bracketsConfig[j].join('');
        str = str.replace(brackets, '');
        i -= 2;     
      }
    }
  }
  return str == '';
};