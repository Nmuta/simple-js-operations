module.exports = {
  stringToArray: function(string){
    return string.split(" ");
  },

  swapInPlace: function(arr,indexa,indexb){
    var temp = arr[indexa];
    arr[indexa] = arr[indexb];
    arr[indexb] = temp;
    return arr;
  },

  arrayToString: function(array){
    var arr = array.join(", ");
    return arr;
  },

  keys: function(obj){
    return Object.keys(obj);
  }
};
