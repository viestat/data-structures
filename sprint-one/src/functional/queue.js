var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    var result;
    result = storage[0];
    if (length > 0) {
      length--;
    }
    //fill in the hole
    for(var i = 0; i < length; i++)
    {
      storage[i] = storage[i + 1];
    }
    return result;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
