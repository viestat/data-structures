var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.length = 0;
  newStack.storage = {};
  return newStack;

};

var stackMethods = {
	push: function(value){
		this.storage[this.length] = value;
		this.length++;

	},
	pop: function(){
		var result;
		if(this.length > 0){
			result = this.storage[this.length - 1];
			this.length--;
		}
		return result;
	},
	size: function(){
		return this.length;
	}
};


