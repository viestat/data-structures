var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.pop = function(){
    var returnValue;
    if (length > 0)
    {
      returnValue = storage[length - 1];
      length--;
    }
    return returnValue;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
