module.exports = function check(str, bracketsConfig) {
  let nStr = str;
  for (let i = 0; i < nStr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if(nStr[i] === bracketsConfig[j][0] && nStr[i + 1] === bracketsConfig[j][1]) {
        let pair = bracketsConfig[j].join('');
        nStr = nStr.replace(pair, '');
        i -= 2;
      }
    }
  }
  return nStr == '';
};