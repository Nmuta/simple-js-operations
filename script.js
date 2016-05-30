module.exports = {
  stringToArray: function(inString){
    return inString.split(" ");
  },
  arrayToString: function(inArray){
    return inArray.join(", ");
    // var result = "wash, rinse, repeat";
    // return result;
  },
  swapInPlace: function(inArray,i,j){
    var hold = inArray[i];
    inArray[i]=inArray[j];
    inArray[j]=hold;
    return inArray;
  },
  keys: function(inObject){
    var result=[];
    for (var key in inObject) {
      result.push(key);
    }
    return result;
  }
};

console.log(module.exports.arrayToString(["wash", "rinse", "repeat"]));
