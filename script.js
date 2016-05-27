module.exports = {
  stringToArray: function(string){
    return string.split(" ");
  },

  swapInPlace: function(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
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
