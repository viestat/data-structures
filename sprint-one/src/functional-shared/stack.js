var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
}

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.length = 0;
  extend(newStack, stackMethods);
  return newStack;
};


var stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function(){
  var result;
  if (this.length > 0)
  {
  	result = this.storage[this.length - 1];
  	this.length--;
  }
  return result;
};

stackMethods.size = function(){
  return this.length;
};


